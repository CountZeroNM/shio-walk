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

## 経緯 (要約。詳しくは docs/STATUS.md・docs/debug-notes.md)
| 時期 | 内容 |
|---|---|
| 2025-12 | Gemini で開発開始。バックエンド API と re-frame の画面。「開始で画面が戻る」状態の競合を解決 |
| 2026-03 | `feature/pwa-sensor`: PWA 化・加速度の歩数・GPS の距離。iPhone Safari で試したが「精度や制約が多く微妙」 |
| 2026-11-19 | Claude Code に移行 (~/shio-walk → ~/code/shio-walk)。main に取り込み、土台を修正 (他人のウォークを書き換えられた・センサー再開で記録が消える・migratus の書式・ISO 時刻・IP の直書き・SW のキャッシュ優先など)。テスト追加。LAN 用の秘密鍵を全ブランチの履歴から削除して強制 push。**Android を先に対象にする**方針 (開発者も shio さんも Android を持つ) |
| 2026-11-26 | `bb dev` を追加。Android Chrome から Wi-Fi で開けた。歩数の判定を作り直し、GPS の揺れを無視、確認用の表示を追加。**屋外で歩数・距離とも動いた** |

2026-11-26 までの shio-walk の会話は ~/code/sted で起動したセッションで行ったため、会話ログは `~/mdlog/claude_code/sted_polysted/` に入っている。

## 設計
- **構成**: バックエンド `backend/src/shio_walk/` (routes・auth・walks・rewards・db・convert・middleware・config)。画面 `frontend/src/shio_walk/` (api・events・subs・db・sensors・views)。DB は Docker の PostgreSQL 15 (`shio-walk-db`)、マイグレーションは `backend/resources/migrations/` (migratus、`NNN-名前.up.sql`、文は `--;;` で区切る)。
- **データ**: users・walks・rewards・user_rewards・user_stats。walks.status は `active` / `completed`。進行中のウォークは 1 人 1 件 (部分一意インデックス `uniq_walks_one_active_per_user`)。時刻の列は TIMESTAMPTZ。
- **計測の値**: 表示・保存する値 = 起点 (センサー開始時のウォークの値) + センサーを動かしてからの分。再読み込みや手入力のあとでも 0 から数え直さない。保存は 3 分ごと・画面が隠れたとき (visibilitychange)・保存ボタン。完了は最終値つきの 1 回の通信 (サーバーで 1 トランザクション、報酬の解放も同じ中)。
- **歩数** (`sensors/step-update`、純粋関数): DeviceMotion の |a| から、ゆっくり追う平均 (重力の分) を引いた揺れが 1.0 m/s² を越えたら 1 歩、0 を下回るまで次を数えない、歩の間隔 300 ms 以上。
- **距離** (`sensors/gps-update`、純粋関数): 誤差 30 m 以上の点は捨てる。前に数えた点から「誤差と 10 m の大きい方」より離れたときだけ足す (止まっているときの揺れで増えない)。
- **確認用の表示**: 計測中の画面の小さな 2 行 (加速度の回/秒と揺れ・GPS の誤差と前の点からの距離)。実機で数値を見て、しきい値を決めるため。
- **画面を消さない**: Wake Lock (状態の表示に「画面点灯」)、ポケットモード (黒い画面、1 秒長押しで戻る)。PWA は画面が消えるとセンサーも GPS も止まるため。
- **開発環境**: Chromebook の Linux (Crostini)。開発サーバー :8080 が画面を出し `/api/` を :3000 へ転送 (同じ Origin)。Chromebook からは `http://penguin.linux.test:8080`。スマホからは Wi-Fi で `http://<ChromeOS の Wi-Fi の IP>:8080` (Linux の eth0 の 100.115.92.x は外から見えない)。それには ChromeOS のポート転送 8080・Android の Chrome のフラグ (insecure origin as secure)・Chrome の「付近のデバイス」権限が要る (docs/SETUP.md の A')。
- **開発用のログイン**: `test@example.com` / `password123` (テスト用スクリプトと同じ)。

## 未解決の課題
- **長めの計測での確認がまだ**: 500 m〜1 km 歩いて実際の歩数・地図の距離と比べる、30 分での電池の減り、ポケットに入れたままの取りこぼし。結果しだいで次を決める
- **PWA の限界**: 画面ロック・バックグラウンドで計測が止まる。足りなければ Capacitor で Android アプリにし、端末の歩数計 (`TYPE_STEP_COUNTER`) か Health Connect を使う (APK は自分で入れられる)。先にこの Chromebook で Android のビルド環境が組めるか確かめる
- **距離の癖**: 屋内では GPS の誤差が大きく距離が増えない。細かく曲がる道は短めに出る
- **歩数の癖**: 重力を含まない加速度しか来ない端末では、1 歩を 2 回に数えるおそれ (Android Chrome は重力込みが来るので今は問題なし)
- **shio さんにどう使ってもらうか未定**: 今は開発用の PC からしか動かない。常に使うには https のある公開先 (サーバー・DB・JWT_SECRET の設定) が要る
- 確認用の表示は、しきい値が決まったら消すか小さく畳む
- re-frame のイベントの中で API・localStorage・タイマーを直接扱っている (`http-fx` は依存にあるが未使用)
- 報酬の画像・音声がまだ無い
- iPhone は後回し (Safari では動くが手応えが微妙だった)
- 消した秘密鍵は GitHub に古いコミットの ID で直接たどれば残る。その証明書は使わない。古い clone (antiX の PC など) は clone し直す
