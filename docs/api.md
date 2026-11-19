# shio-walk API (v2.1, 2026-11-19)

この API は画面 (フロントエンド) にとって唯一の正しいデータ源 (Single Source of Truth) です。
仕様と実装がずれたら、画面で吸収せず API を直します。動作は `backend/test/shio_walk/api_test.clj` で確かめています。

## 約束 (Data Conventions)

| 項目 | 約束 |
|---|---|
| JSON のキー | すべて `kebab-case` (`total-steps`)。`snake_case`・`camelCase` は使わない |
| ID | すべて `id` (UUID の文字列) |
| 数値 | `steps`・`distance-meters` などは `null` にしない (無ければ 0) |
| 時刻 | ISO-8601 の UTC (`2026-03-07T23:14:16.077Z`)。まだ無い時刻 (`end-time` など) は `null` |
| ウォークの状態 | `"active"` (進行中)・`"completed"` (完了)。DB の値も同じ |
| 単位 | 距離はメートル (`distance-meters`)。統計の累計だけ km (`total-distance-km`) |
| エラー | `{"error": "説明"}`。400 入力の誤り・401 認証・404 見つからない (他人のものを含む)・409 重複・500 想定外 (中身は返さない) |

> [!WARNING]
> **実装上の注意 (ハイフンとアンダースコア)**: next.jdbc が返す行のキーは DB の列名どおり `:walks/distance_meters` (アンダースコア)。
> API のキー (ハイフン) への変換は `backend/src/shio_walk/convert.clj` の 1 か所で行う。ハンドラで行のキーを直接書かない。

## 認証

`POST /api/auth/register` か `login` で受け取ったトークンを、保護されたエンドポイントに付けます (有効期限 7 日)。

```
Authorization: Bearer <token>
```

## エンドポイント

### 公開

| | 本文 | 応答 |
|---|---|---|
| `POST /api/auth/register` | `{"email","username","password"(8文字以上)}` | `{"token", "user": {"id","email","username","created-at"}}`。重複は 409、メールの形が不正なら 400 |
| `POST /api/auth/login` | `{"email","password"}` | `{"token", "user": {"id","email","username"}}`。違えば 401 |
| `GET /api/health` | | `{"status":"ok", ...}` |

### 保護 (JWT が必要)

| | 本文 | 応答 |
|---|---|---|
| `GET /api/user/profile` | | `{"user": {"id","email","username","created-at","last-login"}}` (画面では未使用) |
| `POST /api/walks/start` | | `{"walk": ウォーク}`。**進行中があればそれを返す** (1 人 1 つ。DB の一意インデックスでも保証) |
| `PUT /api/walks/:id` | `{"steps": 0以上の整数, "distance-meters": 0以上の数}` (両方必須) | `{"walk": ウォーク}`。自分の進行中のウォークでなければ 404 |
| `POST /api/walks/:id/complete` | 省略可。`{"steps","distance-meters"}` を付けると、その値を最終値として書いてから完了 | `{"walk": ウォーク}`。完了・統計への加算・報酬の解放を 1 つのトランザクションで行う。二重の完了は 404 |
| `GET /api/walks` | | `{"walks": [ウォーク…]}` (新しい順に 20 件) |
| `GET /api/stats` | | `{"total-steps","total-distance-km","total-walks","rewards-unlocked"}` |
| `GET /api/rewards` | | `{"rewards": [報酬…]}` (報酬マスタ全部) |
| `GET /api/rewards/unlocked` | | `{"rewards": [報酬 + "unlocked-at"…]}` (獲得済み、新しい順) |

v2.0 からの変更: `distance` (km、100 未満なら km とみなす推測つき) は受け付けなくなり、`distance-meters` だけになりました (送ると 400)。

### ウォーク

```json
{
  "id": "1e9d1b0a-0b9a-4c1c-9d1b-0a0b9a4c1c9d",
  "user-id": "a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6",
  "start-time": "2026-11-19T10:00:00.123Z",
  "end-time": null,
  "status": "active",
  "steps": 1200,
  "distance-meters": 950.5,
  "updated-at": "2026-11-19T10:12:00.456Z"
}
```

### 報酬

```json
{
  "id": "f4c2e1d1-c2b3-4a5e-b6c7-d8e9f0a1b2c3",
  "threshold-type": "steps",
  "threshold-value": 1000,
  "title": "最初の一歩",
  "description": "1000歩達成おめでとう!",
  "image-url": null,
  "audio-url": null,
  "unlocked-at": "2026-11-19T10:45:00.000Z"
}
```

`threshold-type` は `"steps"` (累計歩数) か `"distance"` (累計距離、メートル)。`unlocked-at` は獲得済みの一覧だけに付く。
初期の報酬は 1000 歩・5000 歩・10000 歩・1 km・5 km (`003-create-rewards.up.sql`)。

## DB

| テーブル | 中身 |
|---|---|
| `users` | ユーザー (パスワードは bcrypt+sha512 のハッシュ) |
| `walks` | ウォーク。状態は `active` / `completed` / `cancelled` (cancelled は未使用) |
| `user_stats` | 累計 (完了したウォークを足していく)。`rewards_unlocked` は `user_rewards` の数を数え直す |
| `rewards` / `user_rewards` | 報酬マスタ / 獲得済み |

マイグレーションは `backend/resources/migrations/` (migratus の書式 `<番号>-<名前>.up.sql`、文の区切りは `--;;`)。
