(ns shio-walk.middleware
  (:require [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.cors :as cors]
            [shio-walk.auth.core :as auth]
            [ring.util.response :as response]))

;; JWT認証ミドルウェア
(defn wrap-jwt-authentication [handler]
  (fn [request]
    (let [auth-header (get-in request [:headers "authorization"])
          token (when auth-header
                  (second (re-find #"Bearer (.+)" auth-header)))]
      (if token
        (if-let [claims (auth/verify-token token)]
          (handler (assoc request :user-id (:user-id claims)))
          (-> (response/response {:error "Invalid or expired token"})
              (response/status 401)))
        (-> (response/response {:error "Authorization header missing"})
            (response/status 401))))))

;; CORSミドルウェア
(defn wrap-cors [handler]
  (cors/wrap-cors handler
                  :access-control-allow-origin [#".*"]
                  :access-control-allow-methods [:get :post :put :delete :options]
                  :access-control-allow-headers ["Content-Type" "Authorization"]
                  :access-control-allow-credentials "true"))

;; エラーハンドリングミドルウェア
(defn wrap-error-handling [handler]
  (fn [request]
    (try
      (handler request)
      (catch Exception e
        (-> (response/response {:error "Internal server error"
                               :message (.getMessage e)})
            (response/status 500))))))

;; 統合ミドルウェア（オプション）
(defn wrap-middlewares [handler]
  (-> handler
      (wrap-json-body {:keywords? true})
      wrap-json-response
      wrap-cors))
