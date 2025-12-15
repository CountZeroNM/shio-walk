#!/bin/bash

# shio-walk API修正適用スクリプト

echo "========================================="
echo "shio-walk API 修正適用"
echo "========================================="
echo ""

BACKEND_DIR="$HOME/shio-walk/backend"
HANDLERS_FILE="$BACKEND_DIR/src/shio_walk/walks/handlers.clj"

# バックアップ作成
echo "📦 1. 既存ファイルをバックアップ中..."
if [ -f "$HANDLERS_FILE" ]; then
  BACKUP_FILE="$HANDLERS_FILE.backup.$(date +%Y%m%d_%H%M%S)"
  cp "$HANDLERS_FILE" "$BACKUP_FILE"
  echo "✅ バックアップ作成: $BACKUP_FILE"
else
  echo "⚠️  ファイルが見つかりません: $HANDLERS_FILE"
  exit 1
fi
echo ""

# 新しいコードを適用
echo "📝 2. 新しいコードを適用中..."
cat > "$HANDLERS_FILE" << 'EOF'
(ns shio-walk.walks.handlers
  (:require [ring.util.response :as response]
            [shio-walk.db :as db]
            [clojure.java.jdbc :as jdbc]))

(defn start-walk [user-id]
  (let [walk-id (str (java.util.UUID/randomUUID))
        walk {:id walk-id
              :user_id user-id
              :status "in_progress"
              :steps 0
              :distance_meters 0
              :started_at (java.time.Instant/now)}]
    (db/execute! db/db-spec
                 ["INSERT INTO walks (id, user_id, status, steps, distance_meters, started_at)
                   VALUES (?, ?, ?, ?, ?, ?)"
                  (:id walk) (:user_id walk) (:status walk)
                  (:steps walk) (:distance_meters walk) (:started_at walk)])
    (response/response walk)))

(defn update-walk [walk-id user-id body]
  (let [steps (:steps body)
        ;; 両方のキー名をサポート（後方互換性）
        distance-meters (or (:distance_meters body)
                           (when-let [dist (:distance body)]
                             ;; distanceがkm単位の場合はメートルに変換
                             (if (< dist 100) ; 100未満ならkm単位と推定
                               (* dist 1000)
                               dist)))]
    
    ;; バリデーション - より親切なエラーメッセージ
    (cond
      (nil? steps)
      (response/status
       (response/response {:error "steps is required"
                          :hint "Please provide the number of steps taken"})
       400)
      
      (nil? distance-meters)
      (response/status
       (response/response {:error "distance is required"
                          :hint "Please provide distance_meters (in meters) or distance (in km)"
                          :example {:steps 1000 :distance_meters 800}})
       400)
      
      :else
      ;; ウォークの存在確認と権限チェック
      (let [existing-walk (db/execute-one! db/db-spec
                                           ["SELECT * FROM walks WHERE id = ? AND user_id = ?"
                                            walk-id user-id])]
        (if-not existing-walk
          (response/status
           (response/response {:error "Walk not found or unauthorized"})
           404)
          
          (if (= (:status existing-walk) "completed")
            (response/status
             (response/response {:error "Cannot update completed walk"})
             400)
            
            ;; 更新実行
            (do
              (db/execute! db/db-spec
                          ["UPDATE walks SET steps = ?, distance_meters = ?, updated_at = ?
                            WHERE id = ? AND user_id = ?"
                           steps distance-meters (java.time.Instant/now) walk-id user-id])
              
              ;; 報酬チェック
              (check-and-award-rewards user-id steps distance-meters)
              
              ;; 更新後のウォーク情報を取得
              (let [updated-walk (db/execute-one! db/db-spec
                                                 ["SELECT * FROM walks WHERE id = ?" walk-id])]
                (response/response updated-walk)))))))))

