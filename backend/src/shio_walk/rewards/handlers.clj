(ns shio-walk.rewards.handlers
  (:require [shio-walk.db :as db]
            [ring.util.response :as response]))

;; ===== すべての報酬を取得 =====

(defn get-all-rewards [request]
  (try
    (let [rewards (db/get-all-rewards)]
      (response/response 
       {:rewards (mapv (fn [r]
                        {:id (str (:rewards/id r))
                         :threshold_type (:rewards/threshold_type r)
                         :threshold_value (:rewards/threshold_value r)
                         :title (:rewards/title r)
                         :description (:rewards/description r)
                         :image_url (:rewards/image_url r)
                         :audio_url (:rewards/audio_url r)})
                      rewards)}))
    (catch Exception e
      (-> (response/response {:error "Failed to get rewards"
                             :details (.getMessage e)})
          (response/status 500)))))

;; ===== ユーザーが獲得した報酬を取得 =====

(defn get-user-rewards [request]
  (let [user-id (:user-id request)]
    (try
      (let [rewards (db/get-user-rewards user-id)]
        (response/response 
         {:rewards (mapv (fn [r]
                          {:id (str (:rewards/id r))
                           :threshold_type (:rewards/threshold_type r)
                           :threshold_value (:rewards/threshold_value r)
                           :title (:rewards/title r)
                           :description (:rewards/description r)
                           :image_url (:rewards/image_url r)
                           :audio_url (:rewards/audio_url r)
                           :unlocked_at (str (:user_rewards/unlocked_at r))})
                        rewards)}))
      (catch Exception e
        (-> (response/response {:error "Failed to get user rewards"
                               :details (.getMessage e)})
            (response/status 500))))))
