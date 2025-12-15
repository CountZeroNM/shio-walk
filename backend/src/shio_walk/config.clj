(ns shio-walk.config)

(def config
  {:db {:dbtype "postgresql"
        :dbname (or (System/getenv "DB_NAME") "shio_walk")
        :host (or (System/getenv "DB_HOST") "localhost")
        :port (Integer/parseInt (or (System/getenv "DB_PORT") "5432"))
        :user (or (System/getenv "DB_USER") "shio_user")
        :username (or (System/getenv "DB_USER") "shio_user")
        :password (or (System/getenv "DB_PASSWORD") "shiopass")
        :maximumPoolSize 10}
   
   :auth {:secret (or (System/getenv "JWT_SECRET") 
                      "dev-secret-change-in-production-256bit")
          :token-expiry (* 60 60 24 7)} ; 7日間
   
   :server {:port (Integer/parseInt (or (System/getenv "PORT") "3000"))}})
