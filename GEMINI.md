# shio-walk プロジェクト・コンテキスト (GEMINI.md)

## プロジェクト概要
ウォーキングの歩数・距離を管理し、条件達成に応じて報酬（画像・音声）を解放するフルスタック・アプリケーションです。

- **Backend**: Clojure (Ring, Compojure, PostgreSQL, Buddy/JWT)
- **Frontend**: ClojureScript (Reagent, Re-frame, shadow-cljs)

## 核心的マンデート (Project Specific)
本プロジェクトでは以下の設計原則を**絶対的な優先事項**とします。

### 1. API は Single Source of Truth (SSOT) である
- フロントエンドでのデータ補正・型変換・デフォルト値補完（`or val 0` など）は原則禁止です。
- データ不整合（キー名の違い、値の欠落、期待しない `nil` など）が発生した場合、**必ずバックエンド API 実装側を修正**してください。
- フロントエンドは「API から受け取ったデータをそのまま信頼して描画する」責務に徹します。

### 2. データ変換規約 (Data Conventions)
- **JSON キー**: すべて `kebab-case` に統一（例: `:total-steps`）。`snake_case` や `camelCase` は使用不可。
- **数値フィールド**: `steps` や `distance-meters` は `nil` を許容せず、初期値または最小値として必ず数値を返します。
- **タイムスタンプ**: ISO-8601 形式の UTC 文字列を使用します。
- **ステータス値**: 小文字の文字列で統一（例: `"active"`, `"completed"`）。

### 3. フロントエンド (re-frame) 設計指針
- **状態の導出 (Derived State)**: `app-db` に API レスポンスをそのまま複製したり、冗長な状態を持たせないでください。正規化されたデータから `subs` (subscriptions) を用いて必要な状態を算出します。
- **UI 巻き戻りへの警戒**: optimistic update を行う際は、直後の API レスポンス（`load-walks` 等）による状態の上書きと競合しないよう、イベントの発火順序と責務を厳密に管理してください。
- **イベント名の重複禁止**: `reg-event-db` 等で同名のイベントを定義すると深刻な状態不整合を招きます。イベント ID はグローバルに一意であることを保証してください。

### 4. 内部データと外部データのキー変換 (The "Underscore/Hyphen" Trap)
- **DB層**: `next.jdbc` が返すマップのキーは、DBカラム名に従い `snake_case` (アンダースコア) です（例: `:walks/distance_meters`）。
- **APIハンドラ層**: DBから取得したマップをそのまま API レスポンスに含めず、規約である `kebab-case` (ハイフン) に明示的に変換してください（例: `:distance-meters`）。
- **注意**: ハンドラ内で DB の戻り値にアクセスする際は、ハイフン付きキーで `nil` を取得していないか、常にアンダースコアとの不整合を確認してください。
- **参照**: 詳細は `README.md` の「開発上の注意」および `docs/debug-notes.md` の「修正履歴（2026-03-06）」を参照。

## 開発ワークフロー
### バックエンド (backend/)
- **DB 操作**: `next.jdbc` を使用。マイグレーションは `clj -M:migrate` で実行。
- **設定**: `backend/src/shio_walk/config.clj` および環境変数を参照。

### フロントエンド (frontend/)
- **ビルド**: `shadow-cljs` を使用。
- **ディレクトリ構造**: `views/`, `events.cljs`, `subs.cljs`, `api.cljs` に責務を分離。

## 重要ドキュメント
- `README.md`: プロジェクト全体の概要とセットアップ。
- `docs/api.md`: API 仕様の詳細（v2.0 準拠）。
- `docs/debug-notes.md`: 過去の重大な不具合と設計判断の記録。デバッグ前に必ず参照してください。

## 現在の注力事項
- PWA 化によるホーム画面追加およびオフライン動作の安定化。
- スマートフォンセンサー（DeviceMotion, Geolocation）の iOS Safari 互換性確保。
- バックグラウンド動作を考慮した定期的なデータ同期（3分間隔）と画面復帰時の即時同期。
- 完了ボタン押下時の自動保存統合によるデータ整合性の保証。
- 統計パネルのモバイル最適化と履歴表示の折りたたみ機能による UI/UX 改善。
