(ns shio-walk.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [shio-walk.routes :refer [app]]
            [shio-walk.config :refer [config]])
  (:gen-class))

(defn -main [& args]
  (let [port (get-in config [:server :port])]
    (println (str "Starting server on port " port "..."))
    (println "Available endpoints:")
    (println "  POST   /api/auth/register")
    (println "  POST   /api/auth/login")
    (println "  GET    /api/health")
    (println "  GET    /api/user/profile (protected)")
    (println "  POST   /api/walks/start (protected)")
    (println "  PUT    /api/walks/:id (protected)")
    (println "  POST   /api/walks/:id/complete (protected)")
    (println "  GET    /api/walks (protected)")
    (println "  GET    /api/stats (protected)")
    (println "  GET    /api/rewards (protected)")
    (println "  GET    /api/rewards/unlocked (protected)")
    (run-jetty app {:port port :join? true})))
