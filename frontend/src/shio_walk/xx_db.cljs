(ns shio-walk.db)

(def default-db
  {:user nil
   :token nil
   :current-walk nil
   :walks []
   :stats {:total-steps 0
           :total-distance-km 0
           :total-walks 0
           :rewards-unlocked 0}
   :rewards []
   :unlocked-rewards []
   :loading? false
   :error nil
   :current-page :login})
