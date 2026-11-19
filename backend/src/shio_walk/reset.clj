(ns shio-walk.reset
  "開発用: ウォーク・統計・獲得報酬を消す (ユーザーと報酬マスタは残す)。
  cd backend && clj -M:reset   (DB_NAME などの環境変数は run.sh と同じ)"
  (:require [shio-walk.db :as db]))

(defn reset-data! []
  (db/with-transaction
    (db/execute! ["TRUNCATE TABLE user_rewards, user_stats, walks"])))

(defn -main [& _args]
  (println "Resetting walk data...")
  (reset-data!)
  (println "Successfully reset all walk data.")
  (System/exit 0))
