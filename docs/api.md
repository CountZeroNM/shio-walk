- 以下は API memo 更新版 です

# API memo（updated / 2025-12）
## プロジェクトの現状

- 本プロジェクトは バックエンド・フロントエンド双方が実装済み

- フロントエンドは ClojureScript + Re-frame により以下を提供

    - 認証（login / logout）

    - ウォーキング開始・完了

    - 統計情報・報酬の表示

- 現在は UI安定性向上と境界設計の整理フェーズ

## データベース構成（現行）

※ 構成自体は変更なし

- users: ユーザー情報
- walks: ウォーキング記録（active / completed）
- user_stats: 累計歩数・距離などの統計（SSOT）
- rewards: 報酬マスタ
- user_rewards: ユーザー獲得済み報酬

## API エンドポイント（現行）
### Public
- POST /api/auth/register
- POST /api/auth/login
- GET /api/health

### Protected（JWT必須）
- GET /api/walks
- POST /api/walks/start
- PUT /api/walks/:id
- POST /api/walks/:id/complete
- GET /api/stats
- GET /api/rewards
- GET /api/rewards/unlocked
※ GET /api/user/profile は現在フロントエンド未使用

## API Specification（設計原則）
本APIは Single Source of Truth (SSOT) として設計されている。

### 原則
- フロントエンドは APIのデータを信頼する
- 不整合は フロントで吸収しない
- 契約違反は API側を修正する

### Data Conventions（確定）
- JSONキー: kebab-case
- Primary Key: id
- Status:
    - Walks: "active", "completed"
- 数値フィールドは nil 不可（必ず数値）
- Timestamp: ISO-8601 UTC

## 実装上の重要な学び（今回の核心）
### 問題の本質

- 単なる「API形式不統一」ではなく  
  非同期イベントと状態更新の競合

### 具体例：
1. start-walk 成功 → UI が「ウォーキング中」に遷移
2. 直後に load-walks が走る
3. 古い walks が後から返り、state を上書き
4. UI が元に戻る（巻き戻り）

### 対応方針
- API を SSOT として正規化
- re-frame の event 定義を単一責務に整理
- walk-started と walks-loaded の役割を明確化
- 二重 reg-event を排除

## 既知の問題（2025-12時点）
- ウォーキング中UIで steps / distance を操作すると例外が出る
- optimistic update を未導入のため、一部操作で体感遅延あり
- APIレスポンス順序に依存する箇所が残存

※ これらは 別PRで段階的に対応予定

## このドキュメントの位置づけ

- 本メモは 「完成仕様書」ではない
- 設計判断・学び・現状を共有するための 引き継ぎ用資料

### 次のアクション（推奨）

- steps / distance 入力の安全化

- optimistic update 方針の整理

- APIレスポンスのイベント設計テンプレ化

- フロントエンド状態遷移図の作成

