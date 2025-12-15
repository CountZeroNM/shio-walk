#!/bin/bash

# ウォーク完了と報酬獲得の完全テスト

BASE_URL="http://localhost:3000"
EMAIL="test@example.com"
PASSWORD="password123"

echo "========================================="
echo "ウォーク完了と報酬獲得テスト"
echo "========================================="
echo ""

# ログイン
echo "📝 ログイン中..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/api/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")

TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -z "$TOKEN" ]; then
  echo "❌ ログイン失敗"
  exit 1
fi

echo "✅ ログイン成功"
echo ""

# テストシナリオ1: 1000歩で報酬獲得
echo "========================================="
echo "シナリオ1: 1000歩達成（報酬: 最初の一歩）"
echo "========================================="
echo ""

echo "📝 1-1. ウォーク開始..."
WALK1=$(curl -s -X POST "$BASE_URL/api/walks/start" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
WALK_ID1=$(echo $WALK1 | grep -o '"id":"[^"]*' | cut -d'"' -f4)
echo "Walk ID: $WALK_ID1"
echo ""

echo "📝 1-2. 1000歩を記録..."
sleep 1
UPDATE1=$(curl -s -X PUT "$BASE_URL/api/walks/$WALK_ID1" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"steps": 1000, "distance": 0.8}')
echo "Response: $UPDATE1"
echo ""

echo "📝 1-3. ウォーク完了..."
sleep 1
COMPLETE1=$(curl -s -X POST "$BASE_URL/api/walks/$WALK_ID1/complete" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
echo "Response: $COMPLETE1"
echo ""

echo "📝 1-4. 獲得した報酬を確認..."
REWARDS1=$(curl -s "$BASE_URL/api/rewards/unlocked" \
  -H "Authorization: Bearer $TOKEN")
echo "Response: $REWARDS1"
echo ""

# テストシナリオ2: 5000歩で追加報酬獲得
echo "========================================="
echo "シナリオ2: 5000歩達成（報酬: 頑張り屋さん）"
echo "========================================="
echo ""

echo "📝 2-1. 新しいウォーク開始..."
WALK2=$(curl -s -X POST "$BASE_URL/api/walks/start" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
WALK_ID2=$(echo $WALK2 | grep -o '"id":"[^"]*' | cut -d'"' -f4)
echo "Walk ID: $WALK_ID2"
echo ""

echo "📝 2-2. 5000歩を記録..."
sleep 1
UPDATE2=$(curl -s -X PUT "$BASE_URL/api/walks/$WALK_ID2" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"steps": 5000, "distance": 4.0}')
echo "Response: $UPDATE2"
echo ""

echo "📝 2-3. ウォーク完了..."
sleep 1
COMPLETE2=$(curl -s -X POST "$BASE_URL/api/walks/$WALK_ID2/complete" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
echo "Response: $COMPLETE2"
echo ""

echo "📝 2-4. 獲得した報酬を確認..."
REWARDS2=$(curl -s "$BASE_URL/api/rewards/unlocked" \
  -H "Authorization: Bearer $TOKEN")
echo "Response: $REWARDS2"
echo ""

# テストシナリオ3: 10000歩で最高報酬獲得
echo "========================================="
echo "シナリオ3: 10000歩達成（報酬: ウォーキングマスター）"
echo "========================================="
echo ""

echo "📝 3-1. 新しいウォーク開始..."
WALK3=$(curl -s -X POST "$BASE_URL/api/walks/start" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
WALK_ID3=$(echo $WALK3 | grep -o '"id":"[^"]*' | cut -d'"' -f4)
echo "Walk ID: $WALK_ID3"
echo ""

echo "📝 3-2. 10000歩を記録..."
sleep 1
UPDATE3=$(curl -s -X PUT "$BASE_URL/api/walks/$WALK_ID3" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"steps": 10000, "distance": 8.0}')
echo "Response: $UPDATE3"
echo ""

echo "📝 3-3. ウォーク完了..."
sleep 1
COMPLETE3=$(curl -s -X POST "$BASE_URL/api/walks/$WALK_ID3/complete" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
echo "Response: $COMPLETE3"
echo ""

echo "📝 3-4. 獲得した報酬を確認..."
REWARDS3=$(curl -s "$BASE_URL/api/rewards/unlocked" \
  -H "Authorization: Bearer $TOKEN")
echo "Response: $REWARDS3"
echo ""

# 最終統計確認
echo "========================================="
echo "最終統計情報"
echo "========================================="
echo ""

STATS=$(curl -s "$BASE_URL/api/stats" \
  -H "Authorization: Bearer $TOKEN")
echo "Response: $STATS"
echo ""

# 全報酬一覧
echo "========================================="
echo "全報酬一覧（マスタデータ）"
echo "========================================="
echo ""

ALL_REWARDS=$(curl -s "$BASE_URL/api/rewards" \
  -H "Authorization: Bearer $TOKEN")
echo "Response: $ALL_REWARDS"
echo ""

echo "========================================="
echo "✅ テスト完了"
echo "========================================="
echo ""
echo "確認事項:"
echo "- 1000歩で「最初の一歩」報酬を獲得したか"
echo "- 5000歩で「頑張り屋さん」報酬を獲得したか"
echo "- 10000歩で「ウォーキングマスター」報酬を獲得したか"
echo "- 統計情報が正しく累積されているか"
