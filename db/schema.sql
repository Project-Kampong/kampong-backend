DROP TABLE IF EXISTS Users CASCADE;
/*DROP TABLE IF EXISTS UserRoles CASCADE;*/
DROP TABLE IF EXISTS Admins CASCADE;
DROP TABLE IF EXISTS Profiles CASCADE;
DROP TABLE IF EXISTS Skills CASCADE;
DROP TABLE IF EXISTS ProfileSkills CASCADE;
DROP TABLE IF EXISTS Organisations CASCADE;
DROP TABLE IF EXISTS Memberships CASCADE;
DROP TABLE IF EXISTS Listings CASCADE;
DROP TABLE IF EXISTS FeaturedListings CASCADE;
DROP TABLE IF EXISTS Tags CASCADE;
DROP TABLE IF EXISTS ListingSkills CASCADE;
DROP TABLE IF EXISTS ListingJobs CASCADE;
DROP TABLE IF EXISTS ListingLikes CASCADE;
DROP TABLE IF EXISTS ListingAdmins CASCADE;
DROP TABLE IF EXISTS ListingJoins CASCADE;
DROP TABLE IF EXISTS ListingSubscriptions CASCADE;
DROP TABLE IF EXISTS ListingMilestones CASCADE;


CREATE TABLE Users (
    userID SERIAL,
    name VARCHAR(64) NOT NULL, /*Unsure of the limit -> check with the rest */
    email VARCHAR(320) UNIQUE NOT NULL,
    password VARCHAR(256) NOT NULL, /*Unsure of the limit -> check with the rest */
    userRole INTEGER NOT NULL DEFAULT 1,
    createdOn TIMESTAMP NOT NULL,

    PRIMARY KEY (userID)
);

/*
CREATE TABLE UserRoles (
    userID INTEGER,
    userRole ENUM('m', 'o'), // m = Member; o = Organizer 

    PRIMARY KEY (userID),
    FOREIGN KEY (userID) REFERENCES Users
)
*/

CREATE TABLE Admins (
    userID INTEGER,

    PRIMARY KEY (userID),
    FOREIGN KEY (userID) REFERENCES Users
);

CREATE TABLE Profiles (
    userID INTEGER,
    profilePicture VARCHAR(256) DEFAULT NULL,
    about TEXT DEFAULT NULL,
    gender ENUM('m', 'f', 'o', 'u') DEFAULT 'u', /* m = male, f = female, o = others, u = undisclosed */
    age INTEGER DEFAULT NULL,
    interest TEXT DEFAULT NULL,
    handphone VARCHAR(32) DEFAULT NULL,
    facebookLink VARCHAR(256) DEFAULT NULL,
    twitterLink VARCHAR(256) DEFAULT NULL,
    instagramLink VARCHAR(256) DEFAULT NULL,
    linkedinLink VARCHAR(256) DEFAULT NULL,
    isVerified BOOLEAN DEFAULT FALSE,
    
    PRIMARY KEY (userID),
    FOREIGN KEY (userID) REFERENCES Users
);

CREATE TABLE Skills (
    skillID SERIAL,
    skill VARCHAR(256),

    PRIMARY KEY (skillID)
);

CREATE TABLE ProfileSkills (
    userID INTEGER,
    skillID INTEGER,

    PRIMARY KEY (userID, skillID),
    FOREIGN KEY (userID) REFERENCES Users,
    FOREIGN KEY (skillID) REFERENCES Skills
);

CREATE TABLE Organisations (
    organisationID SERIAL,
    name VARCHAR(256) NOT NULL,
    type VARCHAR(256) NOT NULL,
    about TEXT DEFAULT NULL,
    websiteURL VARCHAR(256) DEFAULT NULL,
    handphone VARCHAR(32) DEFAULT NULL,
    email VARCHAR(320) DEFAULT NULL,
    isVerified BOOLEAN DEFAULT FALSE,
    createdOn TIMESTAMP NOT NULL,

    PRIMARY KEY (organisationID)
);

CREATE TABLE Memberships (
    organisationID INTEGER,
    userID INTEGER,
    isOwner BOOLEAN DEFAULT FALSE,
    joinedOn TIMESTAMP NOT NULL,

    PRIMARY KEY(organisationID, userID),
    FOREIGN KEY (organisationID) REFERENCES Organisations,
    FOREIGN KEY (userID) REFERENCES Users
);

