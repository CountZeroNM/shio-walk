# CLAUDE.md — shio-walk

ウォーキングの歩数・距離を記録し、報酬を解放するアプリ (依頼者: shio さん)。
Clojure (Ring/Compojure/next.jdbc/PostgreSQL) + ClojureScript (re-frame/shadow-cljs、PWA)。

## 最初に読むもの
- `docs/STATUS.md` — 今の状況・既知の問題・次の作業 (ここが正)
- `docs/api.md` — API の約束
- `docs/debug-notes.md` — 過去の大きな不具合と設計の方針。画面の状態の不具合を直す前に必ず読む

## 動かし方・確認
```bash
bb dev                                            # 下の DB・バックエンド・画面をまとめて起動 (bb.edn。bb tasks で一覧)
docker compose up -d                              # DB (コンテナ shio-walk-db)
cd backend && clj -M:migrate migrate && ./run.sh  # バックエンド :3000
cd frontend && npx shadow-cljs watch app          # 画面 :8080 (/api/ は :3000 へ転送)
./scripts/test-backend.sh                         # API のテスト (DB shio_walk_test。開発用の DB は触らない)
cd frontend && npm test                           # 画面のイベントのテスト (node)
```
- 画面の実機確認 (センサー・GPS) は Claude Code からはできないので、ユーザーに頼む。手順は `docs/SETUP.md`。
- 開発用の DB (`shio_walk`) にはユーザーの実データがある。消す・書き換える操作の前に確認する。試すときは `shio_walk_test` や `CREATE DATABASE ... TEMPLATE shio_walk` の複製を使う。
- `pkill -f shadow-cljs` のように自分のコマンド行にも当たる名前で止めない (シェルごと止まる)。`pgrep -af "[s]hadow"` で PID を見て止める。

## 方針
- **API が唯一の正しいデータ源**。応答の形・値がおかしければ画面で吸収せず API を直す。
- API の JSON は kebab-case・ID は文字列・数値は null にしない・時刻は ISO-8601 の UTC。DB の行 (snake_case) からの変換は `backend/src/shio_walk/convert.clj` の 1 か所で行う。
- 更新系の SQL には必ず `user_id = ?` を入れる (他人のデータを触れないように)。
- re-frame: 同じイベント ID を二重に登録しない。保持する状態と導出する状態を分ける。計測中の値は手元 (センサー) が新しく、サーバーの一覧で上書きしない。
- 時刻・数値・単位の推測をしない (距離は常にメートル)。
- 機能を足したら、テストを足し、`docs/STATUS.md` と (API なら) `docs/api.md` を更新する。
- 返答は日本語で、結論から。push・マージ・公開はユーザーに確認してから。
- 証明書・秘密鍵・トークンをコミットしない (`.gitignore` 済み。未追跡の `cleanup_walks.sh` にはトークンが入っている)。
