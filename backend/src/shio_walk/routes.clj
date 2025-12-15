(ns shio-walk.routes
  (:require [compojure.core :refer [defroutes GET POST PUT DELETE context]]
            [compojure.route :as route]
            [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.params :refer [wrap-params]]
            [shio-walk.middleware :refer [wrap-jwt-authentication wrap-cors wrap-error-handling]]
            [shio-walk.auth.handlers :as auth]
            [shio-walk.walks.handlers :as walks]
            [shio-walk.rewards.handlers :as rewards]
            [ring.util.response :as response]))

;; ===== 公開ルート (認証不要) =====

(defroutes public-routes
  (POST "/api/auth/register" [] auth/register)
  (POST "/api/auth/login" [] auth/login)
  (GET "/api/health" [] 
    (response/response {:status "ok" :message "Server is running"})))

;; ===== 保護されたルート (認証必要) =====

(defroutes protected-routes
  ;; ユーザー
  (GET "/api/user/profile" [] auth/get-profile)
  
  ;; ウォーク
  (POST "/api/walks/start" [] walks/start-walk)
  (PUT "/api/walks/:id" [] walks/update-walk)
  (POST "/api/walks/:id/complete" [] walks/complete-walk)
  (GET "/api/walks" [] walks/get-walks)
  (GET "/api/stats" [] walks/get-stats)
  
  ;; 報酬
  (GET "/api/rewards" [] rewards/get-all-rewards)
  (GET "/api/rewards/unlocked" [] rewards/get-user-rewards))

;; ===== アプリケーション全体のルート =====

(defroutes app-routes
  public-routes
  (wrap-jwt-authentication protected-routes)
  (route/not-found (response/response {:error "Not found"})))

;; ===== ミドルウェア適用 (順序重要!) =====

(def app
  (-> app-routes
      wrap-error-handling
      wrap-params
      (wrap-json-body {:keywords? true})
      wrap-json-response
      wrap-cors))
