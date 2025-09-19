-- Initial database setup
-- This file will be executed when the PostgreSQL container is first created

-- Create additional databases if needed
-- CREATE DATABASE app_db;
-- CREATE DATABASE test_db;

-- Create a read-only user for reporting/analytics
-- CREATE USER readonly_user WITH PASSWORD 'readonly_password';
-- GRANT CONNECT ON DATABASE main_db TO readonly_user;
-- GRANT USAGE ON SCHEMA public TO readonly_user;
-- GRANT SELECT ON ALL TABLES IN SCHEMA public TO readonly_user;
-- ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO readonly_user;

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Set default timezone
SET timezone = 'UTC';
