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

(defonce visibility-listener
  ;; 画面が隠れる (ロック・アプリ切り替え) / 戻るときに、計測中なら保存する (events.cljs :app-visibility-changed)
  (.addEventListener js/document "visibilitychange"
                     #(rf/dispatch [:app-visibility-changed (= "visible" (.-visibilityState js/document))])))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (mount-root))

;; Hot Reload 用
(defn ^:dev/after-load reload []
  (mount-root))
