-- :up
CREATE TABLE rewards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  threshold_type VARCHAR(10) NOT NULL CHECK (threshold_type IN ('steps', 'distance')),
  threshold_value INTEGER NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  image_url TEXT,
  audio_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  UNIQUE(threshold_type, threshold_value)
);

CREATE TABLE user_rewards (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  reward_id UUID REFERENCES rewards(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  PRIMARY KEY (user_id, reward_id)
);

CREATE INDEX idx_user_rewards_user_id ON user_rewards(user_id);

-- 初期報酬データ
INSERT INTO rewards (threshold_type, threshold_value, title, description) VALUES
  ('steps', 1000, '最初の一歩', '1000歩達成おめでとう!'),
  ('steps', 5000, '頑張り屋さん', '5000歩達成!'),
  ('steps', 10000, 'ウォーキングマスター', '10000歩達成!素晴らしい!'),
  ('distance', 1000, '1km走破', '1km歩きました!'),
  ('distance', 5000, '5km走破', '5km歩きました!すごい!');

