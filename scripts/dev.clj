(ns dev
  "bb.edn のタスクの中身。DB・バックエンド・画面の開発サーバーを起動する。"
  (:require [babashka.process :as p]
            [clojure.java.io :as io]
            [clojure.string :as str]))

(defn- port-open? [port]
  (try (with-open [s (java.net.Socket.)]
         (.connect s (java.net.InetSocketAddress. "localhost" (int port)) 300)
         true)
       (catch Exception _ false)))

(defn- sh! [dir & cmd]
  (let [{:keys [exit]} @(p/process cmd {:dir dir :inherit true})]
    (when-not (zero? exit)
      (println "失敗:" (str/join " " cmd) "(終了コード" exit ")")
      (System/exit exit))))

(defn db-up! []
  (sh! "." "docker" "compose" "up" "-d")
  (print "DB の起動を待っています") (flush)
  (loop [n 0]
    (cond
      (zero? (:exit (p/shell {:continue true :out nil :err nil}
                             "docker" "exec" "shio-walk-db" "pg_isready" "-U" "shio_user")))
      (println " OK")

      (>= n 60)
      (do (println "\nDB が 60 秒たっても応答しません (docker compose logs db を見てください)")
          (System/exit 1))

      :else
      (do (print ".") (flush) (Thread/sleep 1000) (recur (inc n))))))

(defn migrate! []
  (db-up!)
  (sh! "backend" "clojure" "-M:migrate" "migrate"))

(defn test! []
  (db-up!)
  (sh! "." "./scripts/test-backend.sh")
  (sh! "frontend" "npm" "test"))

(defn- start!
  "cmd を dir で起動し、出力の各行に [name] を付けて表示する。"
  [name dir cmd]
  (let [proc (p/process cmd {:dir dir :err :out :shutdown p/destroy-tree})]
    (future
      (with-open [r (io/reader (:out proc))]
        (doseq [line (line-seq r)]
          (locking *out* (println (str "[" name "] " line))))))
    proc))

(defn dev! []
  (db-up!)
  (let [servers [["backend"  3000 "backend"  ["./run.sh"]]
                 ["frontend" 8080 "frontend" ["npx" "shadow-cljs" "watch" "app"]]]
        procs   (doall
                 (for [[name port dir cmd] servers
                       :let [busy? (port-open? port)]
                       :when (or (not busy?)
                                 (do (println (str "[" name "] ポート " port " はもう使われているので起動しません (起動済み?)"))
                                     false))]
                   (start! name dir cmd)))]
    (when (seq procs)
      (println "起動中… 画面は http://localhost:8080 (Ctrl-C で止める)")
      ;; どれか 1 つが終わったら、残りも止める
      (let [done (promise)]
        (doseq [pr procs] (future (deref pr) (deliver done pr)))
        (let [ended @done]
          (println "終了しました:" (str/join " " (:cmd ended)) "(終了コード" (:exit @ended) ")")
          (doseq [pr procs] (p/destroy-tree pr))
          (System/exit (:exit @ended)))))))
