-- :up
CREATE TABLE walks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP,
  steps INTEGER DEFAULT 0,
  distance_meters NUMERIC(10, 2) DEFAULT 0,
  status VARCHAR(20) DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'cancelled')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_walks_user_id ON walks(user_id);
CREATE INDEX idx_walks_start_time ON walks(start_time DESC);

-- 統計テーブル
CREATE TABLE user_stats (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  total_steps BIGINT DEFAULT 0,
  total_distance_km NUMERIC(10, 2) DEFAULT 0,
  total_walks INTEGER DEFAULT 0,
  rewards_unlocked INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

