(ns shio-walk.convert
  "DB の行 (snake_case のキー) → API の JSON (kebab-case のキー) の変換を 1 か所にまとめる。
  API の約束: キーは kebab-case、ID は文字列、数値は nil にしない、時刻は ISO-8601 の UTC (末尾 Z)。")

(defn iso
  "DB の時刻 (java.sql.Timestamp など) → \"2026-03-07T23:14:16.077Z\"。nil は nil"
  [t]
  (cond
    (nil? t) nil
    (instance? java.sql.Timestamp t) (str (.toInstant ^java.sql.Timestamp t))
    (instance? java.time.OffsetDateTime t) (str (.toInstant ^java.time.OffsetDateTime t))
    (instance? java.time.Instant t) (str t)
    :else (str t)))

(defn- num0 [x] (if (nil? x) 0 x))

(defn walk [w]
  {:id              (str (:walks/id w))
   :user-id         (str (:walks/user_id w))
   :start-time      (iso (:walks/start_time w))
   :end-time        (iso (:walks/end_time w))
   :status          (:walks/status w)
   :steps           (num0 (:walks/steps w))
   :distance-meters (num0 (:walks/distance_meters w))
   :updated-at      (iso (:walks/updated_at w))})

(defn stats [s]
  {:total-steps       (num0 (:user_stats/total_steps s))
   :total-distance-km (num0 (:user_stats/total_distance_km s))
   :total-walks       (num0 (:user_stats/total_walks s))
   :rewards-unlocked  (num0 (:user_stats/rewards_unlocked s))})

(defn reward [r]
  (cond-> {:id              (str (:rewards/id r))
           :threshold-type  (:rewards/threshold_type r)
           :threshold-value (:rewards/threshold_value r)
           :title           (:rewards/title r)
           :description     (:rewards/description r)
           :image-url       (:rewards/image_url r)
           :audio-url       (:rewards/audio_url r)}
    (contains? r :user_rewards/unlocked_at) (assoc :unlocked-at (iso (:user_rewards/unlocked_at r)))))

(defn user [u]
  (cond-> {:id       (str (:users/id u))
           :email    (:users/email u)
           :username (:users/username u)}
    (contains? u :users/created_at) (assoc :created-at (iso (:users/created_at u)))
    (contains? u :users/last_login) (assoc :last-login (iso (:users/last_login u)))))
