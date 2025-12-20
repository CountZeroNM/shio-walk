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