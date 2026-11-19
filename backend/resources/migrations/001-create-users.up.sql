-- migratus の書式: <番号>-<名前>.up.sql / .down.sql。文の区切りは --;;
-- 既存の環境 (マイグレーション導入前に手で作った DB) でも通るように IF NOT EXISTS で書く
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--;;
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);
--;;
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
--;;
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
