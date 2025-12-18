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

## API Specification (v2.0)

このAPIはフロントエンドのための唯一の信頼できる情報源(Single Source of Truth)です。API仕様と実装が乖離した場合、フロントエンドでの吸収は禁止し、API実装側を修正することを原則とします。

### 1. Data Conventions

#### Key Naming
すべてのJSONレスポンスのキーは **`kebab-case`** に統一します。

- **OK**: `:total-steps`
- **NG**: `:total_steps`, `:totalSteps`

#### Primary Keys
すべてのリソースのプライマリキーは **`:id`** に統一します。

- **OK**: `:id`
- **NG**: `:walk-id`, `:reward_id`

#### Status Values
ステータスを表すフィールドは、小文字の文字列で統一します。

- **Walks**: `"active"`, `"completed"`

#### Timestamps
タイムスタンプはすべて **ISO-8601** 形式のUTC文字列で表現します。

- **Example**: `"2025-12-18T12:30:00Z"`

### 2. Authentication
保護されたエンドポイントには、HTTPヘッダーにJWTを含める必要があります。

```
Authorization: Bearer <your-jwt-token>
```

### 3. Endpoint Examples

#### `POST /api/walks/start`
新しいウォーキングセッションを開始します。

- **Response (200 OK)**
  ```json
  {
    "walk": {
      "id": "1e9d1b0a-0b9a-4c1c-9d1b-0a0b9a4c1c9d",
      "user-id": "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6",
      "start-time": "2025-12-18T10:00:00Z",
      "status": "active",
      "steps": 0,
      "distance-meters": 0
    }
  }
  ```

#### `GET /api/walks`
ユーザーの過去のウォーク履歴を取得します。

- **Response (200 OK)**
  ```json
  {
    "walks": [
      {
        "id": "1e9d1b0a-0b9a-4c1c-9d1b-0a0b9a4c1c9d",
        "user-id": "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6",
        "start-time": "2025-12-18T10:00:00Z",
        "end-time": "2025-12-18T10:45:00Z",
        "status": "completed",
        "steps": 5231,
        "distance-meters": 3800
      }
    ]
  }
  ```

#### `GET /api/rewards`
すべての報酬マスタリストを取得します。

- **Response (200 OK)**
  ```json
  {
    "rewards": [
      {
        "id": "f4c2e1d1-c2b3-4a5e-b6c7-d8e9f0a1b2c3",
        "title": "最初の一歩",
        "description": "初めてのウォーキングを記録する",
        "threshold-type": "walks",
        "threshold-value": 1,
        "image-url": null,
        "audio-url": null
      },
      {
        "id": "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6",
        "title": "1000歩達成",
        "description": "1回のウォークで1000歩を達成する",
        "threshold-type": "steps",
        "threshold-value": 1000,
        "image-url": null,
        "audio-url": null
      }
    ]
  }
  ```

#### `GET /api/rewards/unlocked`
ユーザーが獲得した報酬のリストを取得します。

- **Response (200 OK)**
  ```json
  {
    "rewards": [
      {
        "id": "f4c2e1d1-c2b3-4a5e-b6c7-d8e9f0a1b2c3",
        "title": "最初の一歩",
        "description": "初めてのウォーキングを記録する",
        "threshold-type": "walks",
        "threshold-value": 1,
        "image-url": null,
        "audio-url": null,
        "unlocked-at": "2025-12-18T10:45:00Z"
      }
    ]
  }
  ```

---

## 修正履歴（2025-12-18）

- **不具合**: ウォーキング開始ボタンを押してもUIが更新されない問題、およびリスト表示で`:key`警告が多発する問題。
- **原因**: バックエンドAPIが返すJSONのデータ形式が不統一だったため。
  - `start-walk` APIが `status: "in_progress"` を返していた。
  - レスポンスのキーが `snake_case` と `kebab-case` が混在していた。
  - 一部のデータで `:id` が `nil` になっていた。
  - これらのデータの不整合が原因で、フロントエンドのre-frameが状態を正しく認識・更新できず、UIの再描画が失敗していた。
- **対応**: APIを「唯一の信頼できる情報源」と位置づけ、バックエンドのレスポンスを正規化。
  - すべてのAPIレスポンスのキーを `kebab-case` に統一。
  - `start-walk` APIは必ず `status: "active"` を返すように修正。
  - `id` が `nil` のデータはAPIレスポンスから除外。
  - `distance-meters` などの数値が `nil` にならないようデフォルト値 `0` を設定。
  - 上記の前提に基づき、フロントエンドのデータ吸収ロジックを削除・単純化。
- **設計判断**: 将来の保守コストを最小化するため、フロントエンド側でAPIの不整合を吸収するのではなく、契約境界であるバックエンドAPI側を修正するアプローチを選択。これにより、フロントエンドは受け取ったデータをそのまま信頼して使用できるようになった。

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
