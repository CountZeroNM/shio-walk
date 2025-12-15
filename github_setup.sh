#!/bin/bash

# shio-walk GitHubセットアップスクリプト

echo "========================================="
echo "shio-walk GitHub セットアップ"
echo "========================================="
echo ""

cd ~/shio-walk

# 1. .gitignoreファイルの作成
echo "📝 1. .gitignore ファイルを作成中..."
cat > .gitignore << 'EOF'
# Clojure
.cpcache/
.nrepl-port
.rebel_readline_history
*.jar
*.class
/target/
/classes/
/checkouts/
profiles.clj
pom.xml
pom.xml.asg
*.iml

# Database
*.db
*.sqlite

# Logs
*.log

# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp
*.swo
*~

# Environment
.env
.env.local

# Backup files
*.backup.*

# Docker volumes
/postgres-data/

# ClojureScript
/resources/public/js/
node_modules/
.shadow-cljs/

# Temporary files
/tmp/
EOF
echo "✅ .gitignore 作成完了"
echo ""

# 2. README.mdの作成（既に存在する場合はスキップ）
echo "📝 2. README.md を作成中..."
if [ ! -f README.md ]; then
    echo "# shio-walk" > README.md
    echo "" >> README.md
    echo "ウォーキング距離管理アプリ" >> README.md
    echo "" >> README.md
    echo "詳細は後ほど追加します。" >> README.md
    echo "✅ README.md 作成完了"
else
    echo "ℹ️  README.md は既に存在します"
fi
echo ""

# 3. Gitリポジトリの初期化
echo "📦 3. Gitリポジトリを初期化中..."
if [ ! -d .git ]; then
    git init
    echo "✅ Git初期化完了"
else
    echo "ℹ️  既にGitリポジトリです"
fi
echo ""

# 4. ファイルのステージング
echo "📋 4. ファイルをステージング中..."
git add .
echo "✅ ステージング完了"
echo ""

# 5. 初回コミット
echo "💾 5. 初回コミット中..."
git commit -m "Initial commit: shio-walk project setup

- Backend API完成 (Clojure + Ring + Compojure)
- PostgreSQL database setup
- JWT authentication
- Walk management system
- Reward system
- CORS support
- Demo UI (HTML)
- API test scripts"
echo "✅ コミット完了"
echo ""

# 6. ブランチ名を main に変更（古いGitの場合）
echo "🌿 6. ブランチ名を確認中..."
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" = "master" ]; then
    git branch -M main
    echo "✅ ブランチ名を main に変更しました"
else
    echo "ℹ️  既に main ブランチです"
fi
echo ""

echo "========================================="
echo "✅ ローカルGitセットアップ完了！"
echo "========================================="
echo ""
echo "次のステップ:"
echo ""
echo "1. GitHubでリポジトリを作成してください:"
echo "   https://github.com/new"
echo "   リポジトリ名: shio-walk"
echo "   説明: ウォーキング距離管理アプリ"
echo "   Public または Private を選択"
echo "   ※README、.gitignore、ライセンスは追加しないでください（既に作成済み）"
echo ""
echo "2. GitHubリポジトリ作成後、以下のコマンドを実行:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/shio-walk.git"
echo "   git push -u origin main"
echo ""
echo "YOUR_USERNAME を実際のGitHubユーザー名に置き換えてください。"
echo ""
echo "詳細な手順が必要な場合は、次のステップのガイドを表示します。"
