(ns shio-walk.views.login
  (:require [re-frame.core :as rf]
            [reagent.core :as r]))

(defn login-page []
  (let [email (r/atom "")
        password (r/atom "")
        loading? @(rf/subscribe [:loading?])]
    (fn []
      [:div.container
       [:h1 "ShioWalk"]
       [:h2 "ログイン"]
       [:form {:on-submit (fn [e]
                            (.preventDefault e)
                            (rf/dispatch [:login {:email @email
                                                  :password @password}]))}
        [:input {:type "email"
                 :placeholder "メールアドレス"
                 :value @email
                 :on-change #(reset! email (-> % .-target .-value))
                 :disabled loading?}]
        [:input {:type "password"
                 :placeholder "パスワード"
                 :value @password
                 :on-change #(reset! password (-> % .-target .-value))
                 :disabled loading?}]
        [:button {:type "submit"
                  :disabled loading?}
         (if loading? "ログイン中..." "ログイン")]
        [:p {:style {:margin-top "20px"}}
         "アカウントをお持ちでない方は "
         [:a {:href "#"
              :on-click #(do (.preventDefault %)
                             (rf/dispatch [:set-page :register]))}
          "新規登録"]]]])))

(defn register-page []
  (let [email (r/atom "")
        username (r/atom "")
        password (r/atom "")
        password-confirm (r/atom "")
        loading? @(rf/subscribe [:loading?])]
    (fn []
      [:div.container
       [:h1 "ShioWalk"]
       [:h2 "新規登録"]
       [:form {:on-submit (fn [e]
                            (.preventDefault e)
                            (if (= @password @password-confirm)
                              (rf/dispatch [:register {:email @email
                                                       :username @username
                                                       :password @password}])
                              (rf/dispatch [:set-error "パスワードが一致しません"])))}
        [:input {:type "email"
                 :placeholder "メールアドレス"
                 :value @email
                 :on-change #(reset! email (-> % .-target .-value))
                 :disabled loading?}]
        [:input {:type "text"
                 :placeholder "ユーザー名"
                 :value @username
                 :on-change #(reset! username (-> % .-target .-value))
                 :disabled loading?}]
        [:input {:type "password"
                 :placeholder "パスワード"
                 :value @password
                 :on-change #(reset! password (-> % .-target .-value))
                 :disabled loading?}]
        [:input {:type "password"
                 :placeholder "パスワード（確認）"
                 :value @password-confirm
                 :on-change #(reset! password-confirm (-> % .-target .-value))
                 :disabled loading?}]
        [:button {:type "submit"
                  :disabled loading?}
         (if loading? "登録中..." "登録")]
        [:p {:style {:margin-top "20px"}}
         "すでにアカウントをお持ちの方は "
         [:a {:href "#"
              :on-click #(do (.preventDefault %)
                             (rf/dispatch [:set-page :login]))}
          "ログイン"]]]])))
