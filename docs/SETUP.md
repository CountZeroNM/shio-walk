# shio-walk セットアップ手順書

## 環境情報

| 項目 | 内容 |
|------|------|
| OS | antiX Linux |
| Java | OpenJDK 21 |
| Clojure CLI | 1.12.1.1550 |
| Docker | 29.1.2 |
| PCのIPアドレス | 192.168.171.12 |

---

## 構成図

```
iPhone/Android
    │
    ├─ https://192.168.171.12:8443  ─→ nginx ─→ shadow-cljs (localhost:8080)
    └─ https://192.168.171.12:3443  ─→ nginx ─→ Jetty/Backend (localhost:3000)
                                          ↓
                                    PostgreSQL (Docker:5432)
```

---

## 初回セットアップ（一度だけ）

### 1. mkcert でローカルSSL証明書を発行

```bash
cd ~/projects/shio-walk
mkcert -install
mkcert 192.168.171.12
# → 192.168.171.12.pem と 192.168.171.12-key.pem が生成される
```

### 2. nginx 設定ファイルを作成

```bash
sudo tee /etc/nginx/sites-available/shio-walk << 'EOF'
server {
    listen 8443 ssl;
    server_name 192.168.171.12;

    ssl_certificate     /home/WiredMarks/projects/shio-walk/192.168.171.12.pem;
    ssl_certificate_key /home/WiredMarks/projects/shio-walk/192.168.171.12-key.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}

server {
    listen 3443 ssl;
    server_name 192.168.171.12;

    ssl_certificate     /home/WiredMarks/projects/shio-walk/192.168.171.12.pem;
    ssl_certificate_key /home/WiredMarks/projects/shio-walk/192.168.171.12-key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/shio-walk /etc/nginx/sites-enabled/
sudo nginx -t
```

### 3. api.cljs のURLをスマートフォン用に設定

`frontend/src/shio_walk/api.cljs` の1行目を変更：

```clojure
(def api-base-url "https://192.168.171.12:3443/api")
```

---

## 通常の起動手順（スマートフォンアクセス用）

### ターミナル1: DB + バックエンド

```bash
cd ~/projects/shio-walk

# PostgreSQL起動
docker compose up -d

# バックエンド起動
cd backend && ./run.sh
```

### ターミナル2: nginx + フロントエンド

```bash
# nginx起動
sudo service nginx start

# フロントエンド起動
cd ~/projects/shio-walk/frontend
npx shadow-cljs watch app
```

### 動作確認

```bash
# バックエンド確認
curl http://localhost:3000/api/health

# nginx経由確認
curl -k https://192.168.171.12:3443/api/health
```

---

## スマートフォンからのアクセス手順

### 初回のみ: API証明書を信頼

iPhoneのSafariで以下にアクセスし、証明書を信頼する：

```
https://192.168.171.12:3443/api/health
```

「このWebサイトは信頼できません」→「詳細を表示」→「このWebサイトを表示」

### アプリにアクセス

```
https://192.168.171.12:8443
```

---

## PC単体での開発時

`frontend/src/shio_walk/api.cljs` のURLをlocalhostに戻す：

```clojure
(def api-base-url "http://localhost:3000/api")
```

nginx は不要。shadow-cljs の http-host は `"0.0.0.0"` のままで問題なし。

起動手順：

```bash
# DB起動
docker compose up -d

# バックエンド
cd backend && ./run.sh

# フロントエンド
cd frontend && npx shadow-cljs watch app

# アクセス
# http://localhost:8080
```

---

## iOSでのセンサー設定

DeviceMotion API（歩数センサー）を使用するには：

1. iPhoneの「設定」アプリを開く
2. 「Safari」を選択
3. 「モーションと画面の向きへのアクセス」をオンにする
4. Safariでアプリを再読み込み
5. 「センサー計測を開始」ボタンをタップ → パーミッションダイアログが表示される

> **注意**: iOSのChromeではDeviceMotion APIは動作しない。必ずSafariを使用すること。

---

## Git ブランチ運用

```
main                    ← 安定版
  └─ feature/pwa-sensor ← PWA・センサー実装（現在の開発ブランチ）
```

### ブランチ操作

```bash
# 現在のブランチ確認
git branch

# ブランチ切り替え
git checkout main
git checkout feature/pwa-sensor

# 変更をコミット・プッシュ
git add .
git commit -m "メッセージ"
git push

# feature をmainにマージ（動作確認後）
git checkout main
git merge feature/pwa-sensor
git push
```

---

## トラブルシューティング

| 症状 | 原因 | 対処 |
|------|------|------|
| APIに接続できない | DBが起動していない | `docker compose up -d` |
| ポート8443に接続できない | nginxが停止している | `sudo service nginx start` |
| Safariでログインできない | API証明書が未信頼 | `https://192.168.171.12:3443/api/health` にアクセスして信頼 |
| 歩数が増えない（iOS） | センサー設定がオフ | 設定→Safari→モーションへのアクセスをオン |
| 歩数が増えない（Android） | パーミッション未付与 | 「センサー計測を開始」ボタンをタップ |
| ウォーク画面が戻る | 状態競合 | DBをリセット: `docker exec -it shio-walk-db psql -U shio_user -d shio_walk -c "TRUNCATE TABLE walks, user_stats, user_rewards CASCADE;"` |

---

## 関連ドキュメント

- [開発メモ](docs/debug-notes.md)
- [API仕様](docs/api.md)
- [デバッグ引き継ぎ](docs/debugging-handover.json)
- [LLM引き継ぎ](docs/next-llm-handover.json)
