(ns shio-walk.events-test
  "センサーと記録の状態遷移のテスト (API を呼ばないイベントだけ)。
  npm test"
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [re-frame.db :as rdb]
            [shio-walk.db :as db]
            [shio-walk.events]
            [shio-walk.sensors :as sensors]))

;; node には window が無い。センサーの登録・解除 (sensors.cljs) は何もしない代用品にする
(when-not (exists? js/window)
  (set! (.-window js/global) #js {:addEventListener (fn [& _]) :removeEventListener (fn [& _])}))

(use-fixtures :each {:before #(reset! rdb/app-db db/default-db)})

(defn- d! [& ev] (rf/dispatch-sync (vec ev)))
(defn- walk [] (:current-walk @rdb/app-db))

(def server-walk {:id "w1" :status "active" :steps 1200 :distance-meters 800})

(deftest sensors-continue-from-saved-values
  (testing "再読み込みのあと (サーバーに 1200 歩 / 800 m) でセンサーを動かしても、0 から数え直さない"
    (d! :walks-loaded {:walks [server-walk]})
    (d! :start-sensors)
    (d! :sensor-step-detected)
    (d! :sensor-step-detected)
    (is (= 1202 (:steps (walk))))
    (d! :sensor-position-updated {:lat 35.0 :lon 139.0 :accuracy 5})
    (d! :sensor-position-updated {:lat 35.001 :lon 139.0 :accuracy 5})
    (is (< 900 (:distance-meters (walk)) 920) "800 m + 約 111 m")
    (d! :stop-sensors)))

(deftest walks-loaded-keeps-local-measurement
  (d! :walks-loaded {:walks [server-walk]})
  (d! :start-sensors)
  (dotimes [_ 5] (d! :sensor-step-detected))
  (testing "計測中に古い一覧が届いても、手元の値を残す"
    (d! :walks-loaded {:walks [(assoc server-walk :steps 1201)]})
    (is (= 1205 (:steps (walk))))
    (d! :sensor-step-detected)
    (is (= 1206 (:steps (walk)))))
  (testing "計測していなければ、サーバーの値をそのまま使う"
    (d! :stop-sensors)
    (d! :walks-loaded {:walks [(assoc server-walk :steps 3000)]})
    (is (= 3000 (:steps (walk)))))
  (testing "進行中のウォークがなくなれば current-walk も消える"
    (d! :walks-loaded {:walks [(assoc server-walk :status "completed")]})
    (is (nil? (walk)))))

(deftest manual-edit-then-sensors
  (d! :walks-loaded {:walks [server-walk]})
  (d! :update-current-walk-local {:steps 5000})
  (d! :start-sensors)
  (d! :sensor-step-detected)
  (is (= 5001 (:steps (walk))) "手で直した値から数え足す")
  (d! :stop-sensors))

(deftest walk-values-for-api
  (is (= {:steps 12 :distance-meters 34.5}
         (shio-walk.events/walk-values {:steps 12 :distance-meters 34.5})))
  (is (= {:steps 0 :distance-meters 0} (shio-walk.events/walk-values {}))))

(deftest wake-lock-state
  (d! :wake-lock-changed true nil)
  (is (true? (get-in @rdb/app-db [:sensor :wake-lock?])))
  (d! :wake-lock-changed false "非対応")
  (is (false? (get-in @rdb/app-db [:sensor :wake-lock?])))
  (is (= "非対応" (get-in @rdb/app-db [:sensor :wake-lock-error]))))

(deftest wake-lock-requested-again-when-visible
  (let [calls (atom [])]
    (rf/reg-fx :wake-lock #(swap! calls conj %))
    (d! :app-visibility-changed true)
    (is (= [] @calls) "計測していなければ何もしない")
    (swap! rdb/app-db assoc-in [:sensor :active?] true)
    (d! :app-visibility-changed false)
    (is (= [] @calls) "隠れるときは取らない (ブラウザが解除する)")
    (d! :app-visibility-changed true)
    (is (= [true] @calls) "戻ったら取り直す")))

;; ---- 歩数の判定・GPS の揺れ (sensors の純粋関数) ----

(defn- count-steps
  "加速度の大きさの列 (60 Hz) を step-update に通して、数えた歩数を返す"
  [mags]
  (->> (map-indexed vector mags)
       (reduce (fn [[st n] [i mag]]
                 (let [[st' step?] (sensors/step-update st mag (* i (/ 1000 60)))]
                   [st' (if step? (inc n) n)]))
               [{} 0])
       second))

(defn- noise
  "決まった並びの擬似乱数 (-amp 〜 +amp)"
  [amp n]
  (->> (iterate #(mod (+ (* % 1103515245) 12345) 2147483648) 42)
       rest (take n)
       (map #(* amp (- (* 2 (/ % 2147483648)) 1)))))

(defn- walking
  "base に、1 秒に hz 歩・振幅 amp の揺れとノイズを足した secs 秒分"
  [base hz amp secs]
  (map (fn [i nz] (+ base (* amp (js/Math.sin (* 2 js/Math.PI hz (/ i 60)))) nz))
       (range (* 60 secs)) (noise 0.3 (* 60 secs))))

(deftest step-detector
  (testing "1 秒に 2 歩で 10 秒歩く → 約 20 歩"
    (is (<= 18 (count-steps (walking 9.81 2 2.5 10)) 21)))
  (testing "ポケットの中のように揺れが大きくても二重に数えない"
    (is (<= 18 (count-steps (walking 9.81 2 6 10)) 21)))
  (testing "置いたまま (ノイズだけ) は数えない"
    (is (= 0 (count-steps (map #(+ 9.81 %) (noise 0.3 600)))))))

(deftest gps-jitter-ignored
  (let [p0 {:lat 35.0 :lon 139.0 :accuracy 12}
        near {:lat 35.00005 :lon 139.0 :accuracy 12}   ;; 約 5.6 m: 揺れ
        far  {:lat 35.0003 :lon 139.0 :accuracy 12}]   ;; 約 33 m: 動いた
    (is (= [p0 0] (sensors/gps-update nil p0)) "最初の点は起点にするだけ")
    (is (= [p0 0] (sensors/gps-update p0 near)) "誤差の範囲の揺れは足さない (起点もそのまま)")
    (let [[anchor d] (sensors/gps-update p0 far)]
      (is (= far anchor))
      (is (< 32 d 35)))
    (testing "揺れを何度くり返しても増えない"
      (d! :walks-loaded {:walks [server-walk]})
      (d! :start-sensors)
      (doseq [p (take 20 (cycle [p0 near]))]
        (d! :sensor-position-updated p))
      (is (= 800 (:distance-meters (walk))))
      (d! :stop-sensors))))
