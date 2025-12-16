(ns shio-walk.views.main
  (:require [re-frame.core :as rf]
            [shio-walk.views.login :as login]
            [shio-walk.views.dashboard :as dashboard]))

(defn main-panel []
  (let [current-page @(rf/subscribe [:current-page])
        error @(rf/subscribe [:error])]
    [:div
     (when error
       [:div.error
        [:p error]
        [:button {:on-click #(rf/dispatch [:clear-error])} "閉じる"]])
     (case current-page
       :login [login/login-page]
       :register [login/register-page]
       :dashboard [dashboard/dashboard-page]
       [login/login-page])]))
