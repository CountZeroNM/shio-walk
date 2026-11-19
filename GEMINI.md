# shio-walk プロジェクト・コンテキスト (GEMINI.md)

このプロジェクトの指示は **CLAUDE.md** にまとめてあります (Gemini でも同じ内容に従ってください)。最初に CLAUDE.md と docs/STATUS.md を読んでください。

要点:
- バックエンド API が唯一の正しいデータ源 (SSOT)。不整合は画面で吸収せず API を直す。
- API の JSON は kebab-case・時刻は ISO-8601 の UTC・距離はメートル。DB の行からの変換は backend/src/shio_walk/convert.clj に集める。
- 更新系の SQL には user_id の条件を入れる。
- re-frame のイベント ID は一意。計測中の値をサーバーの古い一覧で上書きしない。
- テスト: ./scripts/test-backend.sh (DB shio_walk_test)、cd frontend && npm test。
