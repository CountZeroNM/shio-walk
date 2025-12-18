(ns shio-walk.events
  (:require [re-frame.core :as rf]
            [shio-walk.db :as db]
            [shio-walk.api :as api]))

;; --------------------
;; 初期化
;; --------------------
(rf/reg-event-fx
 :initialize-db
 (fn [_ _]
   (let [token (.getItem js/localStorage "token")
         user-str (.getItem js/localStorage "user")
         user (when (and token user-str)
                (try (js->clj (.parse js/JSON user-str) :keywordize-keys true)
                     (catch :default _ nil)))
         new-db (cond-> db/default-db
                  token (assoc :token token)
                  user  (assoc :user user :current-page :dashboard))]
     (if token
       {:db new-db
        :dispatch [:load-initial-data]}
       {:db new-db}))))

;; --------------------
;; 共通UI状態
;; --------------------
(rf/reg-event-db
 :set-error
 (fn [db [_ err]]
   (assoc db :error err :loading? false)))

(rf/reg-event-db
 :set-loading
 (fn [db [_ v]]
   (assoc db :loading? v)))

(rf/reg-event-db
 :set-page
 (fn [db [_ page]]
   (assoc db :current-page page :error nil)))

;; --------------------
;; 認証
;; --------------------
(rf/reg-event-fx
 :login
 (fn [{:keys [db]} [_ credentials]]
   (api/login
    credentials
    #(rf/dispatch [:login-success %])
    #(rf/dispatch [:set-error "ログインに失敗しました"]))
   {:db (assoc db :loading? true)}))

(rf/reg-event-db
 :login-success
 (fn [db [_ {:keys [token user]}]]
   (.setItem js/localStorage "token" token)
   (.setItem js/localStorage "user" (.stringify js/JSON (clj->js user)))
   (rf/dispatch [:load-initial-data])
   (assoc db
          :token token
          :user user
          :loading? false
          :current-page :dashboard)))

(rf/reg-event-db
 :logout
 (fn [_ _]
   (.removeItem js/localStorage "token")
   (.removeItem js/localStorage "user")
   (assoc db/default-db :current-page :login)))

;; --------------------
;; 初期データロード
;; --------------------
(rf/reg-event-fx
 :load-initial-data
 (fn [_ _]
   {:dispatch-n [[:load-stats]
                 [:load-walks]
                 [:load-rewards]
                 [:load-unlocked-rewards]]}))

(rf/reg-event-fx
 :load-walks
 (fn [{:keys [db]} _]
   (api/get-walks
    (:token db)
    #(rf/dispatch [:walks-loaded %])
    #(rf/dispatch [:set-error "ウォーク取得失敗"]))
   {}))

(rf/reg-event-fx
 :load-stats
 (fn [{:keys [db]} _]
   (api/get-stats
    (:token db)
    #(rf/dispatch [:stats-loaded %])
    #(rf/dispatch [:set-error "統計情報の取得に失敗しました"]))
   {}))

(rf/reg-event-db
 :stats-loaded
 (fn [db [_ stats]]
   (assoc db :stats stats)))

(rf/reg-event-fx
 :load-rewards
 (fn [{:keys [db]} _]
   (api/get-rewards
    (:token db)
    #(rf/dispatch [:rewards-loaded %])
    #(rf/dispatch [:set-error "報酬一覧の取得に失敗しました"]))
   {}))

(rf/reg-event-db
 :rewards-loaded
 (fn [db [_ rewards]]
   (assoc db :rewards rewards)))

(rf/reg-event-fx
 :load-unlocked-rewards
 (fn [{:keys [db]} _]
   (api/get-unlocked-rewards
    (:token db)
    #(rf/dispatch [:unlocked-rewards-loaded %])
    #(rf/dispatch [:set-error "獲得済み報酬の取得に失敗しました"]))
   {}))

(rf/reg-event-db
 :unlocked-rewards-loaded
 (fn [db [_ rewards]]
   (assoc db :unlocked-rewards rewards)))

(rf/reg-event-db
 :walks-loaded
 (fn [db [_ walks]]
   (let [active (first (filter #(= (:status %) "active") walks))]
     (cond-> (assoc db :walks walks :loading? false)
       active (assoc :current-walk active)))))


;; --------------------
;; ウォーク操作
;; --------------------
(rf/reg-event-fx
 :start-walk
 (fn [{:keys [db]} _]
   (api/start-walk
    (:token db)
    (fn [{:keys [walk]}]
      (rf/dispatch [:walk-started walk])
      (rf/dispatch [:load-walks]))
    #(rf/dispatch [:set-error "開始失敗"]))
   {:db (assoc db :loading? true)}))

(rf/reg-event-fx
 :update-walk
 (fn [{:keys [db]} [_ walk-id data]]
   (api/update-walk
    (:token db)
    walk-id
    data
    (fn [_] (rf/dispatch [:load-walks]))
    #(rf/dispatch [:set-error "更新失敗"]))
   {}))

(rf/reg-event-fx
 :complete-walk
 (fn [{:keys [db]} [_ walk-id]]
   (api/complete-walk
    (:token db)
    walk-id
    (fn [_]
      (rf/dispatch [:load-walks])
      (rf/dispatch [:load-unlocked-rewards]))
    #(rf/dispatch [:set-error "完了失敗"]))
   {:db (assoc db :loading? true)}))

(rf/reg-event-db
 :walk-started
 (fn [db [_ walk]]
   (-> db
       (assoc :current-walk walk)
       (assoc :loading? false))))

