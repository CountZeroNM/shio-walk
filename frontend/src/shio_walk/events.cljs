(ns shio-walk.events
  (:require [re-frame.core :as rf]
            [shio-walk.db :as db]
            [shio-walk.api :as api]))

;; 初期化
(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   (let [stored-token (.getItem js/localStorage "token")
         stored-user (.getItem js/localStorage "user")]
     (cond-> db/default-db
       stored-token (assoc :token stored-token)
       stored-user (assoc :user (js->clj (.parse js/JSON stored-user) :keywordize-keys true))
       stored-token (assoc :current-page :dashboard)))))

;; エラー処理
(rf/reg-event-db
 :set-error
 (fn [db [_ error]]
   (assoc db :error error :loading? false)))

(rf/reg-event-db
 :clear-error
 (fn [db _]
   (assoc db :error nil)))

;; ローディング状態
(rf/reg-event-db
 :set-loading
 (fn [db [_ loading?]]
   (assoc db :loading? loading?)))

;; ページ遷移
(rf/reg-event-db
 :set-page
 (fn [db [_ page]]
   (assoc db :current-page page :error nil)))

;; 認証関連
(rf/reg-event-db
 :register
 (fn [db [_ user-data]]
   (api/register
    user-data
    #(rf/dispatch [:register-success %])
    #(rf/dispatch [:set-error (or (:message %) "登録に失敗しました")]))
   (assoc db :loading? true :error nil)))

(rf/reg-event-db
 :register-success
 (fn [db [_ response]]
   (.setItem js/localStorage "token" (:token response))
   (.setItem js/localStorage "user" (.stringify js/JSON (clj->js (:user response))))
   (rf/dispatch [:load-initial-data])
   (-> db
       (assoc :token (:token response)
              :user (:user response)
              :loading? false
              :current-page :dashboard))))

(rf/reg-event-db
 :login
 (fn [db [_ credentials]]
   (api/login
    credentials
    #(rf/dispatch [:login-success %])
    #(rf/dispatch [:set-error (or (:message %) "ログインに失敗しました")]))
   (assoc db :loading? true :error nil)))

(rf/reg-event-db
 :login-success
 (fn [db [_ response]]
   (.setItem js/localStorage "token" (:token response))
   (.setItem js/localStorage "user" (.stringify js/JSON (clj->js (:user response))))
   (rf/dispatch [:load-initial-data])
   (-> db
       (assoc :token (:token response)
              :user (:user response)
              :loading? false
              :current-page :dashboard))))

(rf/reg-event-db
 :logout
 (fn [_ _]
   (.removeItem js/localStorage "token")
   (.removeItem js/localStorage "user")
   (assoc db/default-db :current-page :login)))

;; データ読み込み
(rf/reg-event-db
 :load-initial-data
 (fn [db _]
   (rf/dispatch [:load-stats])
   (rf/dispatch [:load-walks])
   (rf/dispatch [:load-rewards])
   (rf/dispatch [:load-unlocked-rewards])
   db))

(rf/reg-event-db
 :load-stats
 (fn [db _]
   (let [token (:token db)]
     (api/get-stats
      token
      #(rf/dispatch [:stats-loaded %])
      #(rf/dispatch [:set-error "統計情報の読み込みに失敗しました"]))
     db)))

(rf/reg-event-db
 :stats-loaded
 (fn [db [_ stats]]
   (assoc db :stats stats)))

(rf/reg-event-db
 :load-walks
 (fn [db _]
   (let [token (:token db)]
     (api/get-walks
      token
      #(rf/dispatch [:walks-loaded %])
      #(rf/dispatch [:set-error "ウォーク履歴の読み込みに失敗しました"]))
     db)))

(rf/reg-event-db
 :walks-loaded
 (fn [db [_ walks]]
   (let [active-walk (first (filter #(= (:status %) "active") walks))]
     (assoc db 
            :walks walks
            :current-walk active-walk))))

(rf/reg-event-db
 :load-rewards
 (fn [db _]
   (let [token (:token db)]
     (api/get-rewards
      token
      #(rf/dispatch [:rewards-loaded %])
      #(rf/dispatch [:set-error "報酬一覧の読み込みに失敗しました"]))
     db)))

(rf/reg-event-db
 :rewards-loaded
 (fn [db [_ rewards]]
   (assoc db :rewards rewards)))

(rf/reg-event-db
 :load-unlocked-rewards
 (fn [db _]
   (let [token (:token db)]
     (api/get-unlocked-rewards
      token
      #(rf/dispatch [:unlocked-rewards-loaded %])
      #(rf/dispatch [:set-error "獲得済み報酬の読み込みに失敗しました"]))
     db)))

(rf/reg-event-db
 :unlocked-rewards-loaded
 (fn [db [_ unlocked-rewards]]
   (assoc db :unlocked-rewards unlocked-rewards)))

;; ウォーク操作
(rf/reg-event-db
 :start-walk
 (fn [db _]
   (let [token (:token db)]
     (api/start-walk
      token
      #(rf/dispatch [:walk-started %])
      #(rf/dispatch [:set-error "ウォークの開始に失敗しました"]))
     (assoc db :loading? true))))

(rf/reg-event-db
 :walk-started
 (fn [db [_ walk]]
   (rf/dispatch [:load-walks])
   (assoc db :current-walk walk :loading? false)))

(rf/reg-event-db
 :update-walk
 (fn [db [_ walk-id data]]
   (let [token (:token db)]
     (api/update-walk
      token
      walk-id
      data
      #(rf/dispatch [:walk-updated %])
      #(rf/dispatch [:set-error "ウォークの更新に失敗しました"]))
     db)))

(rf/reg-event-db
 :walk-updated
 (fn [db [_ walk]]
   (assoc db :current-walk walk)))

(rf/reg-event-db
 :complete-walk
 (fn [db [_ walk-id]]
   (let [token (:token db)]
     (api/complete-walk
      token
      walk-id
      #(rf/dispatch [:walk-completed %])
      #(rf/dispatch [:set-error "ウォークの完了に失敗しました"]))
     (assoc db :loading? true))))

(rf/reg-event-db
 :walk-completed
 (fn [db [_ result]]
   (rf/dispatch [:load-walks])
   (rf/dispatch [:load-unlocked-rewards])
   (when (seq (:new-rewards result))
     (js/alert (str "新しい報酬を獲得しました！\n"
                    (clojure.string/join "\n" (map :title (:new-rewards result))))))
   (-> db
       (assoc :current-walk nil :loading? false)
       (update :stats merge (:stats result)))))
