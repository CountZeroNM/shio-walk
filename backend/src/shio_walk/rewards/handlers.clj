(ns shio-walk.rewards.handlers
  (:require [shio-walk.db :as db]
            [shio-walk.convert :as convert]
            [ring.util.response :as response]))

;; ===== すべての報酬を取得 =====
(defn get-all-rewards [_request]
  (response/response {:rewards (mapv convert/reward (db/get-all-rewards))}))

;; ===== ユーザーが獲得した報酬を取得 =====
(defn get-user-rewards [request]
  (response/response {:rewards (mapv convert/reward (db/get-user-rewards (:user-id request)))}))
