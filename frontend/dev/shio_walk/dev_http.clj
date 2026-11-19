(ns shio-walk.dev-http
  "shadow-cljs の開発用サーバー (:dev-http) の設定に使う関数 (JVM 側で動く)")

(defn api-request?
  "/api/ で始まるリクエストだけをバックエンドへ転送する (:proxy-predicate)。
  それ以外 (/ や画面のファイル) は public/ から返す"
  [^io.undertow.server.HttpServerExchange ex _config]
  (.startsWith (.getRequestPath ex) "/api/"))
