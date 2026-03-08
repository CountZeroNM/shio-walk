(ns shio-walk.sensors
 "スマートフォンセンサー連携
DeviceMotion + Geolocation

iOS Safari対応強化版"
 (:require [re-frame.core :as rf]))

;; ============================================================
;; 定数
;; ============================================================

(def GRAVITY 9.81)

(def STEP-THRESHOLD 1.3)

(def STEP-DEBOUNCE-MS 280)

(def SMOOTHING-FACTOR 0.15)

;; ============================================================
;; 状態
;; ============================================================

(defonce last-step-time (atom 0))
(defonce smoothed-magnitude (atom 0.0))
(defonce was-below-threshold (atom true))

(defonce geo-watch-id (atom nil))

;; ============================================================
;; 歩数計算
;; ============================================================

(defn- motion-handler [event]

 (let [acc (.-accelerationIncludingGravity event)

       x (or (.-x acc) 0)
       y (or (.-y acc) 0)
       z (or (.-z acc) 0)

       raw-mag (js/Math.sqrt (+ (* x x) (* y y) (* z z)))

;; 重力除去
       linear-mag (js/Math.abs (- raw-mag GRAVITY))

;; ローパス
       smoothed (+ (* SMOOTHING-FACTOR linear-mag)
                 (* (- 1 SMOOTHING-FACTOR) @smoothed-magnitude))

       now (js/Date.now)]

  (reset! smoothed-magnitude smoothed)

  (if (> smoothed STEP-THRESHOLD)

   (when (and @was-below-threshold
          (> (- now @last-step-time) STEP-DEBOUNCE-MS))

    (reset! last-step-time now)
    (reset! was-below-threshold false)

    (rf/dispatch [:sensor-step-detected]))

   (reset! was-below-threshold true))))

;; ============================================================
;; Motion Sensor
;; ============================================================

(defn- attach-motion-listener! []

 (reset! smoothed-magnitude 0.0)
 (reset! was-below-threshold true)

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

 (reset! smoothed-magnitude 0.0)
 (reset! was-below-threshold true))

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



;; ============================================================
;; GPS
;; ============================================================

(defn- geo-success-handler [position]

 (let [coords (.-coords position)

       lat (.-latitude coords)
       lon (.-longitude coords)
       acc (.-accuracy coords)]

;; 精度フィルタ
  (when (< acc 30)

   (rf/dispatch
    [:sensor-position-updated
     {:lat lat :lon lon :accuracy acc}]))))

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
;; センサー統合
;; ============================================================

(defn start-sensors! []

;; NOTE:
;; 必ずユーザークリックイベントから呼ぶこと

 (start-step-counter!)
 (start-gps!))

(defn stop-sensors! []

 (stop-step-counter!)
 (stop-gps!))
