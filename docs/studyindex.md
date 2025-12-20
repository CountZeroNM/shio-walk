# Shio-Walk アプリケーション学習ガイド

このドキュメントは、`shio-walk` アプリケーションのコードリーディングを通じて、Clojure/ClojureScriptおよび関連フレームワークの理解を深めるための目次です。

## 1. フロントエンド編 (ClojureScript, Reagent, Re-frame)

UIの描画と状態管理を担当するフロントエンドから読み始めます。Re-frameの単方向データフローを意識すると理解が深まります。

### 1.1. アプリケーションの起動と入口 (`core.cljs`)

-   `frontend/src/shio_walk/core.cljs`
    -   **役割**: フロントエンドアプリケーションの起点(エントリーポイント)です。ReactコンポーネントをHTMLの`#app`要素にマウント（描画）し、re-frameの初期化イベントを呼び出します。React 18の作法に沿った初期化方法が使われています。

### 1.2. UIコンポーネント (Reagent)

Reagentは、ClojureScriptでReactコンポーネントを記述するためのライブラリです。Hiccupという、ベクタでHTML構造を表現する記法が使われます。

-   `frontend/src/shio_walk/views/main.cljs`
    -   **役割**: アプリケーションの最上位コンポーネント。現在のページ状態 (`:current-page`) に応じて、ログイン画面とダッシュボード画面のどちらを表示するかを切り替えます。
-   `frontend/src/shio_walk/views/login.cljs`
    -   **役割**: ログイン・新規登録フォームのUIを定義しています。入力欄とボタンが配置され、それぞれがre-frameイベントを呼び出します。
-   `frontend/src/shio_walk/views/dashboard.cljs`
    -   **役割**: ログイン後のメイン画面であるダッシュボードのUIを定義しています。統計パネル、ウォーク操作、履歴など、複数のサブコンポーネントから構成されています。

### 1.3. 状態管理 (Re-frame)

Re-frameは、ClojureScriptアプリケーションの状態管理を行うためのフレームワークです。

-   `frontend/src/shio_walk/db.cljs`
    -   **役割**: アプリケーションの初期状態を定義します。`default-db`というマップに、`current-page`や`current-walk`などの初期値が設定されています。

-   `frontend/src/shio_walk/subs.cljs` (Subscriptions)
    -   **役割**: 状態(db)の一部をUIコンポーネントに提供するための「購読」を定義します。UIコンポーネントはここで定義されたサブスクリプションを通じて、状態の変更を検知し再描画されます。

-   `frontend/src/shio_walk/events.cljs` (Events)
    -   **役割**: アプリケーションの心臓部です。UIやAPIからのイベントを処理し、状態(db)を更新したり、副作用（API呼び出しなど）を実行したりします。`reg-event-db`（純粋な状態更新）と`reg-event-fx`（副作用を伴う処理）の使い分けがポイントです。

### 1.4. API通信

-   `frontend/src/shio_walk/api.cljs`
    -   **役割**: バックエンドAPIとの通信を抽象化する関数群を定義しています。`cljs-ajax`ライブラリを使い、各エンドポイントへのリクエストを簡単に行えるようにしています。

---

## 2. バックエンド編 (Clojure)

HTTPリクエストを受け取り、データベースとやり取りをして、JSONレスポンスを返すバックエンドです。

### 2.1. ルーティングとサーバー起動

-   `backend/src/shio_walk/core.clj`
    -   **役割**: バックエンドサーバーの起動処理が書かれています。JettyというWebサーバーを起動します。
-   `backend/src/shio_walk/routes.clj`
    -   **役割**: APIのエンドポイント（URL）と、それを処理するハンドラ関数を紐づけるルーティングを定義しています。`compojure`というライブラリが使われています。

### 2.2. ハンドラ (リクエスト処理)

-   `backend/src/shio_walk/walks/handlers.clj`
    -   **役割**: ウォーク（`/api/walks/...`）関連のリクエストを処理する関数群です。DBからデータを取得し、フロントエンドに返すJSONレスポンスを構築します。
-   `backend/src/shio_walk/rewards/handlers.clj`
    -   **役割**: 報酬（`/api/rewards/...`）関連のリクエストを処理します。
-   `backend/src/shio_walk/auth/handlers.clj`
    -   **役割**: 認証（`/api/auth/...`）関連のリクエストを処理します。

### 2.3. データベース操作

-   `backend/src/shio_walk/db.clj`
    -   **役割**: データベースとのやり取りをすべて担当します。SQLクエリを記述し、データの取得・作成・更新・削除(CRUD)を行う関数が定義されています。`next.jdbc`というライブラリが使われています。

### 2.4. ミドルウェアと設定

-   `backend/src/shio_walk/middleware.clj`
    -   **役割**: リクエストをハンドラが受け取る前、またはレスポンスを返す後に行う共通処理（JWTトークンの検証など）を定義します。
-   `backend/src/shio_walk/config.clj`
    -   **役割**: データベース接続情報などの設定値を管理します。

---

## 3. 全体構成

フロントエンドとバックエンドがどのように連携し、全体としてアプリケーションがどう構成されているかを示します。

-   `docker-compose.yml`
    -   **役割**: 開発環境（この場合はPostgreSQLデータベース）をDockerコンテナとして簡単に起動するための定義ファイルです。
-   `backend/deps.edn`
    -   **役割**: バックエンド(Clojure)が依存するライブラリとそのバージョンを定義します。
-   `frontend/shadow-cljs.edn`
    -   **役割**: フロントエンド(ClojureScript)のビルド設定と依存ライブラリを定義します。ClojureScriptコードをJavaScriptにコンパイルする方法などが指定されています。
-   `frontend/package.json`
    -   **役割**: `shadow-cljs`自体や、`react`, `react-dom`などのJavaScriptライブラリの依存関係を定義します。
-   `README.md`
    -   **役割**: プロジェクト全体の概要、使い方、そしてAPI仕様などが記述されています。

この目次を上から順に読んでいくことで、フロントエンドのUIから始まり、re-frameの状態管理、API通信、そしてバックエンドのAPIサーバー、データベースへと、データの流れを追いながらアプリケーション全体を理解できるはずです。
