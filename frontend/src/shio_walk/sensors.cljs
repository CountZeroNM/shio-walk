(ns shio-walk.sensors
 "スマートフォンセンサー連携
DeviceMotion + Geolocation

iOS Safari対応強化版"
 (:require [re-frame.core :as rf]))

;; ============================================================
;; 歩数の判定 (加速度)
;; ============================================================
;; 加速度の大きさ |a| から、ゆっくり追う平均 (重力の分) を引いた「揺れ」を見る。
;; 揺れが STEP-HIGH を越えたら 1 歩、STEP-LOW を下回るまで次の歩を数えない (ヒステリシス)。
;; 重力の分は平均で求めるので、accelerationIncludingGravity が無く acceleration だけの端末でも動く。

(def STEP-HIGH 1.0)          ;; m/s^2。これを越えたら 1 歩
(def STEP-LOW 0.0)           ;; これを下回ったら次の歩を数えられる
(def STEP-MIN-MS 300)        ;; 歩と歩の最短の間隔 (1 秒に 3.3 歩まで。速歩きでも 2.5 歩程度)
(def GRAVITY-ALPHA 0.02)     ;; 重力の分を追う速さ (小さいほどゆっくり)
(def SMOOTH-ALPHA 0.35)      ;; 揺れのノイズを均す強さ

(defn step-update
  "加速度の大きさ mag (m/s^2) と時刻 t (ms) を 1 つ受け取り、[新しい状態 歩いたか] を返す。純粋関数。
  状態は {:gravity 平均 :dyn 揺れ :armed? 次の歩を数えられるか :last-step 前の歩の時刻}"
  [{:keys [gravity dyn armed? last-step] :or {armed? true last-step 0}} mag t]
  (let [gravity (if gravity (+ gravity (* GRAVITY-ALPHA (- mag gravity))) mag)
        dyn     (+ (or dyn 0) (* SMOOTH-ALPHA (- (- mag gravity) (or dyn 0))))
        step?   (and armed? (> dyn STEP-HIGH) (> (- t last-step) STEP-MIN-MS))
        armed?  (cond step? false
                      (< dyn STEP-LOW) true
                      :else armed?)]
    [{:gravity gravity :dyn dyn :armed? armed? :last-step (if step? t last-step)}
     step?]))

;; ============================================================
;; 状態
;; ============================================================

(defonce step-state (atom {}))
;; 確かめ用: 1 秒ごとに、届いた加速度のイベントの数と揺れの最大を画面へ送る
(defonce diag (atom {:events 0 :peak 0 :since 0}))

(defonce geo-watch-id (atom nil))

(defonce wake-lock (atom nil))   ;; WakeLockSentinel (画面を点けたままにする)

(defn- magnitude [v]
  (when (and v (some? (.-x v)))
    (let [x (or (.-x v) 0) y (or (.-y v) 0) z (or (.-z v) 0)]
      (js/Math.sqrt (+ (* x x) (* y y) (* z z))))))

(defn- motion-handler [event]
  (let [now (js/Date.now)
        mag (or (magnitude (.-accelerationIncludingGravity event))
                (magnitude (.-acceleration event)))]
    (when mag
      (let [[st step?] (step-update @step-state mag now)]
        (reset! step-state st)
        (when step? (rf/dispatch [:sensor-step-detected]))
        (swap! diag (fn [d] (-> d (update :events inc) (update :peak max (:dyn st)))))))
    (let [{:keys [events peak since]} @diag]
      (when (>= (- now since) 1000)
        (reset! diag {:events 0 :peak 0 :since now})
        (rf/dispatch [:sensor-diag {:hz (js/Math.round (/ (* 1000 events) (max 1 (- now since))))
                                    :peak peak
                                    :no-data? (nil? mag)}])))))

;; ============================================================
;; Motion Sensor
;; ============================================================

(defn- attach-motion-listener! []
 (reset! step-state {})
 (reset! diag {:events 0 :peak 0 :since (js/Date.now)})
 (.removeEventListener js/window "devicemotion" motion-handler)
 (.addEventListener js/window "devicemotion" motion-handler)
 (rf/dispatch [:sensor-permission-granted :motion]))

(defn start-step-counter! []

 (cond

;; DeviceMotion API 不存在
  (not (exists? js/DeviceMotionEvent))

  (rf/dispatch [:sensor-not-supported :motion])


;; iOS permission API
  (exists? js/DeviceMotionEvent.requestPermission)

  (try

   (-> (.requestPermission js/DeviceMotionEvent)

    (.then
     (fn [state]

      (if (= state "granted")

       (attach-motion-listener!)

       (rf/dispatch [:sensor-permission-denied :motion]))))

    (.catch
     (fn [_]

;; iOSの挙動対策
;; rejectされてもlistener試す

      (attach-motion-listener!))))

   (catch :default _

;; Promise失敗時 fallback
    (attach-motion-listener!)))


;; Android / 旧iOS

  :else

  (attach-motion-listener!)))

(defn stop-step-counter! []
 (.removeEventListener js/window "devicemotion" motion-handler)
 (reset! step-state {}))

;; append

