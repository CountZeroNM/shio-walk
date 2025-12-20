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
    `^` を使って `:dev/after-load` というメタデータを `reload` 関数に付与しています。これは `shadow-cljs` というビルドツールに対する特殊な命令で、「（ホットリロードで）コードの再読み込みが完了した**後で**、この関数を実行してください」という意味になります。

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