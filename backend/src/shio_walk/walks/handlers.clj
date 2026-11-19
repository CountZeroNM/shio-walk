(ns shio-walk.walks.handlers
  (:require [shio-walk.db :as db]
            [shio-walk.convert :as convert]
            [ring.util.response :as response]))

(defn- error [status body]
  (-> (response/response body) (response/status status)))

(defn- not-found []
  (error 404 {:error "Walk not found or already completed"}))

(defn- non-negative-number? [x]
  (and (number? x) (not (Double/isNaN (double x))) (not (Double/isInfinite (double x))) (>= x 0)))

(defn- non-negative-int? [x]
  (and (integer? x) (>= x 0)))

(defn- read-values
  "本文の {:steps :distance-meters} を検査する。
  required? なら両方必須。返り値は [エラーの応答 nil] か [nil 値のマップ]"
  [body required?]
  (let [{:keys [steps distance-meters]} body]
    (cond
      (contains? body :distance)
      [(error 400 {:error "distance is no longer accepted"
                   :hint "Send distance-meters (in meters)"
                   :example {:steps 1000 :distance-meters 800}}) nil]

      (and required? (nil? steps))
      [(error 400 {:error "steps is required"
                   :example {:steps 1000 :distance-meters 800}}) nil]

      (and required? (nil? distance-meters))
      [(error 400 {:error "distance-meters is required"
                   :example {:steps 1000 :distance-meters 800}}) nil]

      (and (some? steps) (not (non-negative-int? steps)))
      [(error 400 {:error "steps must be a non-negative integer"}) nil]

      (and (some? distance-meters) (not (non-negative-number? distance-meters)))
      [(error 400 {:error "distance-meters must be a non-negative number"}) nil]

      :else
      [nil {:steps steps :distance-meters distance-meters}])))

;; ===== ウォーク開始 =====
;; 進行中のウォークがあれば、それを返す (二重に作らない)
(defn start-walk [request]
  (let [walk (db/start-walk! (:user-id request))]
    (response/response {:walk (convert/walk walk)})))

;; ===== ウォーク更新 =====
;; 本文: {"steps": 整数, "distance-meters": 数値}。自分の進行中のウォークだけ書き換えられる
(defn update-walk [request]
  (let [walk-id (db/valid-uuid (get-in request [:params :id]))
        [err {:keys [steps distance-meters]}] (read-values (:body request) true)]
    (cond
      err err
      (nil? walk-id) (not-found)
      :else (if-let [walk (db/update-walk! (:user-id request) walk-id steps distance-meters)]
              (response/response {:walk (convert/walk walk)})
              (not-found)))))

;; ===== ウォーク完了 =====
;; 本文は省略できる。{"steps" "distance-meters"} を付けると、その値を最終値として書いてから完了する
;; (更新と完了を 1 回の通信・1 つのトランザクションで行える)
(defn complete-walk [request]
  (let [user-id (:user-id request)
        walk-id (db/valid-uuid (get-in request [:params :id]))
        body (if (map? (:body request)) (:body request) {})
        [err final] (read-values body false)]
    (cond
      err err
      (nil? walk-id) (not-found)
      :else (if-let [walk (db/with-transaction
                            (when-let [w (db/complete-walk! user-id walk-id final)]
                              (db/check-and-unlock-rewards! user-id)
                              w))]
              (response/response {:walk (convert/walk walk)})
              (not-found)))))

;; ===== ウォーク履歴取得 =====
(defn get-walks [request]
  (let [walks (db/get-user-walks (:user-id request))]
    (response/response {:walks (mapv convert/walk walks)})))

;; ===== 統計取得 =====
(defn get-stats [request]
  (response/response (convert/stats (db/get-user-stats (:user-id request)))))
