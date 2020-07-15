DROP TABLE IF EXISTS Roles CASCADE;
DROP TABLE IF EXISTS Users CASCADE;
/* DROP TABLE IF EXISTS Admins CASCADE; */
DROP TABLE IF EXISTS Profiles CASCADE;
DROP TABLE IF EXISTS Skills CASCADE;
DROP TABLE IF EXISTS ProfileSkills CASCADE;
DROP TABLE IF EXISTS Organisations CASCADE;
DROP TABLE IF EXISTS Memberships CASCADE;
DROP TABLE IF EXISTS Listings CASCADE;
DROP TABLE IF EXISTS Features CASCADE;
DROP TABLE IF EXISTS Tags CASCADE;
DROP TABLE IF EXISTS ListingSkills CASCADE;
DROP TABLE IF EXISTS Jobs CASCADE;
DROP TABLE IF EXISTS FAQs CASCADE;
DROP TABLE IF EXISTS Likes CASCADE;
DROP TABLE IF EXISTS ListingAdmins CASCADE;
DROP TABLE IF EXISTS Participants CASCADE;
DROP TABLE IF EXISTS Subscriptions CASCADE;
DROP TABLE IF EXISTS Milestones CASCADE;

CREATE TABLE Roles (
    role_id SERIAL,
    role VARCHAR UNIQUE NOT NULL,

    PRIMARY KEY (role_id)
);

CREATE TABLE Users (
    user_id SERIAL,
    name VARCHAR NOT NULL,
    email VARCHAR(320) UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    role_id INTEGER NOT NULL DEFAULT 1,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),

    PRIMARY KEY (user_id),
    FOREIGN KEY (role_id) REFERENCES Roles ON DELETE SET DEFAULT
);

/*
CREATE TABLE Admins (
    user_id INTEGER,

    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE
);
*/

CREATE TABLE Profiles (
    user_id INTEGER,
    profile_picture VARCHAR,
    about TEXT,
    gender VARCHAR CHECK (gender IN ('m', 'f', 'o', 'u')) DEFAULT 'u', /* m = male, f = female, o = others, u = undisclosed */
    age INTEGER,
    interest TEXT,
    phone VARCHAR,
    facebook_link VARCHAR,
    twitter_link VARCHAR,
    instagram_link VARCHAR,
    linkedin_link VARCHAR,
    is_verified BOOLEAN DEFAULT FALSE,
    
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE
);

CREATE TABLE Skills (
    skill_id SERIAL,
    skill VARCHAR,

    PRIMARY KEY (skill_id)
);

CREATE TABLE ProfileSkills (
    user_id INTEGER,
    skill_id INTEGER,

    PRIMARY KEY (user_id, skill_id),
    FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
    FOREIGN KEY (skill_id) REFERENCES Skills ON DELETE NO ACTION
);

CREATE TABLE Organisations (
    organisation_id SERIAL,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    about TEXT,
    website_url VARCHAR,
    handphone VARCHAR,
    email VARCHAR(320),
    is_verified BOOLEAN DEFAULT FALSE,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),

    PRIMARY KEY (organisation_id)
);

CREATE TABLE Memberships (
    organisation_id INTEGER,
    user_id INTEGER,
    is_owner BOOLEAN DEFAULT FALSE,
    joined_on TIMESTAMP NOT NULL,

    PRIMARY KEY(organisation_id, user_id),
    FOREIGN KEY (organisation_id) REFERENCES Organisations ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE
);

CREATE TABLE Listings (
    listing_id SERIAL,
    organisation_id INTEGER,
    created_by INTEGER NOT NULL,
    title VARCHAR NOT NULL,
    category VARCHAR NOT NULL,
    about TEXT,
    tagline VARCHAR,
    mission TEXT,
    listing_url VARCHAR,
    pic1 VARCHAR,
    pic2 VARCHAR,
    pic3 VARCHAR,
    pic4 VARCHAR,
    pic5 VARCHAR,
    is_published BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    start_date TIMESTAMP NOT NULL DEFAULT NOW(),
    end_date TIMESTAMP,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),

    PRIMARY KEY (listing_id),
    FOREIGN KEY (organisation_id) REFERENCES Organisations ON DELETE NO ACTION,
    FOREIGN KEY (created_by) REFERENCES Users ON DELETE NO ACTION
);

/* Featured listings */
CREATE TABLE Features (
    listing_id INTEGER,

    PRIMARY KEY (listing_id),
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Tags (
    listing_id INTEGER,
    description VARCHAR NOT NULL,

    PRIMARY KEY (listing_id, description),
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingSkills (
    listing_id INTEGER,
    skill_id INTEGER,
    
    PRIMARY KEY (listing_id, skill_id),
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE,
    FOREIGN KEY (skill_id) REFERENCES Skills ON DELETE NO ACTION
);

/* Jobs for a particular listing */
CREATE TABLE Jobs (
    job_id SERIAL,
    listing_id INTEGER,
    job_title VARCHAR NOT NULL,
    job_description TEXT NOT NULL,

    PRIMARY KEY (listing_id, job_id),
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE FAQs (
    faq_id SERIAL,
    listing_id INTEGER NOT NULL,
    question TEXT,
    answer TEXT,

    PRIMARY KEY (faq_id),
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Likes (
    user_id INTEGER,
    listing_id INTEGER,

    PRIMARY KEY (user_id, listing_id),
    FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingAdmins (
    user_id INTEGER,
    listing_id INTEGER,

    PRIMARY KEY (user_id, listing_id),
    FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Participants (
    listing_id INTEGER,
    user_id INTEGER,
    joined_on TIMESTAMP NOT NULL DEFAULT NOW(),
    end_on TIMESTAMP,

    PRIMARY KEY (listing_id, user_id, joined_on),
    FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Subscriptions (
    user_id INTEGER,
    listing_id INTEGER,

    PRIMARY KEY (user_id, listing_id),
    FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Milestones (
    listing_id INTEGER,
    milestone_id SERIAL,
    description TEXT NOT NULL,

    PRIMARY KEY (milestone_id),
    FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);




