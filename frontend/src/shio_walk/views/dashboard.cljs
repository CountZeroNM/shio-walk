(ns shio-walk.views.dashboard
  (:require [re-frame.core :as rf]
            [reagent.core :as r]))

;; ユーティリティ関数
(defn format-distance [meters]
  (.toFixed (/ (or meters 0) 1000) 2))

(defn safe-parse-int [s]
  (or (js/parseInt s) 0))

(defn safe-parse-float [s]
  (or (js/parseFloat s) 0))

(defn header []
  (let [user @(rf/subscribe [:user])]
    [:div.container
     [:div {:style {:display "flex"
                    :justify-content "space-between"
                    :align-items "center"}}
      [:div
       [:h1 "ShioWalk"]
       [:p (str "ようこそ、" (:username user) "さん")]]
      [:button {:on-click #(rf/dispatch [:logout])}
       "ログアウト"]]]))

(defn stats-panel []
  (let [stats @(rf/subscribe [:stats])]
    [:div.container
     [:h2 "統計情報"]
     [:div.stats-grid
      [:div.stat-card
       [:div.stat-value (or (:total-steps stats) 0)]
       [:div.stat-label "累計歩数"]]
      [:div.stat-card
       [:div.stat-value (.toFixed (or (:total-distance-km stats) 0) 2)]
       [:div.stat-label "累計距離 (km)"]]
      [:div.stat-card
       [:div.stat-value (or (:total-walks stats) 0)]
       [:div.stat-label "ウォーク回数"]]
      [:div.stat-card
       [:div.stat-value (or (:rewards-unlocked stats) 0)]
       [:div.stat-label "獲得報酬"]]]]))

(defn walk-control []
  (let [current-walk @(rf/subscribe [:current-walk])
        loading? @(rf/subscribe [:loading?])]
    (r/with-let [steps (r/atom "0")
                 distance (r/atom "0.00")]
      ;; current-walkが変わったらatomを更新
      (when current-walk
        (reset! steps (str (or (:steps current-walk) 0)))
        (reset! distance (format-distance (:distance-meters current-walk))))
      
      [:div.container
       [:h2 "ウォーキング"]
       (if current-walk
         [:div
          [:p {:style {:color "#667eea" :font-weight "bold"}}
           "ウォーキング中..."]
          [:div {:style {:margin "20px 0"}}
           [:label {:style {:display "block" :margin-bottom "5px"}}
            "歩数:"]
           [:input {:type "number"
                    :value @steps
                    :on-change #(reset! steps (-> % .-target .-value))
                    :disabled loading?}]
           [:label {:style {:display "block" :margin-bottom "5px" :margin-top "15px"}}
            "距離 (km):"]
           [:input {:type "number"
                    :step "0.01"
                    :value @distance
                    :on-change #(reset! distance (-> % .-target .-value))
                    :disabled loading?}]]
          [:div {:style {:display "flex" :gap "10px"}}
           [:button {:on-click #(rf/dispatch [:update-walk 
                                              (:id current-walk)
                                              {:steps (safe-parse-int @steps)
                                               :distance (safe-parse-float @distance)}])
                     :disabled loading?}
            "更新"]
           [:button {:on-click #(rf/dispatch [:complete-walk (:id current-walk)])
                     :disabled loading?
                     :style {:background "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"}}
            "完了"]]]
         [:div
          [:p "ウォーキングを開始しましょう！"]
          [:button {:on-click #(do
                                 (js/console.log "ボタンがクリックされました")
                                 (rf/dispatch [:start-walk]))
                    :disabled loading?}
           "ウォーキング開始"]])])))

(defn walks-history []
  (let [walks @(rf/subscribe [:walks])
        walk-items (for [walk (take 10 walks)]
                     ^{:key (:id walk)}
                     [:div {:style {:background "#f5f5f5"
                                   :padding "15px"
                                   :margin "10px 0"
                                   :border-radius "8px"
                                   :border-left (str "4px solid " 
                                                    (if (= (:status walk) "completed")
                                                      "#38ef7d"
                                                      "#667eea"))}}
                      [:div {:style {:display "flex"
                                    :justify-content "space-between"
                                    :align-items "center"}}
                       [:div
                        [:strong (if (= (:status walk) "completed") "✓ 完了" "進行中")]
                        [:p {:style {:margin "5px 0" :color "#666"}}
                         (str (:steps walk) "歩 / " (format-distance (:distance-meters walk)) "km")]
                        [:p {:style {:margin "0" :font-size "0.9em" :color "#999"}}
                         (:start-time walk)]]
                       (when (= (:status walk) "completed")
                         [:div {:style {:color "#38ef7d" :font-size "2em"}}
                          "🏆"])]])]
    [:div.container
     [:h2 "ウォーク履歴"]
     (if (empty? walks)
       [:p "まだウォーク記録がありません"]
       [:div walk-items])]))

(defn rewards-panel []
  (let [rewards @(rf/subscribe [:rewards])
        unlocked-rewards @(rf/subscribe [:unlocked-rewards])
        unlocked-ids (set (map :reward-id unlocked-rewards))
        reward-cards (for [reward rewards]
                       (let [unlocked? (contains? unlocked-ids (:id reward))]
                         ^{:key (:id reward)}
                         [:div {:style {:background (if unlocked? "#f0f9ff" "#f5f5f5")
                                       :padding "20px"
                                       :border-radius "8px"
                                       :border (str "2px solid " (if unlocked? "#667eea" "#e0e0e0"))
                                       :opacity (if unlocked? 1 0.6)}}
                          [:div {:style {:display "flex"
                                        :justify-content "space-between"
                                        :align-items "flex-start"}}
                           [:div
                            [:h3 {:style {:margin "0 0 10px 0"
                                         :color (if unlocked? "#667eea" "#666")}}
                             (:title reward)]
                            [:p {:style {:margin "5px 0"
                                        :color "#666"
                                        :font-size "0.9em"}}
                             (if (= (:threshold-type reward) "steps")
                               (str (:threshold-value reward) "歩")
                               (str (/ (:threshold-value reward) 1000) "km"))]
                            [:p {:style {:margin "5px 0"
                                        :font-size "0.9em"}}
                             (:description reward)]]
                           (when unlocked?
                             [:div {:style {:color "#667eea" :font-size "2em"}}
                              "🎉"])]]))]
    [:div.container
     [:h2 "報酬"]
     (if (empty? rewards)
       [:p "報酬データを読み込み中..."]
       [:div {:style {:display "grid"
                     :grid-template-columns "repeat(auto-fill, minmax(250px, 1fr))"
                     :gap "20px"}}
        reward-cards])]))

(defn dashboard-page []
  [:div
   [header]
   [stats-panel]
   [walk-control]
   [walks-history]
   [rewards-panel]])
