#!/bin/bash

# 改善版API テストスクリプト
# distanceキーとdistance_metersキーの両方をテスト

BASE_URL="http://localhost:3000"
EMAIL="test@example.com"
PASSWORD="password123"

echo "========================================="
echo "改善版API テスト"
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

# テスト1: distance キー（km単位）で送信
echo "📝 テスト1: distance キー（0.8km）で送信..."
WALK_START1=$(curl -s -X POST "$BASE_URL/api/walks/start" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
WALK_ID1=$(echo $WALK_START1 | grep -o '"id":"[^"]*' | cut -d'"' -f4)

sleep 1
UPDATE1=$(curl -s -X PUT "$BASE_URL/api/walks/$WALK_ID1" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"steps": 1000, "distance": 0.8}')
echo "Response: $UPDATE1"
echo ""

# テスト2: distance_meters キー（メートル単位）で送信
echo "📝 テスト2: distance_meters キー（1200m）で送信..."
WALK_START2=$(curl -s -X POST "$BASE_URL/api/walks/start" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
WALK_ID2=$(echo $WALK_START2 | grep -o '"id":"[^"]*' | cut -d'"' -f4)

sleep 1
UPDATE2=$(curl -s -X PUT "$BASE_URL/api/walks/$WALK_ID2" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"steps": 1500, "distance_meters": 1200}')
echo "Response: $UPDATE2"
echo ""

# テスト3: エラーメッセージのテスト（distanceなし）
echo "📝 テスト3: エラーメッセージのテスト（distanceなし）..."
WALK_START3=$(curl -s -X POST "$BASE_URL/api/walks/start" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
WALK_ID3=$(echo $WALK_START3 | grep -o '"id":"[^"]*' | cut -d'"' -f4)

sleep 1
ERROR_TEST=$(curl -s -X PUT "$BASE_URL/api/walks/$WALK_ID3" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"steps": 1500}')
echo "Response: $ERROR_TEST"
echo ""

# テスト4: 大きな距離で報酬獲得
echo "📝 テスト4: 大きな距離（5.5km）で報酬獲得テスト..."
WALK_START4=$(curl -s -X POST "$BASE_URL/api/walks/start" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json")
WALK_ID4=$(echo $WALK_START4 | grep -o '"id":"[^"]*' | cut -d'"' -f4)

sleep 1
UPDATE4=$(curl -s -X PUT "$BASE_URL/api/walks/$WALK_ID4" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"steps": 7000, "distance": 5.5}')
echo "Response: $UPDATE4"
echo ""

# 獲得済み報酬確認
echo "📝 獲得済み報酬確認..."
UNLOCKED=$(curl -s "$BASE_URL/api/rewards/unlocked" \
  -H "Authorization: Bearer $TOKEN")
echo "Response: $UNLOCKED"
echo ""

echo "========================================="
echo "✅ テスト完了"
echo "========================================="
echo ""
echo "確認事項:"
echo "- distanceキー（km単位）が正しく動作しているか"
echo "- distance_metersキー（m単位）が正しく動作しているか"
echo "- エラーメッセージが親切になっているか"
echo "- 報酬が正しく獲得されているか"