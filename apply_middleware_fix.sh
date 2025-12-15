#!/bin/bash

# ミドルウェア修正適用スクリプト

echo "========================================="
echo "ミドルウェア修正適用"
echo "========================================="
echo ""

MIDDLEWARE_FILE="$HOME/shio-walk/backend/src/shio_walk/middleware.clj"

# バックアップ
echo "📦 バックアップ作成中..."
cp "$MIDDLEWARE_FILE" "$MIDDLEWARE_FILE.backup.$(date +%Y%m%d_%H%M%S)"
echo "✅ バックアップ完了"
echo ""

# 新しいmiddleware.cljを適用
echo "📝 middleware.clj を更新中..."
cat > "$MIDDLEWARE_FILE" << 'EOF'
(ns shio-walk.middleware
  (:require [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.cors :refer [wrap-cors]]
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
  (fn [request]
    ((ring.middleware.cors/wrap-cors 
      handler
      :access-control-allow-origin [#".*"]
      :access-control-allow-methods [:get :post :put :delete :options]
      :access-control-allow-headers ["Content-Type" "Authorization"]
      :access-control-allow-credentials "true")
     request)))

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
EOF

echo "✅ middleware.clj を更新しました"
echo ""

echo "========================================="
echo "✅ 修正完了"
echo "========================================="
echo ""
echo "次のステップ:"
echo "1. サーバーを再起動してください:"
echo "   cd ~/shio-walk/backend && ./run.sh"
echo ""
echo "2. ブラウザでデモUIを試してください:"
echo "   xdg-open ~/shio-walk/demo.html"
