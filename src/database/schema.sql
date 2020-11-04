DROP TYPE IF EXISTS user_roles CASCADE;

CREATE TYPE user_roles AS ENUM ('admin', 'user');

DROP EXTENSION IF EXISTS pg_stat_statements CASCADE;

CREATE EXTENSION pg_stat_statements;

DROP TABLE IF EXISTS Roles CASCADE;

DROP TABLE IF EXISTS Users CASCADE;

DROP TABLE IF EXISTS PendingUsers CASCADE;

DROP TABLE IF EXISTS ForgetPasswordUsers CASCADE;

DROP TABLE IF EXISTS Profiles CASCADE;

DROP TABLE IF EXISTS Skills CASCADE;

DROP TABLE IF EXISTS ProfileSkills CASCADE;

DROP TABLE IF EXISTS Organisations CASCADE;

DROP TABLE IF EXISTS Programmes CASCADE;

DROP TABLE IF EXISTS Memberships CASCADE;

DROP TABLE IF EXISTS Listings CASCADE;

DROP TABLE IF EXISTS ListingStories CASCADE;

DROP TABLE IF EXISTS FeaturedListings CASCADE;

DROP TABLE IF EXISTS HashTags CASCADE;

DROP TABLE IF EXISTS ListingSkills CASCADE;

DROP TABLE IF EXISTS Jobs CASCADE;

DROP TABLE IF EXISTS FAQs CASCADE;

DROP TABLE IF EXISTS Likes CASCADE;

DROP TABLE IF EXISTS ListingAdmins CASCADE;

DROP TABLE IF EXISTS Participants CASCADE;

DROP TABLE IF EXISTS Subscriptions CASCADE;

DROP TABLE IF EXISTS Milestones CASCADE;

DROP TABLE IF EXISTS ListingUpdates CASCADE;

DROP TABLE IF EXISTS ListingComments CASCADE;

DROP TABLE IF EXISTS Locations CASCADE;

DROP TABLE IF EXISTS ListingLocations CASCADE;

CREATE TABLE Users (
	user_id UUID,
	first_name VARCHAR NOT NULL,
	last_name VARCHAR,
	email VARCHAR(320) UNIQUE NOT NULL,
	password VARCHAR NOT NULL,
	role user_roles NOT NULL DEFAULT 'user',
	is_activated BOOLEAN NOT NULL DEFAULT FALSE,
	PRIMARY KEY (user_id)
);

CREATE TABLE PendingUsers (
	pending_user_id SERIAL,
	user_id UUID UNIQUE NOT NULL,
	token VARCHAR UNIQUE NOT NULL,
	PRIMARY KEY (pending_user_id),
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE
);

CREATE TABLE ForgetPasswordUsers (
	forget_password_user_id SERIAL,
	email VARCHAR(320) UNIQUE NOT NULL,
	token VARCHAR UNIQUE NOT NULL,
	expiry TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY (forget_password_user_id)
);

CREATE TABLE Profiles (
	user_id UUID,
	nickname VARCHAR NOT NULL,
	profile_picture VARCHAR,
	about TEXT,
	gender VARCHAR CONSTRAINT gender_enum CHECK (gender IN('m', 'f', 'o', 'u')) DEFAULT 'u',
	/* m = male, f = female, o = others, u = undisclosed */
	dob TIMESTAMPTZ,
	occupation TEXT,
	phone VARCHAR,
	facebook_link VARCHAR,
	twitter_link VARCHAR,
	instagram_link VARCHAR,
	linkedin_link VARCHAR,
	is_verified BOOLEAN NOT NULL DEFAULT FALSE,
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY (user_id),
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE
);

CREATE TABLE Skills (
	skill_id SERIAL,
	skill VARCHAR UNIQUE NOT NULL,
	skill_group VARCHAR,
	skill_description VARCHAR,
	PRIMARY KEY (skill_id)
);

CREATE TABLE ProfileSkills (
	profile_skill_id SERIAL,
	user_id UUID NOT NULL,
	skill_id INTEGER NOT NULL,
	PRIMARY KEY (profile_skill_id),
	UNIQUE (user_id, skill_id),
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
	FOREIGN KEY (skill_id) REFERENCES Skills ON DELETE CASCADE
);

CREATE TABLE Organisations (
	organisation_id SERIAL,
	name VARCHAR NOT NULL,
	organisation_type VARCHAR,
	about TEXT,
	website_url VARCHAR,
	phone VARCHAR,
	email VARCHAR(320),
	owned_by VARCHAR,
	locations VARCHAR[],
	story TEXT,
	is_verified BOOLEAN NOT NULL DEFAULT FALSE,
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	deleted_on TIMESTAMPTZ,
	PRIMARY KEY (organisation_id)
);

CREATE TABLE Memberships (
	membership_id SERIAL,
	organisation_id INTEGER NOT NULL,
	user_id UUID NOT NULL,
	is_owner BOOLEAN NOT NULL DEFAULT FALSE,
	joined_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY (membership_id),
	UNIQUE (organisation_id, user_id),
	FOREIGN KEY (organisation_id) REFERENCES Organisations ON DELETE CASCADE,
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE
);

