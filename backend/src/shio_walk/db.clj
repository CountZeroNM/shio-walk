(ns shio-walk.db
  (:require [next.jdbc :as jdbc]
            [next.jdbc.connection :as connection]
            [next.jdbc.sql :as sql]
            [shio-walk.config :refer [config]])
  (:import (com.zaxxer.hikari HikariDataSource)))

;; コネクションプール
(defonce ^HikariDataSource datasource
  (delay (connection/->pool HikariDataSource (:db config))))

(defn execute!
  ([sql-vec]
   (jdbc/execute! @datasource sql-vec))
  ([sql-vec opts]
   (jdbc/execute! @datasource sql-vec opts)))

(defn execute-one!
  ([sql-vec]
   (jdbc/execute-one! @datasource sql-vec))
  ([sql-vec opts]
   (jdbc/execute-one! @datasource sql-vec opts)))

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

(defn start-walk! [user-id]
  (execute-one!
   ["INSERT INTO walks (user_id, start_time, status) 
     VALUES (?::uuid, CURRENT_TIMESTAMP, 'in_progress') 
     RETURNING id, user_id, start_time, status, steps, distance_meters"
    user-id]
   {:return-keys true}))

(defn get-walk [walk-id]
  (execute-one!
   ["SELECT * FROM walks WHERE id = ?::uuid" walk-id]))

(defn update-walk! [walk-id steps distance]
  (execute-one!
   ["UPDATE walks 
     SET steps = ?, distance_meters = ?, updated_at = CURRENT_TIMESTAMP 
     WHERE id = ?::uuid AND status = 'in_progress'
     RETURNING *"
    steps distance walk-id]))

(defn complete-walk! [walk-id]
  (let [walk (execute-one!
              ["UPDATE walks 
                SET status = 'completed', 
                    end_time = CURRENT_TIMESTAMP,
                    updated_at = CURRENT_TIMESTAMP
                WHERE id = ?::uuid AND status = 'in_progress'
                RETURNING *" walk-id])]
    (when walk
      ;; 統計更新
      (execute-one!
       ["INSERT INTO user_stats (user_id, total_steps, total_distance_km, total_walks, updated_at)
         VALUES (?::uuid, ?, ?::numeric / 1000.0, 1, CURRENT_TIMESTAMP)
         ON CONFLICT (user_id) DO UPDATE SET
           total_steps = user_stats.total_steps + EXCLUDED.total_steps,
           total_distance_km = user_stats.total_distance_km + EXCLUDED.total_distance_km,
           total_walks = user_stats.total_walks + 1,
           updated_at = CURRENT_TIMESTAMP"
        (:walks/user_id walk) (:walks/steps walk) (:walks/distance_meters walk)]))
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

(defn check-and-unlock-rewards! [user-id]
  (let [stats (get-user-stats user-id)
        steps (:user_stats/total_steps stats)
        distance-m (* (:user_stats/total_distance_km stats) 1000)]
    (execute!
     ["INSERT INTO user_rewards (user_id, reward_id)
       SELECT ?::uuid, id FROM rewards
       WHERE (threshold_type = 'steps' AND threshold_value <= ?)
          OR (threshold_type = 'distance' AND threshold_value <= ?)
       ON CONFLICT DO NOTHING
       RETURNING *"
      user-id steps distance-m])))
