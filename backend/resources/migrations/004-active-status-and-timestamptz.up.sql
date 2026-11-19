-- ウォークの状態を API と同じ 'active' に揃える (以前は DB だけ 'in_progress')
ALTER TABLE walks DROP CONSTRAINT IF EXISTS walks_status_check;
--;;
UPDATE walks SET status = 'active' WHERE status = 'in_progress';
--;;
ALTER TABLE walks ALTER COLUMN status SET DEFAULT 'active';
--;;
ALTER TABLE walks ADD CONSTRAINT walks_status_check CHECK (status IN ('active', 'completed', 'cancelled'));
--;;
-- 1 人が同時に持てる進行中のウォークは 1 つ (開始の二重押しで 2 つできないように)
CREATE UNIQUE INDEX IF NOT EXISTS uniq_walks_one_active_per_user ON walks(user_id) WHERE status = 'active';
--;;
-- 時刻をタイムゾーン付きにする。これまでの値は DB の既定 (UTC) で書かれていたので UTC として読む
ALTER TABLE walks
  ALTER COLUMN start_time TYPE TIMESTAMPTZ USING start_time AT TIME ZONE 'UTC',
  ALTER COLUMN end_time   TYPE TIMESTAMPTZ USING end_time   AT TIME ZONE 'UTC',
  ALTER COLUMN created_at TYPE TIMESTAMPTZ USING created_at AT TIME ZONE 'UTC',
  ALTER COLUMN updated_at TYPE TIMESTAMPTZ USING updated_at AT TIME ZONE 'UTC';
--;;
ALTER TABLE users
  ALTER COLUMN created_at TYPE TIMESTAMPTZ USING created_at AT TIME ZONE 'UTC',
  ALTER COLUMN last_login TYPE TIMESTAMPTZ USING last_login AT TIME ZONE 'UTC';
--;;
ALTER TABLE user_stats ALTER COLUMN updated_at TYPE TIMESTAMPTZ USING updated_at AT TIME ZONE 'UTC';
--;;
ALTER TABLE rewards ALTER COLUMN created_at TYPE TIMESTAMPTZ USING created_at AT TIME ZONE 'UTC';
--;;
ALTER TABLE user_rewards ALTER COLUMN unlocked_at TYPE TIMESTAMPTZ USING unlocked_at AT TIME ZONE 'UTC';
