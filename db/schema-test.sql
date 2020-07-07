-- Working sheet to test schema and populate data
-- author: Don

DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS UserRoles CASCADE;

CREATE TABLE UserRoles (
    id          SERIAL PRIMARY KEY,
    role        VARCHAR UNIQUE NOT NULL
);

CREATE TABLE Users (
    id          SERIAL PRIMARY KEY,
    email       VARCHAR UNIQUE NOT NULL,
    name        VARCHAR NOT NULL,
    password    VARCHAR NOT NULL,
    role        INTEGER NOT NULL DEFAULT 1,
    -- TODO: discuss if need db-level check for the following
    CHECK (email LIKE '%@%'),
    CHECK (name <> ''),
    CHECK (password <> ''),
    CONSTRAINT fk_user_role FOREIGN KEY (role) REFERENCES UserRoles (id)
);

-- Data population segment
INSERT INTO UserRoles (role) VALUES ('User');
INSERT INTO UserRoles (role) VALUES ('Admin');

INSERT INTO Users (email, name, password, role) VALUES ('dontay0209@gmail.com', 'Don', '123456', '2');
INSERT INTO Users (email, name, password, role) VALUES ('john@gmail.com', 'John', '123456', '1');
INSERT INTO Users (email, name, password, role) VALUES ('aaron@gmail.com', 'Aaron', '123456', '1');
INSERT INTO Users (email, name, password, role) VALUES ('ben@gmail.com', 'Ben', '123456', '1');
