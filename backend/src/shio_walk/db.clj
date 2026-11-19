(ns shio-walk.db
  "DB 操作。戻り値のキーは next.jdbc の既定どおり :walks/distance_meters のような snake_case。
  API の kebab-case への変換はハンドラ層 (shio-walk.walks.handlers など) で行う。"
  (:require [next.jdbc :as jdbc]
            [next.jdbc.connection :as connection]
            [shio-walk.config :refer [config]])
  (:import (com.zaxxer.hikari HikariDataSource)))

;; コネクションプール
(defonce ^HikariDataSource datasource
  (delay (connection/->pool HikariDataSource (:db config))))

;; with-transaction の中では、その接続を使う
(def ^:dynamic *conn* nil)

(defn- conn [] (or *conn* @datasource))

(defmacro with-transaction
  "body の DB 操作を 1 つのトランザクションにまとめる (途中で例外が出たら全部取り消す)"
  [& body]
  `(if *conn*
     (do ~@body)
     (jdbc/with-transaction [tx# @datasource]
       (binding [*conn* tx#] ~@body))))

(defn execute!
  ([sql-vec] (jdbc/execute! (conn) sql-vec))
  ([sql-vec opts] (jdbc/execute! (conn) sql-vec opts)))

(defn execute-one!
  ([sql-vec] (jdbc/execute-one! (conn) sql-vec))
  ([sql-vec opts] (jdbc/execute-one! (conn) sql-vec opts)))

(defn valid-uuid
  "文字列が UUID ならその文字列、そうでなければ nil (不正な ID で DB が 500 を出さないように)"
  [s]
  (when (and (string? s) (parse-uuid s)) s))

;; ===== ユーザー操作 =====

(defn user-exists? [email]
  (boolean (execute-one!
            ["SELECT 1 FROM users WHERE email = ?" email])))

(defn create-user! [{:keys [email username password-hash]}]
  (execute-one!
   ["INSERT INTO users (email, username, password_hash)
     VALUES (?, ?, ?)
     RETURNING id, email, username, created_at"
    email username password-hash]
   {:return-keys true}))

(defn get-user-by-email [email]
  (execute-one!
   ["SELECT * FROM users WHERE email = ?" email]))

(defn get-user-by-id [user-id]
  (execute-one!
   ["SELECT id, email, username, created_at, last_login
     FROM users WHERE id = ?::uuid" user-id]))

(defn update-last-login! [user-id]
  (execute-one!
   ["UPDATE users SET last_login = CURRENT_TIMESTAMP
     WHERE id = ?::uuid" user-id]))

;; ===== ウォーク操作 =====
;; 更新・完了は user_id も条件に入れ、他人のウォークは「見つからない」扱いにする。

(defn get-active-walk [user-id]
  (execute-one!
   ["SELECT * FROM walks WHERE user_id = ?::uuid AND status = 'active'" user-id]))

(defn start-walk!
  "進行中のウォークがあればそれを返し、なければ新しく作る。
  同時に 2 回押されても、一意インデックス (1 人 1 つ) で 2 つ目はできない。"
  [user-id]
  (or (get-active-walk user-id)
      (execute-one!
       ["INSERT INTO walks (user_id, start_time, status, steps, distance_meters)
         VALUES (?::uuid, CURRENT_TIMESTAMP, 'active', 0, 0)
         ON CONFLICT (user_id) WHERE status = 'active' DO NOTHING
         RETURNING *"
        user-id])
      (get-active-walk user-id)))

(defn get-walk [user-id walk-id]
  (execute-one!
   ["SELECT * FROM walks WHERE id = ?::uuid AND user_id = ?::uuid" walk-id user-id]))

(defn update-walk!
  "進行中のウォークの歩数・距離 (m) を書き換える。自分の進行中のウォークでなければ nil"
  [user-id walk-id steps distance-meters]
  (execute-one!
   ["UPDATE walks
     SET steps = ?, distance_meters = ?, updated_at = CURRENT_TIMESTAMP
     WHERE id = ?::uuid AND user_id = ?::uuid AND status = 'active'
     RETURNING *"
    steps distance-meters walk-id user-id]))

(defn complete-walk!
  "ウォークを完了にし、統計に足す。final が {:steps :distance-meters} なら、その値を最終値として書いてから完了する。
  自分の進行中のウォークでなければ nil。報酬の判定と合わせて、呼び出し側で with-transaction に入れる"
  [user-id walk-id & [{:keys [steps distance-meters]}]]
  (let [walk (execute-one!
              ["UPDATE walks
                SET status = 'completed',
                    steps = COALESCE(?::integer, steps),
                    distance_meters = COALESCE(?::numeric, distance_meters),
                    end_time = CURRENT_TIMESTAMP,
                    updated_at = CURRENT_TIMESTAMP
                WHERE id = ?::uuid AND user_id = ?::uuid AND status = 'active'
                RETURNING *"
               steps distance-meters walk-id user-id])]
    (when walk
      (execute-one!
       ["INSERT INTO user_stats (user_id, total_steps, total_distance_km, total_walks, updated_at)
         VALUES (?::uuid, ?, ?::numeric / 1000.0, 1, CURRENT_TIMESTAMP)
         ON CONFLICT (user_id) DO UPDATE SET
           total_steps = user_stats.total_steps + EXCLUDED.total_steps,
           total_distance_km = user_stats.total_distance_km + EXCLUDED.total_distance_km,
           total_walks = user_stats.total_walks + 1,
           updated_at = CURRENT_TIMESTAMP"
        user-id (:walks/steps walk) (:walks/distance_meters walk)]))
    walk))

(defn get-user-walks [user-id & {:keys [limit] :or {limit 20}}]
  (execute!
   ["SELECT * FROM walks
     WHERE user_id = ?::uuid
     ORDER BY start_time DESC
     LIMIT ?" user-id limit]))

;; ===== 統計操作 =====

(defn get-user-stats [user-id]
  (or (execute-one!
       ["SELECT * FROM user_stats WHERE user_id = ?::uuid" user-id])
      {:user_stats/user_id user-id
       :user_stats/total_steps 0
       :user_stats/total_distance_km 0
       :user_stats/total_walks 0
       :user_stats/rewards_unlocked 0}))

;; ===== 報酬操作 =====

(defn get-all-rewards []
  (execute!
   ["SELECT * FROM rewards ORDER BY threshold_value ASC"]))

(defn get-user-rewards [user-id]
  (execute!
   ["SELECT r.*, ur.unlocked_at
     FROM rewards r
     INNER JOIN user_rewards ur ON r.id = ur.reward_id
     WHERE ur.user_id = ?::uuid
     ORDER BY ur.unlocked_at DESC" user-id]))

(defn check-and-unlock-rewards!
  "累計の歩数・距離が条件に届いた報酬を解放し、user_stats.rewards_unlocked を数え直す。新しく解放した行を返す"
  [user-id]
  (let [stats (get-user-stats user-id)
        steps (:user_stats/total_steps stats)
        distance-m (* (:user_stats/total_distance_km stats) 1000)
        new-rewards (execute!
                     ["INSERT INTO user_rewards (user_id, reward_id)
                       SELECT ?::uuid, id FROM rewards
                       WHERE (threshold_type = 'steps' AND threshold_value <= ?)
                          OR (threshold_type = 'distance' AND threshold_value <= ?)
                       ON CONFLICT DO NOTHING
                       RETURNING *"
                      user-id steps distance-m])]
    (execute-one!
     ["UPDATE user_stats
       SET rewards_unlocked = (SELECT count(*) FROM user_rewards WHERE user_id = ?::uuid),
           updated_at = CURRENT_TIMESTAMP
       WHERE user_id = ?::uuid"
      user-id user-id])
    new-rewards))
