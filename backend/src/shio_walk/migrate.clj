(ns shio-walk.migrate
  (:require [migratus.core :as migratus]
            [shio-walk.config :refer [config]]))

(def migratus-config
  {:store :database
   :migration-dir "migrations"
   :db (:db config)})

(defn migrate []
  (println "Running migrations...")
  (migratus/migrate migratus-config)
  (println "Migrations completed!"))

(defn rollback []
  (println "Rolling back last migration...")
  (migratus/rollback migratus-config)
  (println "Rollback completed!"))

(defn -main [& args]
  (case (first args)
    "migrate" (migrate)
    "rollback" (rollback)
    (println "Usage: migrate | rollback")))
