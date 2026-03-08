(ns shio-walk.sensors
  "スマートフォンセンサー連携
   - DeviceMotion API: 加速度センサーで歩行検出（歩数カウント）
   - Geolocation API: GPS で距離計測"
  (:require [re-frame.core :as rf]))

;; ============================================================
;; 定数
;; ============================================================

;; 歩行検出の感度（加速度の閾値 m/s²）
(def STEP-THRESHOLD 12.0)

;; 同じ歩として再カウントしない最小間隔 (ms)
(def STEP-DEBOUNCE-MS 300)

;; GPS 2点間の距離計算（Haversine 公式）
(defn haversine-distance
  "緯度経度 2点間の距離をメートルで返す"
  [lat1 lon1 lat2 lon2]
  (let [R 6371000  ;; 地球半径 (m)
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
    (* R 2 (js/Math.atan2 (js/Math.sqrt a)
                          (js/Math.sqrt (- 1 a))))))

;; ============================================================
;; 歩数センサー (DeviceMotion API)
;; ============================================================

(defonce ^:private last-step-time (atom 0))
(defonce ^:private motion-listener (atom nil))

(defn- motion-handler [event]
  (let [acc (.-accelerationIncludingGravity event)
        x   (or (.-x acc) 0)
        y   (or (.-y acc) 0)
        z   (or (.-z acc) 0)
        magnitude (js/Math.sqrt (+ (* x x) (* y y) (* z z)))
        now (js/Date.now)]
    (when (and (> magnitude STEP-THRESHOLD)
               (> (- now @last-step-time) STEP-DEBOUNCE-MS))
      (reset! last-step-time now)
      (rf/dispatch [:sensor-step-detected]))))

(defn start-step-counter! []
  (if (.-DeviceMotionEvent js/window)
    ;; iOS 13+ はパーミッション要求が必要
    (if (.-requestPermission (.-DeviceMotionEvent js/window))
      (-> (.requestPermission (.-DeviceMotionEvent js/window))
          (.then (fn [state]
                   (if (= state "granted")
                     (do
                       (reset! motion-listener motion-handler)
                       (.addEventListener js/window "devicemotion" motion-handler)
                       (rf/dispatch [:sensor-permission-granted :motion]))
                     (rf/dispatch [:sensor-permission-denied :motion])))))
      ;; Android / 古いブラウザ: パーミッション不要
      (do
        (reset! motion-listener motion-handler)
        (.addEventListener js/window "devicemotion" motion-handler)
        (rf/dispatch [:sensor-permission-granted :motion])))
    ;; DeviceMotion 非対応
    (rf/dispatch [:sensor-not-supported :motion])))

(defn stop-step-counter! []
  (when @motion-listener
    (.removeEventListener js/window "devicemotion" @motion-listener)
    (reset! motion-listener nil)))

;; ============================================================
;; GPS センサー (Geolocation API)
;; ============================================================

(defonce ^:private geo-watch-id (atom nil))

(defn- geo-success-handler [position]
  (let [coords (.-coords position)
        lat    (.-latitude coords)
        lon    (.-longitude coords)
        acc    (.-accuracy coords)]
    ;; 精度が悪い場合（100m以上）は無視
    (when (< acc 100)
      (rf/dispatch [:sensor-position-updated {:lat lat :lon lon :accuracy acc}]))))

(defn- geo-error-handler [error]
  (condp = (.-code error)
    1 (rf/dispatch [:sensor-permission-denied :geo])
    2 (rf/dispatch [:sensor-error "GPS信号が取得できません"])
    3 (rf/dispatch [:sensor-error "GPS取得がタイムアウトしました"])))

(defn start-gps! []
  (if (.-geolocation js/navigator)
    (let [watch-id (.watchPosition
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
;; 統合: センサー開始/停止
;; ============================================================

(defn start-sensors! []
  (start-step-counter!)
  (start-gps!))

(defn stop-sensors! []
  (stop-step-counter!)
  (stop-gps!))
