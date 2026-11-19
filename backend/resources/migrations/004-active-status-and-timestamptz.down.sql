DROP INDEX IF EXISTS uniq_walks_one_active_per_user;
--;;
ALTER TABLE walks DROP CONSTRAINT IF EXISTS walks_status_check;
--;;
UPDATE walks SET status = 'in_progress' WHERE status = 'active';
--;;
ALTER TABLE walks ALTER COLUMN status SET DEFAULT 'in_progress';
--;;
ALTER TABLE walks ADD CONSTRAINT walks_status_check CHECK (status IN ('in_progress', 'completed', 'cancelled'));
--;;
ALTER TABLE walks
  ALTER COLUMN start_time TYPE TIMESTAMP USING start_time AT TIME ZONE 'UTC',
  ALTER COLUMN end_time   TYPE TIMESTAMP USING end_time   AT TIME ZONE 'UTC',
  ALTER COLUMN created_at TYPE TIMESTAMP USING created_at AT TIME ZONE 'UTC',
  ALTER COLUMN updated_at TYPE TIMESTAMP USING updated_at AT TIME ZONE 'UTC';
--;;
ALTER TABLE users
  ALTER COLUMN created_at TYPE TIMESTAMP USING created_at AT TIME ZONE 'UTC',
  ALTER COLUMN last_login TYPE TIMESTAMP USING last_login AT TIME ZONE 'UTC';
--;;
ALTER TABLE user_stats ALTER COLUMN updated_at TYPE TIMESTAMP USING updated_at AT TIME ZONE 'UTC';
--;;
ALTER TABLE rewards ALTER COLUMN created_at TYPE TIMESTAMP USING created_at AT TIME ZONE 'UTC';
--;;
ALTER TABLE user_rewards ALTER COLUMN unlocked_at TYPE TIMESTAMP USING unlocked_at AT TIME ZONE 'UTC';
