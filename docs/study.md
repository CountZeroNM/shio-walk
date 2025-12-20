# shio-walk 学習記録

このドキュメントは、`shio-walk` アプリケーションのコードリーディングを通じて学んだ内容を記録します。

---

## `core.cljs` の役割とReact 18対応

### Q1: `core.cljs` の役割は？

**質問:**
`core.cljs` はブラウザで呼ばれるとまず一番に呼ばれ、後のものを立ち上げていく役割という認識で合っているか？

**回答:**
はい、その認識で完全に正しいです。`core.cljs` はフロントエンドアプリケーション全体の**起動係（エントリーポイント）**です。

`shadow-cljs.edn` の設定によって、ブラウザがJavaScriptを読み込むと、最初にこのファイルの `init` 関数が呼び出されます。`init` 関数は、re-frameの状態(`app-db`)を初期化し、`mount-root` 関数を呼び出してUIの描画を開始することで、アプリケーション全体を立ち上げています。

---

### Q2: Hot Reload用のコードと `^` の意味は？

**質問:**
`core.cljs` 内の下記コードと、`^`という記号の意味を解説してほしい。
```clojure
;; Hot Reload 用
(defn ^:dev/after-load reload []
  (mount-root))
```

**回答:**
これは開発効率を上げる**ホットリロード**機能のためのコードです。

1.  **`^`（ハット/キャレット）の意味:**
    これはClojure/ClojureScriptの**メタデータ (Metadata)** を付与するための記法です。メタデータは、コードのロジック自体には影響しない「コードについての付加情報」で、コンパイラや各種ツールへの指示として使われます。コードに「付箋」を貼るようなイメージです。

2.  **`^:dev/after-load` の意味:**
    `^` を使って `:dev/after-load` というメタデータを `reload` 関数に付与しています。これは `shadow-cljs` というビルドツールに対する特殊な命令で、「（ホットリロードで）コードの再読み込みが完了した**後で**この関数を実行してください」という意味になります。

3.  **全体の動作:**
    開発者がファイルを保存すると、`shadow-cljs`が変更を検知してブラウザに新しいコードを注入します。その後、この `^:dev/after-load` という目印（メタデータ）がついた `reload` 関数が自動的に呼び出され、UIが再描画されるため、開発者はページをリロードすることなく即座に変更を確認できます。

---

### Q3: `core.cljs` のReact 18関連の警告の意味は？

**質問:**
`core.cljs:11 Warning: unmountComponentAtNode is deprecated...` と `core.cljs:12 Warning: ReactDOM.render is no longer supported in React 18...` という警告について解説してほしい。

**回答:**
これらの警告は、アプリケーションの起動方法が古いReact 17の形式であり、現在使用しているReact 18では非推奨である、というReactからのメッセージです。

-   **原因:** `reagent.dom` を使い `rdom/render` でUIを描画していました。これは古い方法です。
-   **影響:** この古い方法を使っていると、Reactは自動的に「React 17互換モード」で動作します。これにより、React 18の新しい機能が使えず、稀にUIが更新されないといった深刻なバグの原因となる可能性がありました。

**解決策（ユーザーにより実施済み）:**
この問題は、`core.cljs`を以下のように修正することで解決されました。

-   `reagent.dom` の代わりに `reagent.dom.client` を使用。
-   `create-root` で一度だけ描画の起点となる `root` を作成。
-   `.render root [views/main-panel]` のように、作成した `root` に対して描画を行う。

この修正により、React 18の正式なAPIを利用する形となり、警告は解消されました。

**修正後の `core.cljs`:**
```clojure
(ns shio-walk.core
  (:require
   [reagent.dom.client :as rdom]
   [re-frame.core :as rf]
   ...))

;; React 18 root は一度だけ生成する
(defonce root
  (rdom/create-root
    (.getElementById js/document "app")))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (rdom/render root [views/main-panel]))
...
```

---

## `frontend/src/shio_walk/views/main.cljs` のコードリーディング

このファイルは、アプリケーションのメインとなるUIコンポーネントを定義しています。`re-frame` というフレームワークを使い、現在の状態に応じて表示するページを切り替える役割を担っています。

