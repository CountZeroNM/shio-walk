(ns shio-walk.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [shio-walk.events]
            [shio-walk.subs]
            [shio-walk.views.main :as views]))

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [views/main-panel] root-el)))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (mount-root))