CREATE TABLE Programmes (
	programme_id SERIAL,
	organisation_id INTEGER NOT NULL,
	title VARCHAR NOT NULL,
	about TEXT,
	media_url VARCHAR[],
	PRIMARY KEY (programme_id),
	FOREIGN KEY (organisation_id) REFERENCES Organisations ON DELETE CASCADE
);

CREATE TABLE Listings (
	listing_id UUID,
	organisation_id INTEGER,
	created_by UUID,
	title VARCHAR NOT NULL,
	category VARCHAR NOT NULL,
	about TEXT,
	tagline VARCHAR,
	mission TEXT,
	listing_url VARCHAR,
	listing_email VARCHAR(320),
	listing_status VARCHAR,
	pic1 VARCHAR,
	pic2 VARCHAR,
	pic3 VARCHAR,
	pic4 VARCHAR,
	pic5 VARCHAR,
	is_published BOOLEAN NOT NULL DEFAULT FALSE,
	is_verified BOOLEAN NOT NULL DEFAULT FALSE,
	start_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	end_date TIMESTAMPTZ,
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	deleted_on TIMESTAMPTZ,
	PRIMARY KEY (listing_id),
	FOREIGN KEY (organisation_id) REFERENCES Organisations ON DELETE SET NULL,
	FOREIGN KEY (created_by) REFERENCES Users (user_id) ON DELETE SET NULL
);

CREATE TABLE ListingStories (
	listing_id UUID,
	overview TEXT,
	problem TEXT,
	solution TEXT,
	outcome TEXT,
	PRIMARY KEY (listing_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE FeaturedListings (
	featured_listing_id SERIAL,
	listing_id UUID UNIQUE NOT NULL,
	PRIMARY KEY (featured_listing_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE HashTags (
	hashtag_id SERIAL,
	listing_id UUID NOT NULL,
	tag VARCHAR NOT NULL,
	PRIMARY KEY (hashtag_id),
	UNIQUE (listing_id, tag),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingSkills (
	listing_skill_id SERIAL,
	listing_id UUID NOT NULL,
	skill_id INTEGER NOT NULL,
	PRIMARY KEY (listing_skill_id),
	UNIQUE (listing_id, skill_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE,
	FOREIGN KEY (skill_id) REFERENCES Skills ON DELETE CASCADE
);


/* Jobs for a particular listing */
CREATE TABLE Jobs (
	job_id SERIAL,
	listing_id UUID NOT NULL,
	job_title VARCHAR NOT NULL,
	job_description TEXT,
	deleted_on TIMESTAMPTZ,
	PRIMARY KEY (job_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE FAQs (
	faq_id SERIAL,
	listing_id UUID NOT NULL,
	question TEXT NOT NULL,
	answer TEXT,
	PRIMARY KEY (faq_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Likes (
	like_id SERIAL,
	user_id UUID NOT NULL,
	listing_id UUID NOT NULL,
	PRIMARY KEY (like_id),
	UNIQUE (user_id, listing_id),
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingAdmins (
	listing_admin_id SERIAL,
	user_id UUID NOT NULL,
	listing_id UUID NOT NULL,
	PRIMARY KEY (listing_admin_id),
	UNIQUE (user_id, listing_id),
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Participants (
	participant_id SERIAL,
	listing_id UUID NOT NULL,
	user_id UUID NOT NULL,
	joined_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	end_on TIMESTAMPTZ,
	PRIMARY KEY (participant_id),
	UNIQUE (listing_id, user_id),
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Subscriptions (
	subscription_id SERIAL,
	user_id UUID NOT NULL,
	listing_id UUID NOT NULL,
	PRIMARY KEY (subscription_id),
	UNIQUE (user_id, listing_id),
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE CASCADE,
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Milestones (
	milestone_id SERIAL,
	listing_id UUID NOT NULL,
	description TEXT,
	date TIMESTAMPTZ,
	PRIMARY KEY (milestone_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingUpdates (
	listing_update_id SERIAL,
	listing_id UUID NOT NULL,
	description TEXT,
	pic1 VARCHAR,
	pic2 VARCHAR,
	pic3 VARCHAR,
	pic4 VARCHAR,
	pic5 VARCHAR,
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY (listing_update_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingComments (
	listing_comment_id SERIAL,
	listing_id UUID,
	user_id UUID,
	comment TEXT,
	reply_to_id INTEGER,
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	deleted_on TIMESTAMPTZ,
	PRIMARY KEY (listing_comment_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE SET NULL,
	FOREIGN KEY (user_id) REFERENCES Users ON DELETE SET NULL,
	FOREIGN KEY (reply_to_id) REFERENCES ListingComments (listing_comment_id) ON DELETE SET NULL
);

CREATE TABLE Locations (
	location_id SERIAL,
	LOCATION VARCHAR UNIQUE NOT NULL,
	PRIMARY KEY (location_id)
);

CREATE TABLE ListingLocations (
	listing_location_id SERIAL,
	listing_id UUID NOT NULL,
	location_id INTEGER NOT NULL,
	PRIMARY KEY (listing_location_id),
	UNIQUE (listing_id, location_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE,
	FOREIGN KEY (location_id) REFERENCES Locations ON DELETE CASCADE
);