### 1. `ns shio-walk.views.main`

*   ClojureScriptのコードがどの「名前空間（namespace）」に属するかを定義しています。JavaのパッケージやJavaScriptのモジュールに似た概念です。
*   `(:require ...)` の部分で、このファイルが依存する他のライブラリやコンポーネントを読み込んでいます。
    *   `re-frame.core :as rf`: `re-frame`ライブラリのコア機能を `rf` という別名で使えるようにしています。`re-frame`はClojureScriptのUI構築で人気のあるフレームワークです。
    *   `shio-walk.views.login :as login`: ログイン画面に関するコンポーネントを `login` という別名で読み込んでいます。
    *   `shio-walk.views.dashboard :as dashboard`: ダッシュボード画面のコンポーネントを `dashboard` という別名で読み込んでいます。

### 2. `defn main-panel []`

*   `main-panel` という名前のUIコンポーネント（関数）を定義しています。Reagent（`re-frame`が内部で使用）では、UIコンポーネントは多くの場合、単なる関数として定義されます。
*   この関数は、HTMLの構造を表すデータ（Hiccupと呼ばれるClojureScriptのベクター）を返します。

### 3. `let [...]`

*   `let` は、ローカル変数（束縛）を定義するために使います。
*   `current-page @(rf/subscribe [:current-page])`: `re-frame`の「サブスクリプション（subscription）」を使っています。
    *   `rf/subscribe [:current-page]` は、アプリケーションの状態（DB）から `:current-page` という値を取り出す予約をします。
    *   `@` は `deref` の略で、予約した値が更新されるたびに、その最新の値を取り出します。これにより、`current-page` の値が変わると、このコンポーネントが自動的に再描画されます。
*   `error @(rf/subscribe [:error])`: 同様に、アプリケーション全体の状態からエラーメッセージを取得しています。

### 4. `[:div ...]`

*   これがHiccup形式のデータです。`[:tag-name.class-name {:attribute "value"} "content"]` のように記述し、HTMLの `<div>` タグを表します。
*   `(when error ...)`: `error` 変数に値がある（`nil` や `false` でない）場合にのみ、エラーメッセージを表示する `<div>` をレンダリングします。
    *   `[:button {:on-click #(rf/dispatch [:clear-error])} "閉じる"]`: ボタンがクリックされたときに `re-frame` のイベント `:clear-error` を発行（dispatch）します。これにより、エラー状態をクリアするロジックが呼び出されます。
*   `(case current-page ...)`: `current-page` の値に応じて、表示するコンポーネントを切り替えています。
    *   `:login` なら `[login/login-page]` を表示します。
    *   `:register` なら `[login/register-page]` を表示します。
    *   `:dashboard` なら `[dashboard/dashboard-page]` を表示します。
    *   どれにも当てはまらない場合は、デフォルトとして `[login/login-page]` を表示します。
    *   `[component-name]` という角括弧でコンポーネント関数を囲むことで、ReagentがそれをUIコンポーネントとして解釈し、描画します。

### まとめ

この `main.cljs` は、アプリケーションの「ルーター」のような役割を果たしています。`re-frame` の状態管理とサブスクリプションを利用して、現在のページ状態 (`:current-page`) を監視し、その値に基づいて適切なビュー（ログイン、登録、またはダッシュボード）を描画する、リアクティブなコンポーネントです。

---

### 補足: `re-frame` のサブスクリプション (`subscribe`) とは？

`re-frame`における「サブスクリプション」(`subscribe`)は、**アプリケーションの状態(DB)の特定の部分をリアクティブに(自動的に)コンポーネントに届ける仕組み**です。

`main.cljs`のコードを例に見てみましょう。

```clojure
(let [current-page @(rf/subscribe [:current-page])]
  ...
  (case current-page
    :login [login/login-page]
    ...))
```

#### ポイント

1.  **データの予約 (`rf/subscribe`)**:
    *   `rf/subscribe [:current-page]` は、「アプリケーション全体の状態の中から `:current-page` というデータに関心があります」と `re-frame` に**予約**を入れる行為です。
    *   この時点ではまだ実際の値 (`:login` や `:dashboard` など) を直接取り出しません。「これからこの値を使います」という宣言だと考えてください。

