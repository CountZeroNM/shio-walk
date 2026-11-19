(ns shio-walk.api-test
  "API のテスト。ring の app を直接呼ぶ (サーバーは起動しない)。
  DB を空にするので、DB_NAME が _test で終わる DB でだけ動く: scripts/test-backend.sh"
  (:require [clojure.test :refer [deftest is testing use-fixtures]]
            [cheshire.core :as json]
            [ring.mock.request :as mock]
            [shio-walk.config :refer [config]]
            [shio-walk.db :as db]
            [shio-walk.routes :refer [app]]))

(defn- clean-db [f]
  (let [dbname (get-in config [:db :dbname])]
    (when-not (re-find #"_test$" dbname)
      (throw (ex-info (str "テストは DB を空にします。DB_NAME=shio_walk_test のように _test で終わる DB を指定してください (今: " dbname ")") {})))
    (db/execute! ["TRUNCATE TABLE user_rewards, user_stats, walks, users"])
    (f)))

(use-fixtures :each clean-db)

(defn- slurp-body [b] (if (string? b) b (slurp b)))

(defn- call
  "メソッド・パス・本文・トークン → {:status :body (JSON を読んだマップ)}"
  [method path & [body token]]
  (let [req (cond-> (mock/request method path)
              body  (mock/json-body body)
              token (mock/header "authorization" (str "Bearer " token)))
        resp (app req)]
    {:status (:status resp)
     :body (some-> (:body resp) slurp-body (json/parse-string true))}))

(defn- register! [name]
  (let [r (call :post "/api/auth/register" {:email (str name "@example.com") :username name :password "password123"})]
    (is (= 200 (:status r)) (pr-str r))
    (get-in r [:body :token])))

(def iso-re #"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$")

(deftest register-and-login
  (let [r (call :post "/api/auth/register" {:email "a@example.com" :username "alice" :password "password123"})]
    (is (= 200 (:status r)))
    (is (string? (get-in r [:body :token])))
    (is (re-find iso-re (get-in r [:body :user :created-at])) "時刻は ISO-8601 の UTC")
    (is (not (contains? (get-in r [:body :user]) :created_at)) "キーは kebab-case"))
  (testing "重複・不正な入力"
    (is (= 409 (:status (call :post "/api/auth/register" {:email "a@example.com" :username "alice2" :password "password123"}))))
    (is (= 409 (:status (call :post "/api/auth/register" {:email "b@example.com" :username "alice" :password "password123"}))) "ユーザー名の重複は 500 でなく 409")
    (is (= 400 (:status (call :post "/api/auth/register" {:email "not-an-email" :username "bob" :password "password123"}))))
    (is (= 400 (:status (call :post "/api/auth/register" {:email "c@example.com" :username "carol" :password "short"})))))
  (testing "ログイン"
    (is (= 200 (:status (call :post "/api/auth/login" {:email "a@example.com" :password "password123"}))))
    (is (= 401 (:status (call :post "/api/auth/login" {:email "a@example.com" :password "wrong-password"}))))
    (is (= 401 (:status (call :post "/api/auth/login" {}))))))

(deftest walk-flow
  (let [t (register! "walker")
        start (call :post "/api/walks/start" nil t)
        walk (get-in start [:body :walk])
        id (:id walk)]
    (testing "開始"
      (is (= 200 (:status start)))
      (is (= "active" (:status walk)))
      (is (= 0 (:steps walk)))
      (is (re-find iso-re (:start-time walk)))
      (is (= id (get-in (call :post "/api/walks/start" nil t) [:body :walk :id])) "進行中があれば同じウォークを返す"))
    (testing "更新"
      (let [r (call :put (str "/api/walks/" id) {:steps 1200 :distance-meters 950.5} t)]
        (is (= 200 (:status r)))
        (is (= "active" (get-in r [:body :walk :status])) "DB の内部の値 in_progress を返さない")
        (is (= 1200 (get-in r [:body :walk :steps])))
        (is (== 950.5 (get-in r [:body :walk :distance-meters]))))
      (is (= 400 (:status (call :put (str "/api/walks/" id) {:steps 10 :distance 0.5} t))) "km の distance は受け付けない (単位の推測をしない)")
      (is (= 400 (:status (call :put (str "/api/walks/" id) {:steps -1 :distance-meters 0} t))))
      (is (= 400 (:status (call :put (str "/api/walks/" id) {:steps 1.5 :distance-meters 0} t))))
      (is (= 400 (:status (call :put (str "/api/walks/" id) {:distance-meters 0} t))))
      (is (= 404 (:status (call :put "/api/walks/not-a-uuid" {:steps 1 :distance-meters 1} t))) "不正な ID は 500 でなく 404"))
    (testing "完了 (最終値を本文で渡す)"
      (let [r (call :post (str "/api/walks/" id "/complete") {:steps 5200 :distance-meters 4100} t)]
        (is (= 200 (:status r)))
        (is (= "completed" (get-in r [:body :walk :status])))
        (is (= 5200 (get-in r [:body :walk :steps])))
        (is (re-find iso-re (get-in r [:body :walk :end-time]))))
      (is (= 404 (:status (call :post (str "/api/walks/" id "/complete") nil t))) "二重の完了はできない"))
    (testing "統計と報酬"
      (let [s (:body (call :get "/api/stats" nil t))]
        (is (= 5200 (:total-steps s)))
        (is (== 4.1 (:total-distance-km s)))
        (is (= 1 (:total-walks s)))
        (is (= 3 (:rewards-unlocked s)) "1000歩・5000歩・1km"))
      (let [u (get-in (call :get "/api/rewards/unlocked" nil t) [:body :rewards])]
        (is (= 3 (count u)))
        (is (every? #(re-find iso-re (:unlocked-at %)) u)))
      (is (= 5 (count (get-in (call :get "/api/rewards" nil t) [:body :rewards])))))
    (testing "履歴"
      (let [ws (get-in (call :get "/api/walks" nil t) [:body :walks])]
        (is (= 1 (count ws)))
        (is (= "completed" (:status (first ws))))))
    (testing "完了後は新しいウォークを始められる"
      (let [w2 (get-in (call :post "/api/walks/start" nil t) [:body :walk])]
        (is (not= id (:id w2)))
        (is (= "active" (:status w2)))))))

(deftest other-users-walk
  (let [owner (register! "owner")
        other (register! "other")
        id (get-in (call :post "/api/walks/start" nil owner) [:body :walk :id])]
    (is (= 404 (:status (call :put (str "/api/walks/" id) {:steps 99999 :distance-meters 99999} other)))
        "他人のウォークは書き換えられない")
    (is (= 404 (:status (call :post (str "/api/walks/" id "/complete") nil other)))
        "他人のウォークは完了できない")
    (is (= 0 (get-in (call :get "/api/walks" nil owner) [:body :walks 0 :steps])))
    (is (= [] (get-in (call :get "/api/walks" nil other) [:body :walks])))))

(deftest auth-required
  (is (= 401 (:status (call :get "/api/walks"))))
  (is (= 401 (:status (call :get "/api/walks" nil "bad.token.value"))))
  (is (= 200 (:status (call :get "/api/health")))))
