(ns shio-walk.walks.handlers
  (:require [shio-walk.db :as db]
            [ring.util.response :as response]))

;; ===== ウォーク開始 =====
(defn start-walk [request]
  (let [user-id (:user-id request)]
    (try
      (let [walk (db/start-walk! user-id)]
        (response/response 
         {:walk {:id (str (:walks/id walk))
                 :user_id (str (:walks/user_id walk))
                 :start_time (str (:walks/start_time walk))
                 :status (:walks/status walk)
                 :steps (:walks/steps walk)
                 :distance_meters (:walks/distance_meters walk)}}))
      (catch Exception e
        (-> (response/response {:error "Failed to start walk"
                               :details (.getMessage e)})
            (response/status 500))))))

;; ===== ウォーク更新 =====
(defn update-walk [request]
  (let [walk-id (get-in request [:params :id])
        body (:body request)
        steps (:steps body)
        ;; distance_meters と distance の両方をサポート
        distance-meters (or (:distance_meters body)
                           (when-let [dist (:distance body)]
                             ;; distanceが100未満ならkm単位と推定してメートルに変換
                             (if (< dist 100)
                               (* dist 1000)
                               dist)))]
    (cond
      (nil? steps)
      (-> (response/response 
           {:error "steps is required"
            :hint "Please provide the number of steps taken"})
          (response/status 400))
      
      (nil? distance-meters)
      (-> (response/response 
           {:error "distance is required"
            :hint "Please provide distance_meters (in meters) or distance (in km)"
            :example {:steps 1000 :distance_meters 800}})
          (response/status 400))
      
      :else
      (try
        (if-let [walk (db/update-walk! walk-id steps distance-meters)]
          (response/response 
           {:walk {:id (str (:walks/id walk))
                   :steps (:walks/steps walk)
                   :distance_meters (:walks/distance_meters walk)
                   :status (:walks/status walk)
                   :updated_at (str (:walks/updated_at walk))}})
          (-> (response/response {:error "Walk not found or already completed"})
              (response/status 404)))
        (catch Exception e
          (-> (response/response {:error "Failed to update walk"
                                 :details (.getMessage e)})
              (response/status 500)))))))

;; ===== ウォーク完了 =====
(defn complete-walk [request]
  (let [walk-id (get-in request [:params :id])]
    (try
      (if-let [walk (db/complete-walk! walk-id)]
        (do
          ;; 報酬チェック
          (db/check-and-unlock-rewards! (str (:walks/user_id walk)))
          (response/response 
           {:walk {:id (str (:walks/id walk))
                   :status (:walks/status walk)
                   :steps (:walks/steps walk)
                   :distance_meters (:walks/distance_meters walk)
                   :start_time (str (:walks/start_time walk))
                   :end_time (str (:walks/end_time walk))}}))
        (-> (response/response {:error "Walk not found or already completed"})
            (response/status 404)))
      (catch Exception e
        (-> (response/response {:error "Failed to complete walk"
                               :details (.getMessage e)})
            (response/status 500))))))

;; ===== ウォーク履歴取得 =====
(defn get-walks [request]
  (let [user-id (:user-id request)]
    (try
      (let [walks (db/get-user-walks user-id)]
        (response/response 
         {:walks (mapv (fn [w]
                        {:id (str (:walks/id w))
                         :user_id (str (:walks/user_id w))
                         :start_time (str (:walks/start_time w))
                         :end_time (when (:walks/end_time w) (str (:walks/end_time w)))
                         :status (:walks/status w)
                         :steps (:walks/steps w)
                         :distance_meters (:walks/distance_meters w)})
                      walks)}))
      (catch Exception e
        (-> (response/response {:error "Failed to get walks"
                               :details (.getMessage e)})
            (response/status 500))))))

;; ===== 統計取得 =====
(defn get-stats [request]
  (let [user-id (:user-id request)]
    (try
      (let [stats (db/get-user-stats user-id)]
        (response/response 
         {:total_steps (:user_stats/total_steps stats)
          :total_distance_km (:user_stats/total_distance_km stats)
          :total_walks (:user_stats/total_walks stats)
          :rewards_unlocked (:user_stats/rewards_unlocked stats)}))
      (catch Exception e
        (-> (response/response {:error "Failed to get stats"
                               :details (.getMessage e)})
            (response/status 500))))))
