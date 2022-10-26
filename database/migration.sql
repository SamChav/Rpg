DROP TABLE IF EXISTS players;

CREATE TABLE players (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (50) UNIQUE,
    password TEXT NOT NULL,
    charactername VARCHAR (50) UNIQUE
);

INSERT INTO players (username, password, charactername) VALUES ('sam', '12345', 'squatpump');