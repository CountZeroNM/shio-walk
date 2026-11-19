# スマートフォンから試す準備

センサー (DeviceMotion) と GPS (Geolocation) は **安全な接続 (https か localhost) でしか使えません**。
PC で動かしているアプリをスマホから開くには、次のどちらかを使います。

PC 側はどちらも README の「動かし方」と同じです (DB・バックエンド・`npx shadow-cljs watch app`)。
開発サーバー (8080) が画面を出し、`/api/` をバックエンド (3000) へ転送するので、**スマホから見える入口は 8080 の 1 つだけ**です
(以前は API 用に 3443 を別に開き、`api.cljs` の URL を書き換えていましたが、もう要りません)。

```
スマホ ──(A: USB で localhost:8080) または (B: https://PCのIP:8443 → nginx)──→ shadow-cljs :8080
                                                                           ├─ 画面 (public/)
                                                                           └─ /api/ → バックエンド :3000 → PostgreSQL
```

## A. Android: USB でつないで localhost として開く (おすすめ・証明書が要らない)

スマホの Chrome から見て `http://localhost:8080` は安全な接続として扱われるので、証明書の準備が要りません。

1. Android の「開発者向けオプション」で「USB デバッグ」をオンにし、USB で PC とつなぐ
2. PC で `adb reverse tcp:8080 tcp:8080`
   (adb が無ければ、PC の Chrome の `chrome://inspect/#devices` →「Port forwarding」で 8080 → localhost:8080 を足しても同じ)
3. スマホの Chrome で `http://localhost:8080` を開く

Chromebook の Linux 環境で開発しているときは、USB 機器を Linux に渡す設定 (設定 → デベロッパー → Linux → USB 機器) が必要です。

## B. Wi-Fi 越しに https で開く (iPhone も同じ方法)

mkcert でその PC の IP 用の証明書を作り、nginx で https にして 8080 へ転送します。

### 証明書を作る (1 回だけ)

```bash
mkcert -install
mkdir -p ~/.local/share/shio-walk-certs && cd ~/.local/share/shio-walk-certs
mkcert 192.168.x.x            # PC の IP。192.168.x.x.pem と 192.168.x.x-key.pem ができる
```

> [!CAUTION]
> 証明書と秘密鍵 (`*.pem`) はリポジトリに入れないでください (`.gitignore` で除外済み)。
> 以前 `192.168.171.12-key.pem` がコミットされたことがあります (2026-11-19 に履歴から削除済み)。その証明書は使わず作り直してください。

スマホ側にも mkcert のルート証明書 (`mkcert -CAROOT` のフォルダの `rootCA.pem`) を入れて信頼させます。
- iPhone: ファイルを送って「プロファイル」として入れ、設定 → 一般 → 情報 → 証明書信頼設定 でオン
- Android: 設定 → セキュリティ → 暗号化と認証情報 → 証明書のインストール → CA 証明書

### nginx (1 回だけ)

```nginx
server {
    listen 8443 ssl;
    server_name 192.168.x.x;

    ssl_certificate     /home/<ユーザー>/.local/share/shio-walk-certs/192.168.x.x.pem;
    ssl_certificate_key /home/<ユーザー>/.local/share/shio-walk-certs/192.168.x.x-key.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;     # shadow-cljs のホットリロード用 (WebSocket)
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

```bash
sudo tee /etc/nginx/sites-available/shio-walk   # 上の内容
sudo ln -sf /etc/nginx/sites-available/shio-walk /etc/nginx/sites-enabled/
sudo nginx -t && sudo service nginx start
```

スマホで `https://192.168.x.x:8443` を開きます。

Chromebook の Linux 環境では、外から 8443 に届くように ChromeOS の設定 (設定 → デベロッパー → Linux → ポート転送) で 8443 を足します。

## センサーの許可

- iPhone (Safari): 「ウォーキング開始」をタップしたときの許可ダイアログで「許可」。出ないときは 設定 → Safari →「モーションと画面の向きへのアクセス」をオン。iPhone の Chrome や LINE 内のブラウザでは歩数センサーが動きません
- Android (Chrome): 位置情報の許可を求められたら「許可」。加速度センサーは許可なしで使えます

## ホーム画面に追加 (PWA)

- iPhone: Safari の共有メニュー →「ホーム画面に追加」
- Android: Chrome のメニュー →「ホーム画面に追加」(アプリとしてインストールするにはアイコン画像 `public/icons/` が必要。未作成)

## 困ったとき

| 症状 | 確かめること |
|---|---|
| API につながらない | `docker compose up -d`、バックエンドが起動しているか (`curl localhost:3000/api/health`)、開発サーバー経由 (`curl localhost:8080/api/health`) |
| 画面が古いまま | Service Worker はネットワーク優先なので再読み込みで新しくなる。だめならブラウザのサイトデータを消す |
| 歩数が増えない (iPhone) | 上の「センサーの許可」 |
| 画面を消すと計測が止まる | ブラウザの制約 (docs/STATUS.md)。戻ったときに自動で保存し、そこから数え足す |
| 開始したウォークが一覧で戻る | docs/debug-notes.md の「状態の競合」。データを片付けるなら `cd backend && clj -M:reset` |
