DROP TABLE IF EXISTS employees;

CREATE TABLE fullstack-employees (
  id serial PRIMARY KEY,
  name text UNIQUE NOT NULL,
  birthday date NOT NULL,
  salery integer NOT NULL
);

