// ShioWalk Service Worker
// 静的アセットをキャッシュし、オフライン時でもUIを表示できるようにする

const CACHE_NAME = "shio-walk-v1";

// キャッシュする静的アセット
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/main.js",
  "/manifest.json"
];

// インストール: 静的アセットをキャッシュ
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[SW] Caching static assets");
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// アクティベート: 古いキャッシュを削除
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log("[SW] Deleting old cache:", key);
            return caches.delete(key);
          })
      )
    )
  );
  self.clients.claim();
});

// フェッチ戦略:
//   - API リクエスト (/api/*): Network First（常に最新データを取得、失敗時はエラー）
//   - 静的アセット: Cache First（キャッシュ優先、なければネットワーク）
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // API リクエストはキャッシュしない（Network First）
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(
          JSON.stringify({ error: "オフラインです。ネットワーク接続を確認してください。" }),
          {
            status: 503,
            headers: { "Content-Type": "application/json" }
          }
        );
      })
    );
    return;
  }

  // 静的アセット: Cache First
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then((response) => {
        // 正常なレスポンスをキャッシュに追加
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
