(ns shio-walk.config
  (:require [clojure.string :as str]))

(def dev-secret
  "開発用の JWT 署名鍵。ソースに書いてあるので、外から使えるサーバーでは必ず環境変数 JWT_SECRET で替える"
  "dev-secret-change-in-production-256bit")

(defn- env [k default] (or (System/getenv k) default))

(def config
  {:db {:dbtype "postgresql"
        :dbname (env "DB_NAME" "shio_walk")
        :host (env "DB_HOST" "localhost")
        :port (Integer/parseInt (env "DB_PORT" "5432"))
        :user (env "DB_USER" "shio_user")
        :username (env "DB_USER" "shio_user")   ; HikariCP は :username を読む
        :password (env "DB_PASSWORD" "shiopass")
        :maximumPoolSize 10}

   :auth {:secret (env "JWT_SECRET" dev-secret)
          :token-expiry (* 60 60 24 7)} ; 7日間

   ;; CORS で許す Origin (カンマ区切り)。未設定なら開発用にすべて許す。
   ;; 画面と API を同じ Origin から出す (shadow-cljs の :proxy-url や nginx) ときは CORS は使われない
   :cors {:origins (some->> (System/getenv "CORS_ORIGINS")
                            (#(str/split % #","))
                            (map str/trim)
                            (remove str/blank?)
                            vec)}

   :server {:port (Integer/parseInt (env "PORT" "3000"))}})