(defn check-and-award-rewards [user-id steps distance-meters]
  ;; 距離をkmに変換
  (let [distance-km (/ distance-meters 1000.0)
        
        ;; 報酬マスタを取得
        rewards (db/execute! db/db-spec
                            ["SELECT * FROM rewards"])
        
        ;; 既に獲得済みの報酬IDを取得
        unlocked-ids (set (map :reward_id
                              (db/execute! db/db-spec
                                          ["SELECT reward_id FROM user_rewards WHERE user_id = ?"
                                           user-id])))]
    
    ;; 各報酬の条件をチェック
    (doseq [reward rewards]
      (when-not (contains? unlocked-ids (:id reward))
        (let [condition-met? (or
                              ;; 歩数条件
                              (and (:required_steps reward)
                                   (>= steps (:required_steps reward)))
                              ;; 距離条件
                              (and (:required_distance_km reward)
                                   (>= distance-km (:required_distance_km reward))))]
          
          (when condition-met?
            ;; 報酬を付与
            (db/execute! db/db-spec
                        ["INSERT INTO user_rewards (id, user_id, reward_id, unlocked_at)
                          VALUES (?, ?, ?, ?)"
                         (str (java.util.UUID/randomUUID))
                         user-id
                         (:id reward)
                         (java.time.Instant/now)])))))))

(defn complete-walk [walk-id user-id]
  ;; ウォークの存在確認
  (let [existing-walk (db/execute-one! db/db-spec
                                       ["SELECT * FROM walks WHERE id = ? AND user_id = ?"
                                        walk-id user-id])]
    (if-not existing-walk
      (response/status
       (response/response {:error "Walk not found or unauthorized"})
       404)
      
      (if (= (:status existing-walk) "completed")
        (response/status
         (response/response {:error "Walk already completed"})
         400)
        
        ;; ウォークを完了状態に更新
        (do
          (db/execute! db/db-spec
                      ["UPDATE walks SET status = ?, completed_at = ?
                        WHERE id = ? AND user_id = ?"
                       "completed" (java.time.Instant/now) walk-id user-id])
          
          ;; user_statsを更新
          (let [stats (db/execute-one! db/db-spec
                                      ["SELECT * FROM user_stats WHERE user_id = ?" user-id])
                steps (:steps existing-walk)
                distance-meters (:distance_meters existing-walk)
                distance-km (/ distance-meters 1000.0)]
            
            (if stats
              ;; 既存の統計を更新
              (db/execute! db/db-spec
                          ["UPDATE user_stats
                            SET total_steps = total_steps + ?,
                                total_distance_km = total_distance_km + ?,
                                total_walks = total_walks + 1,
                                updated_at = ?
                            WHERE user_id = ?"
                           steps distance-km (java.time.Instant/now) user-id])
              
              ;; 新規統計レコード作成
              (db/execute! db/db-spec
                          ["INSERT INTO user_stats (id, user_id, total_steps, total_distance_km, total_walks, created_at, updated_at)
                            VALUES (?, ?, ?, ?, ?, ?, ?)"
                           (str (java.util.UUID/randomUUID))
                           user-id
                           steps
                           distance-km
                           1
                           (java.time.Instant/now)
                           (java.time.Instant/now)])))
          
          ;; 完了したウォーク情報を取得して返す
          (let [completed-walk (db/execute-one! db/db-spec
                                               ["SELECT * FROM walks WHERE id = ?" walk-id])]
            (response/response completed-walk)))))))

(defn get-walks [user-id]
  (let [walks (db/execute! db/db-spec
                          ["SELECT * FROM walks WHERE user_id = ? ORDER BY started_at DESC"
                           user-id])]
    (response/response walks)))

(defn get-stats [user-id]
  (let [stats (db/execute-one! db/db-spec
                              ["SELECT * FROM user_stats WHERE user_id = ?" user-id])]
    (if stats
      (response/response stats)
      (response/response {:total_steps 0
                         :total_distance_km 0.0
                         :total_walks 0}))))
EOF

echo "✅ 新しいコードを適用しました"
echo ""

echo "========================================="
echo "✅ 修正適用完了"
echo "========================================="
echo ""
echo "次のステップ:"
echo "1. サーバーを再起動してください:"
echo "   cd ~/shio-walk/backend && ./run.sh"
echo ""
echo "2. 改善されたAPIをテストしてください:"
echo "   - distance キーでの送信が可能になりました"
echo "   - より親切なエラーメッセージが表示されます"
echo ""
echo "バックアップファイル: $BACKUP_FILE"