(ns shio-walk.middleware
  (:require [ring.middleware.cors :as cors]
            [shio-walk.auth.core :as auth]
            [shio-walk.config :refer [config]]
            [ring.util.response :as response]))

;; JWT認証ミドルウェア
(defn wrap-jwt-authentication [handler]
  (fn [request]
    (let [auth-header (get-in request [:headers "authorization"])
          token (when auth-header
                  (second (re-find #"^Bearer (.+)$" auth-header)))]
      (if token
        (if-let [claims (auth/verify-token token)]
          (handler (assoc request :user-id (:user-id claims)))
          (-> (response/response {:error "Invalid or expired token"})
              (response/status 401)))
        (-> (response/response {:error "Authorization header missing"})
            (response/status 401))))))

;; CORSミドルウェア
;; 認証は Authorization ヘッダ (Cookie ではない) なので credentials は許さない
(defn wrap-cors [handler]
  (let [origins (get-in config [:cors :origins])]
    (cors/wrap-cors handler
                    :access-control-allow-origin (if (seq origins)
                                                   (mapv #(re-pattern (java.util.regex.Pattern/quote %)) origins)
                                                   [#".*"])
                    :access-control-allow-methods [:get :post :put :delete :options]
                    :access-control-allow-headers ["Content-Type" "Authorization"])))

;; エラーハンドリングミドルウェア
;; 想定外の例外はサーバーのログに出し、クライアントには中身を返さない
(defn wrap-error-handling [handler]
  (fn [request]
    (try
      (handler request)
      (catch Exception e
        (binding [*out* *err*]
          (println "ERROR" (:request-method request) (:uri request) "-" (.getMessage e)))
        (.printStackTrace e)
        (-> (response/response {:error "Internal server error"})
            (response/status 500))))))
