DROP TABLE IF EXISTS Users CASCADE;
/* DROP TABLE IF EXISTS Roles CASCADE; */
DROP TABLE IF EXISTS Admins CASCADE;
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


CREATE TABLE Users (
    user_id SERIAL,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(320) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL,
    user_role INTEGER NOT NULL DEFAULT 1,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),

    PRIMARY KEY (user_id)
);

/*
CREATE TABLE Roles (
    user_id INTEGER,
    user_role ENUM('m', 'o'), // m = Member; o = Organizer 

    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES Users
)
*/

CREATE TABLE Admins (
    user_id INTEGER,

    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES Users
);

CREATE TABLE Profiles (
    user_id INTEGER,
    profile_picture VARCHAR(256) DEFAULT NULL,
    about TEXT DEFAULT NULL,
    gender ENUM('m', 'f', 'o', 'u') DEFAULT 'u', /* m = male, f = female, o = others, u = undisclosed */
    age INTEGER DEFAULT NULL,
    interest TEXT DEFAULT NULL,
    handphone VARCHAR(32) DEFAULT NULL,
    facebook_link VARCHAR(256) DEFAULT NULL,
    twitter_link VARCHAR(256) DEFAULT NULL,
    instagram_link VARCHAR(256) DEFAULT NULL,
    linkedin_link VARCHAR(256) DEFAULT NULL,
    is_verified BOOLEAN DEFAULT FALSE,
    
    PRIMARY KEY (user_id),
    FOREIGN KEY (user_id) REFERENCES Users
);

CREATE TABLE Skills (
    skill_id SERIAL,
    skill VARCHAR(256),

    PRIMARY KEY (skill_id)
);

CREATE TABLE ProfileSkills (
    user_id INTEGER,
    skill_id INTEGER,

    PRIMARY KEY (user_id, skill_id),
    FOREIGN KEY (user_id) REFERENCES Users,
    FOREIGN KEY (skill_id) REFERENCES Skills
);

CREATE TABLE Organisations (
    organisation_id SERIAL,
    name VARCHAR(256) NOT NULL,
    type VARCHAR(256) NOT NULL,
    about TEXT DEFAULT NULL,
    website_url VARCHAR(256) DEFAULT NULL,
    handphone VARCHAR(32) DEFAULT NULL,
    email VARCHAR(320) DEFAULT NULL,
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
    FOREIGN KEY (organisation_id) REFERENCES Organisations,
    FOREIGN KEY (user_id) REFERENCES Users
);

CREATE TABLE Listings (
    listing_id SERIAL,
    organisation_id INTEGER,
    created_by INTEGER NOT NULL,
    title VARCHAR(256) NOT NULL,
    category VARCHAR(256) NOT NULL,
    about TEXT DEFAULT NULL,
    tagline VARCHAR(256) DEFAULT NULL,
    mission TEXT DEFAULT NULL,
    listing_url VARCHAR(256) DEFAULT NULL,
    pic1 VARCHAR(256) DEFAULT NULL,
    pic2 VARCHAR(256) DEFAULT NULL,
    pic3 VARCHAR(256) DEFAULT NULL,
    pic4 VARCHAR(256) DEFAULT NULL,
    pic5 VARCHAR(256) DEFAULT NULL,
    is_published BOOLEAN DEFAULT FALSE,
    is_verified BOOLEAN DEFAULT FALSE,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP DEFAULT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),

    PRIMARY KEY (listing_id),
    FOREIGN KEY (organisation_id) REFERENCES Organisations,
    FOREIGN KEY (created_by) REFERENCES Users
);

/* Featured listings */
CREATE TABLE Features (
    listing_id INTEGER,

    PRIMARY KEY (listing_id),
    FOREIGN KEY (listing_id) REFERENCES Listings
);

CREATE TABLE Tags (
    listing_id INTEGER,
    description VARCHAR(256) NOT NULL,

    PRIMARY KEY (listing_id, description),
    FOREIGN KEY (listing_id) REFERENCES Listings
);

CREATE TABLE ListingSkills (
    listing_id INTEGER,
    skill_id INTEGER,
    
    PRIMARY KEY (listing_id, skill_id),
    FOREIGN KEY (listing_id) REFERENCES Listings,
    FOREIGN KEY (skill_id) REFERENCES Skills
);

/* Jobs for a particular listing */
CREATE TABLE Jobs (
    job_id INTEGER,
    listing_id INTEGER,
    job_title VARCHAR(256) NOT NULL,
    job_description TEXT NOT NULL,

    PRIMARY KEY (listing_id, job_id),
    FOREIGN KEY (listing_id) REFERENCES Listings
);

CREATE TABLE FAQs (
    faq_id SERIAL,
    listing_id INTEGER NOT NULL,
    question TEXT,
    answer TEXT,

    PRIMARY KEY (faq_id),
    FOREIGN KEY (listing_id) REFERENCES Listings
);

CREATE TABLE Likes (
    user_id INTEGER,
    listing_id INTEGER,

    PRIMARY KEY (user_id, listing_id),
    FOREIGN KEY (user_id) REFERENCES Users,
    FOREIGN KEY (listing_id) REFERENCES Listings
);

CREATE TABLE ListingAdmins (
    user_id INTEGER,
    listing_id INTEGER,

    PRIMARY KEY (user_id, listing_id),
    FOREIGN KEY (user_id) REFERENCES Users,
    FOREIGN KEY (listing_id) REFERENCES Listings
);

CREATE TABLE Participants (
    listing_id INTEGER,
    user_id INTEGER,
    joined_on TIMESTAMP NOT NULL DEFAULT NOW(),
    end_on TIMESTAMP,

    PRIMARY KEY (listing_id, user_id, joined_on),
    FOREIGN KEY (user_id) REFERENCES Users,
    FOREIGN KEY (listing_id) REFERENCES Listings
);

CREATE TABLE Subscriptions (
    user_id INTEGER,
    listing_id INTEGER,

    PRIMARY KEY (user_id, listing_id),
    FOREIGN KEY (user_id) REFERENCES Users,
    FOREIGN KEY (listing_id) REFERENCES Listings
);

CREATE TABLE Milestones (
    listing_id INTEGER,
    milestone_id SERIAL,
    description TEXT NOT NULL,

    PRIMARY KEY (milestone_id),
    FOREIGN KEY (listing_id) REFERENCES Listings
);




