-- db/seed.sql
\c colors_dev;

INSERT INTO colors (name, is_favorite) VALUES
  ('Orchid', true),
  ('Lavender', true),
  ('Salmon', true);

-- To run our db/seed.sql we run the same command as in schema, but this time we change the file name
-- psql -U postgres -f db/seed.sql