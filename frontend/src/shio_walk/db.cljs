(ns shio-walk.db)

(def default-db
  {:user             nil
   :token            nil
   :current-walk     nil
   :walks            []
   :stats            {:total-steps       0
                      :total-distance-km 0
                      :total-walks       0
                      :rewards-unlocked  0}
   :rewards          []
   :unlocked-rewards []
   :loading?         false
   :error            nil
   :current-page     :login

   ;; センサー状態
   :sensor {:active?          false   ;; センサー計測中か
            :steps            0       ;; 今回のウォーク歩数（センサー計測値）
            :distance-meters  0       ;; 今回のウォーク距離（GPS計測値）
            :last-position    nil     ;; {:lat :lon :accuracy}
            :motion-supported? nil    ;; DeviceMotion 対応か
            :geo-supported?    nil    ;; Geolocation 対応か
            :motion-denied?    false  ;; パーミッション拒否
            :geo-denied?       false
            :error             nil}})
