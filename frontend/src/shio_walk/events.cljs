(ns shio-walk.events
  (:require [re-frame.core :as rf]
            [shio-walk.db :as db]
            [shio-walk.api :as api]
            [shio-walk.sensors :as sensors]))

;; --------------------
;; 初期化
;; --------------------
(rf/reg-event-fx
 :initialize-db
 (fn [_ _]
   (let [token    (.getItem js/localStorage "token")
         user-str (.getItem js/localStorage "user")
         user     (when (and token user-str)
                    (try (js->clj (.parse js/JSON user-str) :keywordize-keys true)
                         (catch :default _ nil)))
         new-db   (cond-> db/default-db
                    token (assoc :token token)
                    user  (assoc :user user :current-page :dashboard))]
     (if token
       {:db new-db :dispatch [:load-initial-data]}
       {:db new-db}))))

;; --------------------
;; 共通UI状態
;; --------------------
(rf/reg-event-db :set-error   (fn [db [_ err]] (assoc db :error err :loading? false)))
(rf/reg-event-db :clear-error (fn [db _] (assoc db :error nil)))
(rf/reg-event-db :set-loading (fn [db [_ v]] (assoc db :loading? v)))
(rf/reg-event-db :set-page    (fn [db [_ page]] (assoc db :current-page page :error nil)))

