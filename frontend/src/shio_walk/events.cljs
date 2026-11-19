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
   (let [active (first (filter #(= (:status %) "active") walks))
         local  (:current-walk db)
         ;; センサーで計測中の同じウォークは、手元の値のほうが新しい (サーバーへはまだ送っていない分がある)。
         ;; サーバーの古い値で上書きすると、表示が一瞬戻ったり、次の保存で歩数が減ったりする
         measuring? (and active (get-in db [:sensor :active?]) (= (:id active) (:id local)))]
     (-> db
         (assoc :walks (vec walks) :loading? false)
         (assoc :current-walk (if measuring?
                                (merge active (select-keys local [:steps :distance-meters]))
                                active))))))

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
      (rf/dispatch [:start-sensors]) ;; 自動でセンサーモードへ
      (rf/dispatch [:load-walks]))
    #(rf/dispatch [:set-error "開始失敗"]))
   {:db (assoc db :loading? true)}))

(rf/reg-event-db
 :update-current-walk-local
 (fn [db [_ data]]
   (update db :current-walk merge data)))

(rf/reg-event-fx
 :update-walk
 (fn [{:keys [db]} [_ walk-id data]]
   ;; data は {:steps 整数 :distance-meters 数値}
   (api/update-walk (:token db) walk-id data
                    (fn [_] (rf/dispatch [:load-walks]))
                    #(rf/dispatch [:set-error "更新失敗"]))
   {}))

(defn walk-values
  "API に送る {:steps 整数 :distance-meters 数値} (current-walk の値から)"
  [walk]
  {:steps           (js/Math.round (or (:steps walk) 0))
   :distance-meters (or (:distance-meters walk) 0)})

;; 手動入力の「保存」。入力欄の on-blur (:update-current-walk-local) のあとに処理されるので、最新の値を送る
(rf/reg-event-fx
 :save-current-walk
 (fn [{:keys [db]} _]
   (when-let [walk (:current-walk db)]
     {:dispatch [:update-walk (:id walk) (walk-values walk)]})))

(rf/reg-event-fx
 :complete-walk
 (fn [{:keys [db]} [_ walk-id]]
   ;; 最新の歩数・距離を最終値として渡し、保存と完了を 1 回の API で行う。
   ;; 失敗したときは current-walk を消さないので、もう一度押せる
   (api/complete-walk
    (:token db) walk-id (walk-values (:current-walk db))
    (fn [_]
      (rf/dispatch [:stop-sensors])
      (rf/dispatch [:reset-sensor-state])
      (rf/dispatch [:load-walks])
      (rf/dispatch [:load-unlocked-rewards])
      (rf/dispatch [:load-stats]))
    #(rf/dispatch [:set-error "完了処理に失敗しました。もう一度押してください"]))
   {:db (assoc db :loading? true)}))

;; ============================================================
;; センサー関連イベント
;; ============================================================

;; センサー計測開始
(rf/reg-event-fx
 :start-sensors
 (fn [{:keys [db]} _]
   ;; 3分（180,000ms）ごとに自動同期するタイマーを設定
   ;; :sensor の steps / distance-meters は「センサーを動かし始めてからの分」。
   ;; ウォークの値は 起点 (base-*) + その分 にする。再読み込みや手動入力のあとでセンサーを動かしても、
   ;; それまでの記録を 0 から数え直して上書きしない
   (when-let [old (get-in db [:sensor :sync-timer-id])] (js/clearInterval old))
   (let [timer-id (js/setInterval #(rf/dispatch [:sync-sensor-data]) 180000)
         walk     (:current-walk db)]
     {:db (-> db
              (assoc-in [:sensor :active?] true)
              (assoc-in [:sensor :sync-timer-id] timer-id)
              (assoc-in [:sensor :steps] 0)
              (assoc-in [:sensor :distance-meters] 0)
              (assoc-in [:sensor :base-steps] (or (:steps walk) 0))
              (assoc-in [:sensor :base-distance-meters] (or (:distance-meters walk) 0))
              (assoc-in [:sensor :last-position] nil)
              (assoc-in [:sensor :error] nil))})))

(rf/reg-event-db
 :walk-started
 (fn [db [_ walk]]
   ;; 開始の応答が来たら、センサーの起点をそのウォークの値に合わせる
   ;; (進行中のウォークが返ってきたときは、その歩数・距離から数え足す)
   (-> db
       (assoc :current-walk walk :loading? false)
       (assoc-in [:sensor :base-steps] (- (or (:steps walk) 0) (get-in db [:sensor :steps] 0)))
       (assoc-in [:sensor :base-distance-meters] (- (or (:distance-meters walk) 0) (get-in db [:sensor :distance-meters] 0))))))

;; センサー計測停止
(rf/reg-event-fx
 :stop-sensors
 (fn [{:keys [db]} _]
   (sensors/stop-sensors!)
   (when-let [timer-id (get-in db [:sensor :sync-timer-id])]
     (js/clearInterval timer-id))
   {:db (-> db
            (assoc-in [:sensor :active?] false)
            (assoc-in [:sensor :sync-timer-id] nil))}))

;; 歩行検出（DeviceMotion）
(rf/reg-event-db
 :sensor-step-detected
 (fn [db _]
   (let [new-steps (inc (get-in db [:sensor :steps] 0))
         walk-id   (get-in db [:current-walk :id])]
     ;; app-db の sensor を更新
     (cond-> (assoc-in db [:sensor :steps] new-steps)
       walk-id (assoc-in [:current-walk :steps]
                         (+ (get-in db [:sensor :base-steps] 0) new-steps))))))

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
           (assoc-in [:current-walk :distance-meters]
                     (js/Math.round (+ (get-in db [:sensor :base-distance-meters] 0) new-dist))))))))

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

;; センサー状態リセット
(rf/reg-event-db
 :reset-sensor-state
 (fn [db _]
   (assoc db :sensor (assoc (:sensor db)
                            :steps 0
                            :distance-meters 0
                            :last-position nil
                            :active? false
                            :sync-timer-id nil))))

;; センサー値を API に送信（定期同期用）
(rf/reg-event-fx
 :sync-sensor-data
 (fn [{:keys [db]} _]
   ;; 応答で current-walk は書き換えない (送ったあとも計測は続いているので、手元の値のほうが新しい)
   (let [walk  (:current-walk db)
         token (:token db)]
     (when (and (:id walk) token (get-in db [:sensor :active?]))
       (api/update-walk token (:id walk) (walk-values walk)
                        (fn [_] nil)
                        #(js/console.warn "sensor sync failed" %)))
     {})))

;; 画面が隠れる (ロック・アプリ切り替え) ときと戻ったときに、計測中なら保存する。
;; 隠れている間はセンサーが止まることが多いので、隠れる直前の保存が大事 (core.cljs で登録)
(rf/reg-event-fx
 :app-visibility-changed
 (fn [{:keys [db]} [_ visible?]]
   (when (get-in db [:sensor :active?])
     (cond-> {:dispatch [:sync-sensor-data]}
       ;; 隠れるとブラウザが画面点灯の維持を解除するので、戻ったら取り直す
       visible? (assoc :wake-lock true)))))

(rf/reg-event-db
 :wake-lock-changed
 (fn [db [_ on? err]]
   (-> db
       (assoc-in [:sensor :wake-lock?] on?)
       (assoc-in [:sensor :wake-lock-error] err))))