2.  **値の取得と自動更新 (`@`)**:
    *   `@` (アットマーク) は、予約したサブスクリプションから**現在の値を取り出す**ための記号です。 (Clojureの `deref` という機能のシンタックスシュガーです)
    *   ここが最も重要な点ですが、`@` を付けて値を取得すると、**その値が将来変更されたときに、このコンポーネント全体が自動的に再描画されます**。

#### 身近な例：YouTubeの「チャンネル登録」

この仕組みは、YouTubeの「チャンネル登録」に非常によく似ています。

*   **`rf/subscribe [:current-page]`**: あなたが気になるYouTubeチャンネルを**「チャンネル登録」**する行為です。
*   **`@(rf/subscribe ...)`**: 登録したチャンネルに**新しい動画が投稿されるたびに、あなたの通知に表示される**ことです。あなたは常に動画を探しに行く必要はなく、新しい動画が出たら自動的にお知らせが来ます。
*   **アプリケーションの状態(DB)**: YouTube全体が保持している全ての動画データです。
*   **`:current-page`**: あなたが登録した特定の「チャンネル名」です。
*   **コンポーネント**: あなた自身です。

#### まとめ

`subscribe` とは、UIコンポーネントが「このデータに関心がある」と宣言し、そのデータが変更されるたびに、UIが自動的に最新の状態に更新されるようにするための、`re-frame`の根幹となる仕組みです。これにより、開発者は「いつUIを更新するか」を自分で管理する必要がなくなり、宣言的にUIを構築できるという大きなメリットがあります。

---

## `frontend/src/shio_walk/views/login.cljs` のコードリーディング

このファイルは、ユーザーのログインと新規登録のためのUIコンポーネントを定義しています。`re-frame` を使用してアプリケーションの状態を管理し、フォーム入力とイベント処理を行っています。

### 1. `ns shio-walk.views.login`

*   `shio-walk.views.login` という名前空間を定義しています。
*   `(:require ...)` の部分で、このファイルが依存する他のライブラリやコンポーネントを読み込んでいます。
    *   `re-frame.core :as rf`: `re-frame`のコア機能を `rf` という別名で使えるようにしています。
    *   `reagent.core :as r`: Reagentのコア機能を `r` という別名で使えるようにしています。特に `r/atom` を使用するために必要です。

### 2. `login-page []` 関数

この関数はログインページのUIコンポーネントを定義しています。

*   **`let [...]` 内のローカル状態管理**:
    *   `email (r/atom "")` と `password (r/atom "")`: フォームの入力値を一時的に保持するための「リアクティブアトム」をReagentの `r/atom` で作成しています。`r/atom`は、`re-frame`の`app-db`とは異なり、コンポーネントローカルな状態を管理するために使われます。値が変更されると、そのアトムを使用しているコンポーネントのみが再レンダリングされます。
    *   `loading? @(rf/subscribe [:loading?])`: `re-frame`のサブスクリプションを利用して、アプリケーション全体の状態から `loading?`（処理中かどうか）のフラグを取得しています。これにより、ログイン処理中にボタンや入力フィールドを無効化できます。