(defn haversine-distance
"2点間距離（m）"
[lat1 lon1 lat2 lon2]

(let [R 6371000
phi1 (* lat1 (/ js/Math.PI 180))
phi2 (* lat2 (/ js/Math.PI 180))
dphi (* (- lat2 lat1) (/ js/Math.PI 180))
dlambda (* (- lon2 lon1) (/ js/Math.PI 180))

a (+ (* (js/Math.sin (/ dphi 2))
(js/Math.sin (/ dphi 2)))
(* (js/Math.cos phi1)
(js/Math.cos phi2)
(js/Math.sin (/ dlambda 2))
(js/Math.sin (/ dlambda 2))))]

(* R
2
(js/Math.atan2
(js/Math.sqrt a)
(js/Math.sqrt (- 1 a))))))



;; GPS の揺れ対策: 止まっていても位置は数 m〜十数 m 揺れる。前に数えた点 (起点) から、
;; 精度 (誤差の半径) と GPS-MIN-MOVE の大きい方より離れたときだけ距離を足し、起点を進める。
(def GPS-MIN-MOVE 10)   ;; m

(defn gps-update
  "起点 anchor ({:lat :lon :accuracy} か nil) と新しい位置 pos から [新しい起点 足す距離(m)] を返す。純粋関数。"
  [anchor {:keys [lat lon accuracy] :as pos}]
  (if-not anchor
    [pos 0]
    (let [d (haversine-distance (:lat anchor) (:lon anchor) lat lon)]
      (if (> d (max GPS-MIN-MOVE (or accuracy 0) (or (:accuracy anchor) 0)))
        [pos d]
        [anchor 0]))))

;; ============================================================
;; GPS
;; ============================================================

(def GPS-MAX-ACCURACY 30)   ;; m。これより誤差の大きい点は使わない

(defn- geo-success-handler [position]
 (let [coords (.-coords position)
       fix    {:lat (.-latitude coords) :lon (.-longitude coords) :accuracy (.-accuracy coords)}]
  ;; 確かめ用: 使わない点も含めて、届いた点を画面へ
  (rf/dispatch [:sensor-gps-fix fix])
  ;; 精度フィルタ
  (when (< (:accuracy fix) GPS-MAX-ACCURACY)
   (rf/dispatch [:sensor-position-updated fix]))))

(defn- geo-error-handler [error]

 (condp = (.-code error)

  1 (rf/dispatch [:sensor-permission-denied :geo])

  2 (rf/dispatch [:sensor-error "GPS信号が取得できません"])

  3 (rf/dispatch [:sensor-error "GPS取得がタイムアウトしました"])

  (rf/dispatch [:sensor-error "GPSエラー"])))

(defn start-gps! []

 (if (.-geolocation js/navigator)

  (let [watch-id

        (.watchPosition

         (.-geolocation js/navigator)

         geo-success-handler
         geo-error-handler

         #js {:enableHighAccuracy true
              :timeout 10000
              :maximumAge 5000})]

   (reset! geo-watch-id watch-id)

   (rf/dispatch [:sensor-gps-started watch-id]))

  (rf/dispatch [:sensor-not-supported :geo])))

(defn stop-gps! []

 (when @geo-watch-id

  (.clearWatch (.-geolocation js/navigator) @geo-watch-id)

  (reset! geo-watch-id nil)

  (rf/dispatch [:sensor-gps-stopped])))

;; ============================================================
;; Wake Lock (計測中は画面を点けたままにする)
;; ============================================================
;; 画面が消えるとセンサーも GPS も止まるので、計測中は画面を消さない。
;; 画面が隠れると (アプリの切り替え・電源ボタン) ブラウザが自動で解除するので、
;; 戻ったときにもう一度取る (events.cljs の :app-visibility-changed → :wake-lock 効果)。

(defn request-wake-lock! []
  (cond
    (not (and (exists? js/navigator) (exists? js/navigator.wakeLock)))
    (rf/dispatch [:wake-lock-changed false "この端末・ブラウザは画面点灯の維持に非対応"])

    (or (some? @wake-lock)
        (not (exists? js/document))
        (not= "visible" (.-visibilityState js/document)))
    nil

    :else
    (-> (.request js/navigator.wakeLock "screen")
        (.then (fn [sentinel]
                 (reset! wake-lock sentinel)
                 (.addEventListener sentinel "release"
                                    (fn []
                                      (when (identical? @wake-lock sentinel) (reset! wake-lock nil))
                                      (rf/dispatch [:wake-lock-changed false nil])))
                 (rf/dispatch [:wake-lock-changed true nil])))
        (.catch (fn [e]
                  (rf/dispatch [:wake-lock-changed false (str "画面点灯の維持に失敗: " (.-message e))]))))))

(defn release-wake-lock! []
  (when-let [sentinel @wake-lock]
    (reset! wake-lock nil)
    (.release sentinel)))

(rf/reg-fx
 :wake-lock
 (fn [on?]
   (if on? (request-wake-lock!) (release-wake-lock!))))

;; ============================================================
;; センサー統合
;; ============================================================

(defn start-sensors! []

;; NOTE:
;; 必ずユーザークリックイベントから呼ぶこと

 (start-step-counter!)
 (start-gps!)
 (request-wake-lock!))

(defn stop-sensors! []

 (stop-step-counter!)
 (stop-gps!)
 (release-wake-lock!))
