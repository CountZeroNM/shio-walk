(ns shio-walk.views.dashboard
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [shio-walk.sensors :as sensors]))

;; ============================================================
;; ヘッダー
;; ============================================================
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

;; ============================================================
;; 統計パネル
;; ============================================================
(defn stats-panel []
  (let [stats @(rf/subscribe [:stats])]
    [:div.container
     [:h2 "統計情報"]
     [:div {:style {:display               "grid"
                    :grid-template-columns "1fr 1fr"
                    :gap                   "10px"}}
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

;; ============================================================
;; センサー状態バッジ
;; ============================================================
(defn sensor-badge [label active? denied?]
  [:span {:style {:display "inline-flex"
                  :align-items "center"
                  :gap "4px"
                  :font-size "0.75em"
                  :padding "2px 8px"
                  :border-radius "12px"
                  :font-weight "600"
                  :background (cond active? "#d1fae5"
                                    denied?  "#fee2e2"
                                    :else    "#f3f4f6")
                  :color (cond active? "#065f46"
                               denied?  "#991b1b"
                               :else    "#6b7280")}}
   [:span (cond active? "●" denied? "✕" :else "○")]
   label])

(defn sensor-status-bar []
  (let [sensor-active?   @(rf/subscribe [:sensor/active?])
        motion-supported? @(rf/subscribe [:sensor/motion-supported?])
        geo-supported?   @(rf/subscribe [:sensor/geo-supported?])
        motion-denied?   @(rf/subscribe [:sensor/motion-denied?])
        geo-denied?      @(rf/subscribe [:sensor/geo-denied?])
        sensor-error     @(rf/subscribe [:sensor/error])
        wake-lock?       @(rf/subscribe [:sensor/wake-lock?])
        wake-lock-error  @(rf/subscribe [:sensor/wake-lock-error])]
    [:div {:style {:display "flex"
                   :gap "8px"
                   :flex-wrap "wrap"
                   :align-items "center"
                   :margin-bottom "12px"}}
     [sensor-badge "歩数センサー"
      (and sensor-active? motion-supported?)
      motion-denied?]
     [sensor-badge "GPS"
      (and sensor-active? geo-supported?)
      geo-denied?]
     [sensor-badge "画面点灯"
      (and sensor-active? wake-lock?)
      (and sensor-active? (some? wake-lock-error))]
     (when sensor-error
       [:span {:style {:font-size "0.75em" :color "#ef4444"}}
        (str "⚠ " sensor-error)])
     (when (and sensor-active? wake-lock-error)
       [:span {:style {:font-size "0.75em" :color "#b45309"}}
        (str "⚠ " wake-lock-error "。画面が消えると計測が止まります")])]))

;; ============================================================
;; センサー計測中の表示
;; ============================================================
(defn sensor-live-display []
  ;; 表示はこのウォークの合計 (センサーを動かす前の分 + センサーの分)
  (let [walk      @(rf/subscribe [:current-walk])
        steps     (:steps walk)
        dist-m    (:distance-meters walk)
        motion-denied? @(rf/subscribe [:sensor/motion-denied?])
        geo-denied?    @(rf/subscribe [:sensor/geo-denied?])]
    [:div {:style {:background "linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)"
                   :border "1px solid #bfdbfe"
                   :border-radius "12px"
                   :padding "16px"
                   :margin "12px 0"}}
     [:div {:style {:display "grid"
                    :grid-template-columns "1fr 1fr"
                    :gap "16px"
                    :text-align "center"}}
      [:div
       [:div {:style {:font-size "2.5em"
                      :font-weight "700"
                      :color (if motion-denied? "#9ca3af" "#667eea")}}
        steps]
       [:div {:style {:font-size "0.8em" :color "#6b7280" :margin-top "4px"}}
        (if motion-denied? "歩数（センサー無効）" "👟 歩数（センサー）")]]
      [:div
       [:div {:style {:font-size "2.5em"
                      :font-weight "700"
                      :color (if geo-denied? "#9ca3af" "#10b981")}}
        (.toFixed (/ dist-m 1000) 3)]
       [:div {:style {:font-size "0.8em" :color "#6b7280" :margin-top "4px"}}
        (if geo-denied? "km（GPS無効）" "📍 km（GPS）")]]]
     ;; パーミッション拒否時の案内
     (when (or motion-denied? geo-denied?)
       [:div {:style {:margin-top "12px"
                      :padding "8px 12px"
                      :background "#fffbeb"
                      :border "1px solid #fde68a"
                      :border-radius "8px"
                      :font-size "0.8em"
                      :color "#92400e"}}
        "⚠ センサーへのアクセスが拒否されています。"
        [:br]
        "ブラウザの設定からセンサー権限を許可してください。"])]))

;; ============================================================
;; ポケットモード
;; ============================================================
;; 計測中は画面を点けたままにする (Wake Lock) ので、ポケットに入れると誤タッチが起きる。
;; 画面全体を黒い覆いでふさぎ、1 秒の長押しでだけ戻れるようにする。
;; 黒い画面は有機 EL の端末では電池の減りも少ない。
(defonce pocket-mode? (r/atom false))

(defn pocket-overlay []
  (let [timer (atom nil)
        cancel! #(when-let [t @timer] (js/clearTimeout t) (reset! timer nil))]
    (fn []
      (when @pocket-mode?
        (let [walk @(rf/subscribe [:current-walk])]
          [:div {:style {:position "fixed" :inset 0 :z-index 1000
                         :background "#000" :color "#444"
                         :display "flex" :flex-direction "column"
                         :align-items "center" :justify-content "center"
                         :user-select "none" :touch-action "none"
                         :-webkit-user-select "none"}
                 :on-context-menu #(.preventDefault %)
                 :on-pointer-down (fn [_]
                                    (cancel!)
                                    (reset! timer (js/setTimeout #(do (reset! timer nil)
                                                                      (reset! pocket-mode? false))
                                                                 1000)))
                 :on-pointer-up cancel!
                 :on-pointer-leave cancel!
                 :on-pointer-cancel cancel!}
           [:div {:style {:font-size "3em" :font-weight "700"}} (:steps walk)]
           [:div {:style {:font-size "1.2em" :margin-top "4px"}}
            (str (.toFixed (/ (or (:distance-meters walk) 0) 1000) 2) " km")]
           [:div {:style {:font-size "0.8em" :margin-top "32px"}}
            "計測中。長押し (1 秒) で戻る"]])))))

;; ============================================================
;; 手動入力
;; ============================================================
(defn manual-inputs
  "歩数・距離の入力欄。入力中の文字列はこの部品の中だけで持ち、欄を離れたときに current-walk へ書く。
  current-walk の値が変わると (key が変わって) 作り直され、最新の値が入る"
  [walk loading?]
  (let [local-steps (r/atom (str (or (:steps walk) 0)))
        local-dist  (r/atom (.toFixed (/ (or (:distance-meters walk) 0) 1000) 3))]
    (fn [_walk loading?]
      [:div {:style {:margin "16px 0"}}
       [:label {:style {:display "block" :margin-bottom "5px"}}
        "歩数:"]
       [:input {:type      "number"
                :min       0
                :value     @local-steps
                :on-change #(reset! local-steps (-> % .-target .-value))
                :on-blur   #(let [v (js/parseInt @local-steps)]
                              (if (or (js/isNaN v) (neg? v))
                                (rf/dispatch [:set-error "歩数は 0 以上の整数で入力してください"])
                                (rf/dispatch [:update-current-walk-local {:steps v}])))
                :disabled  loading?}]
       [:label {:style {:display "block" :margin-bottom "5px" :margin-top "15px"}}
        "距離 (km):"]
       [:input {:type      "number"
                :min       0
                :step      "0.01"
                :value     @local-dist
                :on-change #(reset! local-dist (-> % .-target .-value))
                :on-blur   #(let [v (js/parseFloat @local-dist)]
                              (if (or (js/isNaN v) (neg? v))
                                (rf/dispatch [:set-error "距離は 0 以上の数で入力してください"])
                                (rf/dispatch [:update-current-walk-local {:distance-meters (js/Math.round (* v 1000))}])))
                :disabled  loading?}]])))

;; ============================================================
;; ウォーク操作パネル
;; ============================================================
(defn walk-control []
  (let [current-walk   @(rf/subscribe [:current-walk])
        loading?       @(rf/subscribe [:loading?])
        sensor-active? @(rf/subscribe [:sensor/active?])]
    [:div.container
     [:h2 "ウォーキング"]
     (if current-walk
       [:div
        [:p {:style {:color "#667eea" :font-weight "bold"}}
         "🚶 ウォーキング中..."]

        ;; センサー状態バー
        [sensor-status-bar]

        ;; センサー計測中 or 手動入力
        (if sensor-active?
          ;; --- センサー計測表示 (デフォルト) ---
          [:div
           [sensor-live-display]
           [:button {:on-click #(reset! pocket-mode? true)
                     :style {:width "100%" :background "#111827" :color "#e5e7eb"}}
            "🔒 ポケットモード (画面を黒くして誤タッチを防ぐ)"]
           [:p {:style {:font-size "0.8em"
                        :color "#9ca3af"
                        :text-align "center"
                        :cursor "pointer"
                        :margin-top "8px"}
                :on-click #(rf/dispatch [:stop-sensors])}
            "手動入力に切り替える →"]]

          ;; --- 手動入力フォーム (副) ---
          [:div
           ^{:key (str (:id current-walk) ":" (:steps current-walk) ":" (:distance-meters current-walk))}
           [manual-inputs current-walk loading?]

           ;; センサー開始ボタン (手動から戻る用)。センサーの起動はタップの処理の中で直接行う (iOS の制約)
           [:button {:on-click (fn []
                                 (sensors/start-sensors!)
                                 (rf/dispatch [:start-sensors]))
                     :disabled loading?
                     :style    {:width "100%"
                                :margin-bottom "8px"
                                :background "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}
            "📱 センサー計測に戻る"]])

            ;; 操作ボタン（共通）
            [:div {:style {:display "flex" :gap "10px" :margin-top "16px"}}
             (when (not sensor-active?)
               ;; 押すと入力欄から離れ (on-blur で current-walk に書く)、そのあとで保存のイベントが処理される
               [:button {:on-click #(rf/dispatch [:save-current-walk])
                         :disabled loading?}
                "保存"])

             (when sensor-active?
               [:button {:on-click #(rf/dispatch [:sync-sensor-data])
                         :disabled loading?
                         :style {:background "#e0e7ff" :color "#3730a3"}}
                "📊 記録を保存"])

             [:button {:on-click #(rf/dispatch [:complete-walk (:id current-walk)])
                       :disabled loading?
                       :style    {:background
                                  "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"}}
              "✓ 完了"]]]

           ;; ウォーク未開始
           [:div
            [:p "ウォーキングを開始しましょう！"]
            [:button {:on-click (fn []
                                  (sensors/start-sensors!) ;; ユーザー操作に同期してセンサー起動
                                  (rf/dispatch [:start-walk]))
                      :disabled loading?
                      :style {:background "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}
             "ウォーキング開始"]])]))

;; ============================================================
;; ウォーク履歴
;; ============================================================
(defn walks-history []
  (let [expanded? (r/atom false)]
    (fn []
      (let [walks @(rf/subscribe [:walks])
            display-walks (if @expanded? walks (take 3 walks))]
        [:div.container
         [:h2 "ウォーク履歴"]
         (if (empty? walks)
           [:p "まだウォーク記録がありません"]
           [:div
            (into
             [:div]
             (for [walk display-walks]
               [:div
                {:key   (:id walk)
                 :style {:background    "#f5f5f5"
                         :padding       "15px"
                         :margin        "10px 0"
                         :border-radius "8px"
                         :border-left   (str "4px solid "
                                             (if (= (:status walk) "completed")
                                               "#38ef7d" "#667eea"))}}
                [:div {:style {:display "flex" :justify-content "space-between" :align-items "center"}}
                 [:div
                  [:strong (if (= (:status walk) "completed") "✓ 完了" "進行中")]
                  [:p {:style {:margin "5px 0" :color "#666"}}
                   (str (:steps walk) "歩 / "
                        (.toFixed (/ (:distance-meters walk) 1000) 2) "km")]
                  [:p {:style {:margin "0" :font-size "0.9em" :color "#999"}}
                   (:start-time walk)]]
                 (when (= (:status walk) "completed")
                   [:div {:style {:color "#38ef7d" :font-size "2em"}} "🏆"])]]))
            (when (> (count walks) 3)
              [:button {:style    {:width            "100%"
                                   :background       "none"
                                   :border           "1px dashed #667eea"
                                   :color            "#667eea"
                                   :padding          "10px"
                                   :margin-top       "10px"
                                   :border-radius    "8px"
                                   :cursor           "pointer"
                                   :text-align       "center"}
                        :on-click #(swap! expanded? not)}
               (if @expanded? "▲ 閉じる" (str "▼ 他の" (- (count walks) 3) "件を表示"))])])]))))

;; ============================================================
;; 報酬パネル
;; ============================================================
(defn rewards-panel []
  (let [rewards          @(rf/subscribe [:rewards])
        unlocked-rewards @(rf/subscribe [:unlocked-rewards])
        unlocked-ids     (set (map :id unlocked-rewards))]
    [:div.container
     [:h2 "報酬"]
     (if (empty? rewards)
       [:p "報酬データを読み込み中..."]
       (into
        [:div {:style {:display               "grid"
                       :grid-template-columns "repeat(auto-fill, minmax(250px, 1fr))"
                       :gap                   "20px"}}]
        (for [reward rewards]
          (let [unlocked? (contains? unlocked-ids (:id reward))]
            [:div {:key   (:id reward)
                   :style {:background    (if unlocked? "#f0f9ff" "#f5f5f5")
                           :padding       "20px"
                           :border-radius "8px"
                           :border        (str "2px solid " (if unlocked? "#667eea" "#e0e0e0"))
                           :opacity       (if unlocked? 1 0.6)}}
             [:div {:style {:display "flex" :justify-content "space-between" :align-items "flex-start"}}
              [:div
               [:h3 {:style {:margin "0 0 10px 0" :color (if unlocked? "#667eea" "#666")}}
                (:title reward)]
               [:p {:style {:margin "5px 0" :color "#666" :font-size "0.9em"}}
                (if (= (:threshold-type reward) "steps")
                  (str (:threshold-value reward) "歩")
                  (str (/ (:threshold-value reward) 1000) "km"))]
               [:p {:style {:margin "5px 0" :font-size "0.9em"}}
                (:description reward)]]
              (when unlocked?
                [:div {:style {:color "#667eea" :font-size "2em"}} "🎉"])]]))))]))

;; ============================================================
;; ダッシュボード全体
;; ============================================================
(defn dashboard-page []
  [:div
   [pocket-overlay]
   [header]
   [stats-panel]
   [walk-control]
   [walks-history]
   [rewards-panel]])