;; --------------------
;; 認証
;; --------------------
(rf/reg-event-fx
 :login
 (fn [{:keys [db]} [_ credentials]]
   (api/login credentials
              #(rf/dispatch [:login-success %])
              #(rf/dispatch [:set-error "ログインに失敗しました"]))
   {:db (assoc db :loading? true)}))

(rf/reg-event-fx
 :register
 (fn [{:keys [db]} [_ user]]
   (api/register user
                 #(rf/dispatch [:login-success %])
                 #(rf/dispatch [:set-error "ユーザー登録に失敗しました"]))
   {:db (assoc db :loading? true)}))

(rf/reg-event-db
 :login-success
 (fn [db [_ {:keys [token user]}]]
   (.setItem js/localStorage "token" token)
   (.setItem js/localStorage "user" (.stringify js/JSON (clj->js user)))
   (rf/dispatch [:load-initial-data])
   (assoc db :token token :user user :loading? false :current-page :dashboard)))

(rf/reg-event-db
 :logout
 (fn [_ _]
   (.removeItem js/localStorage "token")
   (.removeItem js/localStorage "user")
   (sensors/stop-sensors!)
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
   (api/get-walks (:token db)
                  #(rf/dispatch [:walks-loaded %])
                  #(rf/dispatch [:set-error "ウォーク取得失敗"]))
   {}))

(rf/reg-event-fx
 :load-stats
 (fn [{:keys [db]} _]
   (api/get-stats (:token db)
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
   (api/get-rewards (:token db)
                    #(rf/dispatch [:rewards-loaded %])
                    #(rf/dispatch [:set-error "報酬一覧の取得に失敗しました"]))
   {}))

(rf/reg-event-db
 :rewards-loaded
 (fn [db [_ {:keys [rewards]}]]
   (assoc db :rewards rewards)))

(rf/reg-event-fx
 :load-unlocked-rewards
 (fn [{:keys [db]} _]
   (api/get-unlocked-rewards (:token db)
                             #(rf/dispatch [:unlocked-rewards-loaded %])
                             #(rf/dispatch [:set-error "獲得済み報酬の取得に失敗しました"]))
   {}))

(rf/reg-event-db
 :unlocked-rewards-loaded
 (fn [db [_ {:keys [rewards]}]]
   (assoc db :unlocked-rewards rewards)))

(rf/reg-event-db
 :walks-loaded
 (fn [db [_ {:keys [walks]}]]
   (let [active (first (filter #(= (:status %) "active") walks))]
     (-> db
         (assoc :walks (vec walks) :loading? false)
         (assoc :current-walk active)))))

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

(rf/reg-event-db
 :walk-started
 (fn [db [_ walk]]
   (-> db
       (assoc :current-walk walk)
       (assoc :loading? false))))

(rf/reg-event-db
 :update-current-walk-local
 (fn [db [_ data]]
   (update db :current-walk merge data)))

(rf/reg-event-fx
 :update-walk
 (fn [{:keys [db]} [_ walk-id data]]
   (api/update-walk (:token db) walk-id data
                    (fn [_] (rf/dispatch [:load-walks]))
                    #(rf/dispatch [:set-error "更新失敗"]))
   {}))

(rf/reg-event-fx
 :complete-walk
 (fn [{:keys [db]} [_ walk-id]]
   ;; ウォーク完了時にセンサーも停止
   (sensors/stop-sensors!)
   (api/complete-walk
    (:token db)
    walk-id
    (fn [_]
      (rf/dispatch [:load-walks])
      (rf/dispatch [:load-unlocked-rewards])
      (rf/dispatch [:load-stats]))
    #(rf/dispatch [:set-error "完了失敗"]))
   {:db (-> db
            (assoc :loading? true :current-walk nil)
            (assoc-in [:sensor :active?] false)
            (assoc-in [:sensor :steps] 0)
            (assoc-in [:sensor :distance-meters] 0)
            (assoc-in [:sensor :last-position] nil))}))

;; ============================================================
;; センサー関連イベント
;; ============================================================

;; センサー計測開始
(rf/reg-event-fx
 :start-sensors
 (fn [{:keys [db]} _]
   (sensors/start-sensors!)
   {:db (-> db
            (assoc-in [:sensor :active?] true)
            (assoc-in [:sensor :steps] 0)
            (assoc-in [:sensor :distance-meters] 0)
            (assoc-in [:sensor :last-position] nil)
            (assoc-in [:sensor :error] nil))}))

;; センサー計測停止
(rf/reg-event-fx
 :stop-sensors
 (fn [{:keys [db]} _]
   (sensors/stop-sensors!)
   {:db (assoc-in db [:sensor :active?] false)}))

;; 歩行検出（DeviceMotion）
(rf/reg-event-db
 :sensor-step-detected
 (fn [db _]
   (let [new-steps (inc (get-in db [:sensor :steps] 0))
         walk-id   (get-in db [:current-walk :id])]
     ;; app-db の sensor を更新
     (let [updated-db (assoc-in db [:sensor :steps] new-steps)]
       ;; current-walk にも反映（表示用）
       (if walk-id
         (-> updated-db
             (assoc-in [:current-walk :steps] new-steps))
         updated-db)))))

;; GPS 位置更新
(rf/reg-event-db
 :sensor-position-updated
 (fn [db [_ {:keys [lat lon accuracy]}]]
   (let [last-pos  (get-in db [:sensor :last-position])
         prev-dist (get-in db [:sensor :distance-meters] 0)
         new-dist  (if last-pos
                     (+ prev-dist
                        (sensors/haversine-distance
                         (:lat last-pos) (:lon last-pos)
                         lat lon))
                     prev-dist)
         walk-id   (get-in db [:current-walk :id])]
     (-> db
         (assoc-in [:sensor :last-position] {:lat lat :lon lon :accuracy accuracy})
         (assoc-in [:sensor :distance-meters] new-dist)
         ;; current-walk にも反映
         (cond-> walk-id
           (assoc-in [:current-walk :distance-meters] (int new-dist)))))))

;; GPS 開始通知
(rf/reg-event-db
 :sensor-gps-started
 (fn [db [_ _watch-id]]
   (assoc-in db [:sensor :geo-supported?] true)))

;; GPS 停止通知
(rf/reg-event-db
 :sensor-gps-stopped
 (fn [db _]
   db))

;; パーミッション許可
(rf/reg-event-db
 :sensor-permission-granted
 (fn [db [_ sensor-type]]
   (condp = sensor-type
     :motion (assoc-in db [:sensor :motion-supported?] true)
     :geo    (assoc-in db [:sensor :geo-supported?] true)
     db)))

;; パーミッション拒否
(rf/reg-event-db
 :sensor-permission-denied
 (fn [db [_ sensor-type]]
   (condp = sensor-type
     :motion (-> db
                 (assoc-in [:sensor :motion-denied?] true)
                 (assoc-in [:sensor :motion-supported?] false))
     :geo    (-> db
                 (assoc-in [:sensor :geo-denied?] true)
                 (assoc-in [:sensor :geo-supported?] false))
     db)))

;; センサー非対応
(rf/reg-event-db
 :sensor-not-supported
 (fn [db [_ sensor-type]]
   (condp = sensor-type
     :motion (assoc-in db [:sensor :motion-supported?] false)
     :geo    (assoc-in db [:sensor :geo-supported?] false)
     db)))

;; センサーエラー
(rf/reg-event-db
 :sensor-error
 (fn [db [_ msg]]
   (assoc-in db [:sensor :error] msg)))

;; センサー値を API に送信（定期同期用）
(rf/reg-event-fx
 :sync-sensor-data
 (fn [{:keys [db]} _]
   (let [walk-id  (get-in db [:current-walk :id])
         steps    (get-in db [:sensor :steps] 0)
         dist-m   (get-in db [:sensor :distance-meters] 0)
         token    (:token db)]
     (if (and walk-id token (pos? (+ steps dist-m)))
       (do
         (api/update-walk token walk-id
                          {:steps steps
                           :distance (/ dist-m 1000)}
                          (fn [_] nil)   ;; サイレント更新
                          #(js/console.warn "sensor sync failed" %))
         {})
       {}))))
