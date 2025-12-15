#!/bin/bash

# 依存関係修正スクリプト - CompojureとCORSを追加

echo "========================================="
echo "依存関係修正とCORSサポート追加"
echo "========================================="
echo ""

# 1. deps.edn を正しく修正
echo "📝 1. deps.edn にCompojureとring-corsを追加..."
DEPS_FILE="$HOME/shio-walk/backend/deps.edn"

cat > "$DEPS_FILE" << 'EOF'
{:paths ["src" "resources"]
 :deps {org.clojure/clojure {:mvn/version "1.11.1"}
        ring/ring-core {:mvn/version "1.12.1"}
        ring/ring-jetty-adapter {:mvn/version "1.12.1"}
        ring/ring-json {:mvn/version "0.5.1"}
        compojure/compojure {:mvn/version "1.7.1"}
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

# 2. middleware.clj のCORS設定を確認・修正
echo "📝 2. middleware.clj を確認中..."
MIDDLEWARE_FILE="$HOME/shio-walk/backend/src/shio_walk/middleware.clj"

# 現在のmiddleware.cljの内容を確認
if grep -q "wrap-cors" "$MIDDLEWARE_FILE"; then
    echo "✅ wrap-cors は既に定義されています"
else
    echo "⚠️  wrap-cors が見つかりません。追加が必要かもしれません。"
    echo ""
    echo "現在のmiddleware.cljの内容:"
    cat "$MIDDLEWARE_FILE"
fi

echo ""
echo "========================================="
echo "✅ 依存関係の修正完了"
echo "========================================="
echo ""
echo "次のステップ:"
echo "1. サーバーを再起動してください:"
echo "   cd ~/shio-walk/backend && ./run.sh"
echo ""
echo "注意: 初回起動時はCompojureのダウンロードに時間がかかります"