CREATE TABLE Listings (
    listingID SERIAL,
    organisationID INTEGER,
    createdBy INTEGER NOT NULL,
    title VARCHAR(256) NOT NULL,
    category VARCHAR(256) NOT NULL,
    about TEXT DEFAULT NULL,
    tagline VARCHAR(256) DEFAULT NULL,
    mission TEXT DEFAULT NULL,
    listingURL VARCHAR(256) DEFAULT NULL,
    pic1 VARCHAR(256) DEFAULT NULL,
    pic2 VARCHAR(256) DEFAULT NULL,
    pic3 VARCHAR(256) DEFAULT NULL,
    pic4 VARCHAR(256) DEFAULT NULL,
    pic5 VARCHAR(256) DEFAULT NULL,
    isPublished BOOLEAN DEFAULT FALSE,
    isVerified BOOLEAN DEFAULT FALSE,
    startDate TIMESTAMP NOT NULL,
    endDate TIMESTAMP DEFAULT NULL,
    createdOn TIMESTAMP NOT NULL,

    PRIMARY KEY (listingID),
    FOREIGN KEY (organisationID) REFERENCES Organisations,
    FOREIGN KEY (createdBy) REFERENCES Users
);

CREATE TABLE FeaturedListings (
    listingID INTEGER,

    PRIMARY KEY (listingID),
    FOREIGN KEY (listingID) REFERENCES Listings
);

CREATE TABLE Tags (
    listingID INTEGER,
    description VARCHAR(256) NOT NULL,

    PRIMARY KEY (listingID, description),
    FOREIGN KEY (listingID) REFERENCES Listings
);

CREATE TABLE ListingSkills (
    listingID INTEGER,
    skillID INTEGER,
    
    PRIMARY KEY (listingID, skillID),
    FOREIGN KEY (listingID) REFERENCES Listings,
    FOREIGN KEY (skillID) REFERENCES Skills
);

CREATE TABLE ListingJobs (
    jobID INTEGER,
    listingID INTEGER,
    jobTitle VARCHAR(256) NOT NULL,
    jobDescription TEXT NOT NULL,

    PRIMARY KEY (listingID, jobID),
    FOREIGN KEY (listingID) REFERENCES Listings
);

/* Might be better to store the whole thing as a text or something rather than a table */
CREATE TABLE ListingFAQ (
    faqID SERIAL,
    listingID INTEGER NOT NULL,
    question TEXT,
    answer TEXT,

    PRIMARY KEY (faqID),
    FOREIGN KEY (listingID) REFERENCES Listings
);

CREATE TABLE ListingLikes (
    userID INTEGER,
    listingID INTEGER,

    PRIMARY KEY (userID, listingID),
    FOREIGN KEY (userID) REFERENCES Users,
    FOREIGN KEY (listingID) REFERENCES Listings
);

CREATE TABLE ListingAdmins (
    userID INTEGER,
    listingID INTEGER,

    PRIMARY KEY (userID, listingID),
    FOREIGN KEY (userID) REFERENCES Users,
    FOREIGN KEY (listingID) REFERENCES Listings
);

CREATE TABLE ListingJoins (
    listingID INTEGER,
    userID INTEGER,
    joinedOn TIMESTAMP NOT NULL,
    endOn TIMESTAMP,

    PRIMARY KEY (listingID, userID, joinedOn),
    FOREIGN KEY (userID) REFERENCES Users,
    FOREIGN KEY (listingID) REFERENCES Listings
);

CREATE TABLE ListingSubscriptions (
    userID INTEGER,
    listingID INTEGER,

    PRIMARY KEY (userID, listingID),
    FOREIGN KEY (userID) REFERENCES Users,
    FOREIGN KEY (listingID) REFERENCES Listings
);

CREATE TABLE ListingMilestones (
    listingID INTEGER,
    milestoneID SERIAL,
    description TEXT NOT NULL,

    PRIMARY KEY (milestoneID),
    FOREIGN KEY (listingID) REFERENCES Listings
);




