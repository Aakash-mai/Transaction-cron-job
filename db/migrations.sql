CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE tx_events_testnet (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  environment TEXT NOT NULL,
  chain_id INT NOT NULL,
  tx_hash TEXT,
  timestamp_argument BIGINT,
  sent_at TIMESTAMP NOT NULL,
  event_received_at TIMESTAMP,
  event_data BIGINT,
  latency_ms BIGINT GENERATED ALWAYS AS (
  EXTRACT(EPOCH FROM (event_received_at - sent_at)) * 1000
) STORED ,

  status TEXT CHECK (status IN ('SENT', 'EVENT_RECEIVED', 'FAILED')),

  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE oracle_events_mainnet (
  id UUID,
  environment TEXT,
  chain_id INT,
  price NUMERIC,
created_at TIMESTAMP DEFAULT now()
);


CREATE INDEX idx_env_chain_timestamp
ON tx_events_testnet (environment, chain_id, timestamp_argument);

CREATE INDEX idx_send_at_timestamp
ON tx_events_testnet (sent_at);

CREATE INDEX idx_env_chain_time_mainnet 
ON oracle_events_mainnet (environment, chain_id, created_at);


