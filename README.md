# shio-walk

ウォーキング距離管理アプリ（バックエンド）
歩数・距離を記録し、到達条件を満たすと報酬（画像・音声）を解放する仕組みを提供します。

<img alt="LogInImage" src="images/Screenshot-2025-12-07-10.17.43.png" width="300">
<img alt="AppImage000" src="images/screenshot-2025-12-15-093709.png" width="300">

---

## 概要

**shio-walk** はスマートフォン向けウォーキングアプリのためのバックエンド API です。

* ウォークの開始・更新・完了を管理
* 歩数・距離の累計統計を自動更新
* 条件達成時に報酬をアンロック
* JWT 認証によるユーザー管理

現在は **バックエンド API が完成・動作確認済み** で、フロントエンドは未着手です。

---

## 開発状況

### 完了

* プロジェクト構造作成
* PostgreSQL 環境構築（Docker Compose）
* データベースマイグレーション
* 認証システム（JWT / Buddy）
* ユーザー登録・ログイン API
* ウォーク管理 API
* 報酬システム API
* API 動作確認（curl）

### 未対応

* フロントエンド（ClojureScript + Reagent / Re-frame）
* スマートフォンセンサー連携
* 画像・音声報酬の実装
* デプロイ準備

---

## 技術スタック

### バックエンド

* **Language**: Clojure 1.11.1
* **Framework**: Ring + Compojure
* **Server**: Jetty
* **Database**: PostgreSQL 15
* **Auth**: JWT（Buddy）

### フロントエンド（予定）

* **Language**: ClojureScript
* **Framework**: Reagent + Re-frame

---

## ディレクトリ構成

```text
shio-walk/
├─ backend/
│  ├─ deps.edn
│  ├─ resources/
│  │  └─ migrations/
│  └─ src/shio_walk/
│     ├─ core.clj        ; サーバー起動
│     ├─ routes.clj      ; ルーティング定義
│     ├─ middleware.clj  ; JWT認証など
│     ├─ config.clj      ; 設定（DB接続等）
│     ├─ db.clj          ; DB操作
│     ├─ auth/
│     │  ├─ core.clj
│     │  └─ handlers.clj
│     ├─ walks/
│     │  └─ handlers.clj
│     └─ rewards/
│        └─ handlers.clj
├─ frontend/              ; 未着手
├─ images/
└─ README.md
```

---

## データベース構成

* **users**: ユーザー情報
* **walks**: ウォーキング記録
* **user_stats**: 累計歩数・距離などの統計
* **rewards**: 報酬マスタ
* **user_rewards**: ユーザー獲得済み報酬

### 初期報酬例

* 1000歩: 最初の一歩
* 5000歩: 頑張り屋さん
* 10000歩: ウォーキングマスター
* 1km: 1km走破
* 5km: 5km走破

---

## API エンドポイント

### Public

* `POST /api/auth/register` ユーザー登録
* `POST /api/auth/login` ログイン
* `GET /api/health` ヘルスチェック

### Protected（JWT必須）

* `GET /api/user/profile`
* `POST /api/walks/start`
* `PUT /api/walks/:id`
* `POST /api/walks/:id/complete`
* `GET /api/walks`
* `GET /api/stats`
* `GET /api/rewards`
* `GET /api/rewards/unlocked`

---

## ローカル開発環境構築

### 1. DB 起動

```bash
docker compose up -d
```

### 2. マイグレーション

```bash
cd backend
clj -M:migrate migrate
```

### 3. サーバー起動

```bash
cd backend
DB_USER=shio_user DB_PASSWORD=shiopass DB_NAME=shio_walk clj -M:run
```

または

```bash
./backend/run.sh
```

---

## 動作確認（curl例）

### ユーザー登録

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com","username":"testuser","password":"password123"}'
```

### ログイン

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com","password":"password123"}'
```

---

## 既知の問題と対応履歴

* **DB認証失敗**: HikariCP が `:user` を認識しない

  * 対応: `config.clj` に `:username` を追加

* **ユーザー登録時エラー**: `execute-one!` が単一アリティ

  * 対応: DB関数をマルチアリティ化

---

## 今後の予定

* [ ] API の追加テスト
* [ ] フロントエンド実装
* [ ] 簡易 Web UI デモ
* [ ] スマートフォンセンサー連携設計

---

## ライセンス

MIT License




> [!NOTE]
> ##### 編集メモ
> エクスクラメーションマークを行頭に付けるとアクティブに
```
![text](image/abc.png)
```
