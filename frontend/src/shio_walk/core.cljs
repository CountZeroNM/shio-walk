(ns shio-walk.core
  (:require
   [reagent.dom.client :as rdom]
   [re-frame.core :as rf]
   [shio-walk.events]
   [shio-walk.subs]
   [shio-walk.views.main :as views]))

;; React 18 root は一度だけ生成する
(defonce root
  (rdom/create-root
    (.getElementById js/document "app")))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (rdom/render root [views/main-panel]))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (mount-root))

;; Hot Reload 用
(defn ^:dev/after-load reload []
  (mount-root))
