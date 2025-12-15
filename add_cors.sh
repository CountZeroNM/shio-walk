#!/bin/bash

# CORSサポート追加スクリプト

echo "========================================="
echo "CORSサポート追加"
echo "========================================="
echo ""

# 1. deps.edn にring-corsを追加
echo "📝 1. deps.edn にring-corsを追加..."
DEPS_FILE="$HOME/shio-walk/backend/deps.edn"

cat > "$DEPS_FILE" << 'EOF'
{:paths ["src" "resources"]
 :deps {org.clojure/clojure {:mvn/version "1.11.1"}
        ring/ring-core {:mvn/version "1.12.1"}
        ring/ring-jetty-adapter {:mvn/version "1.12.1"}
        ring/ring-json {:mvn/version "0.5.1"}
        metosin/reitit {:mvn/version "0.7.0-alpha7"}
        metosin/reitit-ring {:mvn/version "0.7.0-alpha7"}
        com.github.seancorfield/next.jdbc {:mvn/version "1.3.909"}
        org.postgresql/postgresql {:mvn/version "42.7.1"}
        com.zaxxer/HikariCP {:mvn/version "5.1.0"}
        buddy/buddy-hashers {:mvn/version "2.0.167"}
        buddy/buddy-sign {:mvn/version "3.5.351"}
        ring-cors/ring-cors {:mvn/version "0.1.13"}}
 
 :aliases {:run {:main-opts ["-m" "shio-walk.core"]}
           :migrate {:extra-paths ["resources/migrations"]
                    :extra-deps {com.github.seancorfield/next.jdbc {:mvn/version "1.3.909"}
                                org.postgresql/postgresql {:mvn/version "42.7.1"}}
                    :main-opts ["-m" "shio-walk.migrate"]}}}
EOF

echo "✅ deps.edn を更新しました"
echo ""

# 2. middleware.clj にCORS設定を追加
echo "📝 2. middleware.clj にCORS設定を追加..."
MIDDLEWARE_FILE="$HOME/shio-walk/backend/src/shio_walk/middleware.clj"

# バックアップ
cp "$MIDDLEWARE_FILE" "$MIDDLEWARE_FILE.backup.$(date +%Y%m%d_%H%M%S)"

cat > "$MIDDLEWARE_FILE" << 'EOF'
(ns shio-walk.middleware
  (:require [ring.middleware.json :refer [wrap-json-body wrap-json-response]]
            [ring.middleware.cors :refer [wrap-cors]]
            [shio-walk.auth.core :as auth]
            [ring.util.response :as response]))

(defn wrap-authentication [handler]
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

(defn wrap-middlewares [handler]
  (-> handler
      (wrap-json-body {:keywords? true})
      wrap-json-response
      (wrap-cors :access-control-allow-origin [#".*"]
                 :access-control-allow-methods [:get :post :put :delete :options]
                 :access-control-allow-headers ["Content-Type" "Authorization"]
                 :access-control-allow-credentials "true")))
EOF

echo "✅ middleware.clj を更新しました"
echo ""

echo "========================================="
echo "✅ CORS設定完了"
echo "========================================="
echo ""
echo "次のステップ:"
echo "1. サーバーを再起動してください:"
echo "   cd ~/shio-walk/backend && ./run.sh"
echo ""
echo "2. ブラウザでデモUIを開いてください:"
echo "   xdg-open ~/shio-walk/demo.html"
echo ""
echo "これでログインできるようになります！"