*   **`(fn [] ...)` - Reagentのフォーム-2コンポーネント**:
    *   Reagentでは、`let` バインディングでローカルな状態（`r/atom`など）を持つコンポーネントを定義する際、`(fn [] ...)` の形式でUIのレンダリング部分をラップすることがあります。これは「フォーム-2コンポーネント」と呼ばれ、`r/atom` の変更に応じて効率的にUIを更新するためのパターンです。
    *   `[:div.container ...]`：Hiccup形式でHTMLの構造を記述しています。
    *   **ログインフォーム (`[:form {:on-submit ...}]`)**:
        *   `on-submit`: フォームが送信されたときに呼び出される関数を定義しています。
            *   `(.preventDefault e)`: フォームのデフォルトの送信動作（ページのリロード）を防ぎます。
            *   `(rf/dispatch [:login {:email @email :password @password}])`: `re-frame`のイベント `:login` を発行しています。`@email`と`@password`で `r/atom` から現在の値を取り出し、ログイン処理のためのデータとしてイベントに渡しています。
        *   **入力フィールド (`[:input ...]`)**:
            *   `type`, `placeholder`, `value`: HTMLの属性を直接設定しています。`value` には `@email` や `@password` を指定し、入力フィールドの値を `r/atom` と同期させています。
            *   `on-change`: 入力値が変更されたときに呼び出される関数です。
                *   `(reset! email (-> % .-target .-value))`: `reset!` を使って `email` アトムの値を更新しています。`(-> % .-target .-value)` はJavaScriptのイベントオブジェクトから入力値を取得するイディオムです。（例：`e.target.value`）。
            *   `disabled loading?`: `loading?` が `true` の場合、入力フィールドを無効化します。
        *   **送信ボタン (`[:button ...]`)**:
            *   `type "submit"`: フォームの送信ボタンであることを示します。
            *   `disabled loading?`: `loading?` が `true` の場合、ボタンを無効化します。
            *   `(if loading? "ログイン中..." "ログイン")`: `loading?` の状態に応じてボタンのテキストを切り替えます。
        *   **新規登録へのリンク**:
            *   `on-click #(rf/dispatch [:set-page :register])`: リンクがクリックされたときに `re-frame` のイベント `:set-page` を発行し、現在のページを `:register` に切り替えるよう指示しています。これにより `main.cljs` の `main-panel` が再レンダリングされ、登録ページが表示されます。

### 3. `register-page []` 関数

この関数は新規登録ページのUIコンポーネントを定義しており、`login-page` と同様の構造と概念を使用しています。

*   **`let [...]` 内のローカル状態管理**:
    *   `email`, `username`, `password`, `password-confirm` (`r/atom ""`)：新規登録フォームの入力値を保持する `r/atom` です。
    *   `loading? @(rf/subscribe [:loading?])`: ログインページと同様に、処理中の状態を取得します。

*   **`(fn [] ...)` - Reagentのフォーム-2コンポーネント**:
    *   **新規登録フォーム (`[:form {:on-submit ...}]`)**:
        *   `on-submit`:
            *   `(if (= @password @password-confirm) ...)`: パスワードと確認用パスワードが一致するかどうかをチェックしています。
            *   一致する場合: `(rf/dispatch [:register {:email ... :username ... :password ...}])` イベントを発行し、登録処理を開始します。
            *   一致しない場合: `(rf/dispatch [:set-error "パスワードが一致しません"])` イベントを発行し、エラーメッセージを表示させます。
        *   入力フィールドは `login-page` と同様に `r/atom` と同期しています。
        *   **送信ボタン**: `loading?` の状態に応じてテキストと `disabled` 属性を切り替えます。
        *   **ログインへのリンク**:
            *   `on-click #(rf/dispatch [:set-page :login])`: リンクがクリックされたときに `re-frame` のイベント `:set-page` を発行し、ログインページに切り替えます。

### まとめ

`login.cljs` は、Reagentとre-frameを組み合わせて、ユーザー認証に関連するフォームを構築する典型的なパターンを示しています。
*   `r/atom` を使ってコンポーネントローカルなフォームの状態を管理。
*   `re-frame` のサブスクリプション (`rf/subscribe`) を使ってグローバルな状態（例: `loading?`）を監視。
*   `re-frame` のイベント (`rf/dispatch`) を使ってユーザーの操作（フォーム送信、ページ遷移）をアプリケーションの状態変更として処理。
*   Hiccup記法でUIを宣言的に記述し、`(fn [] ...)` のフォーム-2コンポーネントパターンで効率的な再レンダリングを実現。

---

## `frontend/src/shio_walk/views/dashboard.cljs` のコードリーディング

このファイルは、ユーザーがログインした後に表示されるダッシュボードページのUIコンポーネント群を定義しています。`re-frame` を使ってアプリケーションの状態（ユーザー情報、統計、ウォーキング状況、履歴、報酬など）をリアクティブに表示し、ユーザーの操作に応じてイベントを発行します。

### 1. `ns shio-walk.views.dashboard`

