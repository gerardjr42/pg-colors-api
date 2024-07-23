-- db/schema/sql
DROP DATABASE IF EXISTS colors_dev;
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE colors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  is_favorite BOOLEAN
);

-- To run db schema run this following in the terminal:
-- psql -U postgres -f db/schema.sql

