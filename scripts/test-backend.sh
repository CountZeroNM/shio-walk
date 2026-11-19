#!/bin/bash
# バックエンドの API テスト。開発用の DB (shio_walk) は触らず、別の DB (shio_walk_test) を作って使う。
#   docker compose up -d してから ./scripts/test-backend.sh
set -euo pipefail
cd "$(dirname "$0")/../backend"
export DB_USER=shio_user DB_PASSWORD=shiopass DB_HOST=localhost DB_PORT=5432 DB_NAME=shio_walk_test
docker exec shio-walk-db psql -U "$DB_USER" -d postgres -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep -q 1 \
  || docker exec shio-walk-db psql -U "$DB_USER" -d postgres -c "CREATE DATABASE $DB_NAME"
clojure -M:migrate migrate
clojure -M:test