*   `shio-walk.views.dashboard` という名前空間を定義しています。
*   `(:require ...)` の部分で、このファイルが依存する他のライブラリやコンポーネントを読み込んでいます。
    *   `re-frame.core :as rf`: `re-frame` のコア機能を `rf` という別名で使えるようにしています。
    *   `reagent.core :as r`: Reagent のコア機能を `r` という別名で使えるようにしています（このファイルでは `r/atom` は直接使われていませんが、慣例としてrequireされています）。

### 2. `header []` 関数

アプリケーションのヘッダー部分を定義するコンポーネントです。

*   **`let [user @(rf/subscribe [:user])]`**: `re-frame` のサブスクリプションで、アプリケーション全体の状態から現在ログインしているユーザー情報を取得しています。
*   `[:h1 "ShioWalk"]`: アプリケーション名を表示。
*   `[:p (str "ようこそ、" (:username user) "さん")]`: ユーザー名を表示しています。`(:username user)` はClojure(Script)のキーワードアクセスで、`user` マップから `:username` の値を取り出します。
*   `[:button {:on-click #(rf/dispatch [:logout])} "ログアウト"]`: ログアウトボタンです。クリックされると `:logout` イベントが `re-frame` にディスパッチされ、ログアウト処理が開始されます。

### 3. `stats-panel []` 関数

ユーザーのウォーキング統計情報を表示するコンポーネントです。

*   **`let [stats @(rf/subscribe [:stats])]`**: `re-frame` のサブスクリプションで、アプリケーション全体の状態から統計情報（累計歩数、距離など）を取得しています。
*   `[:h2 "統計情報"]`: セクションタイトル。
*   `[:div.stats-grid ...]`：統計カードを並べるためのグリッドレイアウト。
    *   各 `[:div.stat-card ...]` は個別の統計項目（累計歩数、距離、ウォーク回数、獲得報酬）を表示します。
    *   `or (:total-steps stats) 0)`: `stats` マップに `:total-steps` がない場合（nilの場合）は `0` を表示するClojure(Script)のイディオムです。
    *   `(.toFixed (or (:total-distance-km stats) 0) 2)`: 距離を小数点以下2桁にフォーマットしています。JavaScriptの `toFixed` メソッドを呼び出しています。

### 4. `walk-control []` 関数

ウォーキングの開始、更新、完了を制御するコンポーネントです。

*   **`let [current-walk @(rf/subscribe [:current-walk]) loading? @(rf/subscribe [:loading?])]`**: 現在進行中のウォーキング情報と、処理中のフラグを取得しています。
*   `(if current-walk ...)`: `current-walk` が存在する場合（ウォーキング中の場合）と、しない場合で表示を切り替えています。
    *   **ウォーキング中の場合**:
        *   `[:p ... "ウォーキング中..."]`: 進行中であることを示すメッセージ。
        *   **歩数入力フィールド**:
            *   `type "number"`, `value (:steps current-walk)`: 現在の歩数を表示。
            *   `on-change #(rf/dispatch [:update-walk ...])`: 入力値が変更されると `:update-walk` イベントをディスパッチします。
                *   `js/parseInt (-> % .-target .-value))`: 入力値を整数に変換。
        *   **距離入力フィールド**:
            *   `type "number"`, `step "0.01"`, `value (.toFixed (/ (:distance-meters current-walk) 1000) 2)`: 現在の距離をkm単位で表示し、小数点以下2桁にフォーマット。
            *   `on-change #(rf/dispatch [:update-walk ...])`: 入力値が変更されると `:update-walk` イベントをディスパッチします。
                *   `js/parseFloat (-> % .-target .-value))`: 入力値を浮動小数点数に変換。
        *   **「更新」ボタン**: クリックされると現在の歩数と距離で `:update-walk` イベントをディスパッチ。
        *   **「完了」ボタン**: クリックされると `:complete-walk` イベントをディスパッチし、ウォーキングを完了します。
        *   `disabled loading?`: `loading?` が `true` の場合、ボタンや入力フィールドを無効化します。
    *   **ウォーキング中でない場合**:
        *   `[:p "ウォーキングを開始しましょう！"]`: 開始を促すメッセージ。
        *   `[:button {:on-click #(rf/dispatch [:start-walk])} "ウォーキング開始"]`: クリックされると `:start-walk` イベントをディスパッチし、新しいウォーキングを開始します。

### 5. `walks-history []` 関数

過去のウォーキング履歴を表示するコンポーネントです。

*   **`let [walks @(rf/subscribe [:walks])]`**: `re-frame` のサブスクリプションで、アプリケーション全体の状態からウォーキング履歴のリストを取得しています。
*   `(if (empty? walks) ...)`: 履歴がない場合はメッセージを表示。
*   `(into [:div] (for [walk (take 10 walks)] ...))`: 履歴がある場合、`walks` の最初の10件をループ処理 (`for`) して表示します。`into [:div]` は、`for` が返すシーケンスを `div` の子要素として結合します。
    *   各 `walk` は、完了ステータス、歩数、距離、開始時刻を表示するカード形式です。
    *   `(:status walk)` の値によって、表示内容やスタイル（左のボーダー色、アイコンなど）を動的に変更しています。
    *   `(.toFixed (/ (:distance-meters walk) 1000) 2)`: 距離をkmに変換し、小数点以下2桁にフォーマット。
    *   `[:div {:key (:id walk) ...}]`: Reagent/Reactのリストレンダリングでは、パフォーマンス最適化のために一意の `key` 属性を各項目に与えるのがベストプラクティスです。

### 6. `rewards-panel []` 関数

獲得可能な報酬と獲得済みの報酬を表示するコンポーネントです。

*   **`let [rewards @(rf/subscribe [:rewards]) unlocked-rewards @(rf/subscribe [:unlocked-rewards]) unlocked-ids (set (map :id unlocked-rewards))]`**:
    *   `rewards`: すべての報酬のリストを取得。
    *   `unlocked-rewards`: ユーザーが獲得済みの報酬のリストを取得。
    *   `unlocked-ids (set (map :id unlocked-rewards))`: 獲得済みの報酬の `id` をセット形式で保持します。これにより、ある報酬が獲得済みかどうかを効率的にチェックできます。
*   `(if (empty? rewards) ...)`: 報酬データがない場合は読み込み中メッセージを表示。
*   `(into [:div {:style {...}}] (for [reward rewards] ...))`: すべての報酬をループ処理 (`for`) して表示します。
    *   `unlocked? (contains? unlocked-ids (:id reward))`: 現在の `reward` が `unlocked-ids` セットに含まれるかどうかで、獲得済みかをチェック。
    *   報酬のタイトル、達成条件（歩数または距離）、説明を表示。
    *   獲得済みの場合 (`unlocked?` が `true` の場合)、背景色やボーダーの色を変更し、"🎉" アイコンを表示します。
    *   `(:threshold-type reward)` の値によって、達成条件の表示を「歩数」か「km」に切り替えています。

### 7. `dashboard-page []` 関数

ダッシュボードページ全体のレイアウトを定義する最上位コンポーネントです。

*   `[:div [header] [stats-panel] [walk-control] [walks-history] [rewards-panel]]`: これまでに定義した各サブコンポーネントを順番に呼び出して配置しています。`[subcomponent-name]` の形式で他のコンポーネントを呼び出すことで、階層的なUIが構築されます。

### まとめ

`dashboard.cljs` は、`re-frame` の強力な状態管理と `Reagent` の宣言的なUI構築能力を最大限に活用し、複雑な情報を分かりやすく提示し、ユーザーとのインタラクションを処理するダッシュボードを構築しています。複数のサブコンポーネントに分割することで、コードの可読性と保守性を高めています。
*   各コンポーネントは `re-frame/subscribe` を通じて必要なデータのみを監視し、データ更新に応じて自動的に再レンダリングされます。
*   ユーザーの操作は `re-frame/dispatch` を通じてイベントとして発行され、アプリケーションの状態変化を引き起こします。
*   Hiccup記法とClojureScriptの基本的なデータ操作（マップアクセス、リスト処理、条件分岐など）が効果的に組み合わされています。