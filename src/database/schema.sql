DROP EXTENSION IF EXISTS pg_stat_statements CASCADE;

DROP TABLE IF EXISTS user CASCADE;

DROP TABLE IF EXISTS pendinguser CASCADE;

DROP TABLE IF EXISTS forgetpassworduser CASCADE;

DROP TABLE IF EXISTS profile CASCADE;

DROP TABLE IF EXISTS organisation CASCADE;

DROP TABLE IF EXISTS programme CASCADE;

DROP TABLE IF EXISTS Memberships CASCADE;

DROP TABLE IF EXISTS category CASCADE;

DROP TABLE IF EXISTS Listings CASCADE;

DROP TABLE IF EXISTS listingorganisation CASCADE;

DROP TABLE IF EXISTS ListingStories CASCADE;

DROP TABLE IF EXISTS HashTags CASCADE;

DROP TABLE IF EXISTS Jobs CASCADE;

DROP TABLE IF EXISTS FAQs CASCADE;

DROP TABLE IF EXISTS Likes CASCADE;

DROP TABLE IF EXISTS ListingAdmins CASCADE;

DROP TABLE IF EXISTS Participants CASCADE;

DROP TABLE IF EXISTS Milestones CASCADE;

DROP TABLE IF EXISTS ListingUpdates CASCADE;

DROP TABLE IF EXISTS ListingComments CASCADE;

DROP TABLE IF EXISTS Locations CASCADE;

DROP TABLE IF EXISTS ListingLocations CASCADE;

CREATE EXTENSION pg_stat_statements;

CREATE TABLE user (
	user_id VARCHAR,
	first_name VARCHAR NOT NULL,
	last_name VARCHAR,
	email VARCHAR(320) UNIQUE NOT NULL,
	password VARCHAR NOT NULL,
	role VARCHAR NOT NULL CHECK (role IN ('admin', 'user')) DEFAULT 'user',
	is_activated BOOLEAN NOT NULL DEFAULT FALSE,
	PRIMARY KEY (user_id)
);

CREATE TABLE pendinguser (
	pending_user_id SERIAL,
	user_id VARCHAR UNIQUE NOT NULL,
	token VARCHAR UNIQUE NOT NULL,
	PRIMARY KEY (pending_user_id),
	FOREIGN KEY (user_id) REFERENCES user ON DELETE CASCADE
);

CREATE TABLE forgetpassworduser (
	forgetpass_user_id SERIAL,
	email VARCHAR(320) UNIQUE NOT NULL,
	token VARCHAR UNIQUE NOT NULL,
	expiry TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY (forgetpass_user_id)
);

CREATE TABLE profile (
	user_id VARCHAR,
	nickname VARCHAR NOT NULL,
	profile_picture VARCHAR,
	about TEXT,
	gender VARCHAR,
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
	FOREIGN KEY (user_id) REFERENCES user ON DELETE CASCADE
);

CREATE TABLE organisation (
	organisation_id UUID,
	name VARCHAR NOT NULL,
	organisation_type VARCHAR,
	about TEXT,
	website_url VARCHAR,
	phone VARCHAR,
	email VARCHAR(320),
	address VARCHAR(320),
	owned_by VARCHAR,
	locations VARCHAR[],
	story TEXT,
	facebook_link VARCHAR,
	twitter_link VARCHAR,
	instagram_link VARCHAR,
	banner_photo VARCHAR,
	profile_photo VARCHAR,
	additional_photos VARCHAR[],
	is_verified BOOLEAN NOT NULL DEFAULT FALSE,
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	deleted_on TIMESTAMPTZ DEFAULT NULL,
	PRIMARY KEY (organisation_id)
);

CREATE TABLE Memberships (
	membership_id SERIAL,
	organisation_id UUID NOT NULL,
	user_id VARCHAR NOT NULL,
	is_owner BOOLEAN NOT NULL DEFAULT FALSE,
	joined_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY (membership_id),
	UNIQUE (organisation_id, user_id),
	FOREIGN KEY (organisation_id) REFERENCES organisation ON DELETE CASCADE,
	FOREIGN KEY (user_id) REFERENCES user ON DELETE CASCADE
);

CREATE TABLE programme (
	programme_id SERIAL,
	organisation_id UUID NOT NULL,
	title VARCHAR NOT NULL,
	about TEXT,
	media_url VARCHAR[],
	PRIMARY KEY (programme_id),
	FOREIGN KEY (organisation_id) REFERENCES organisation ON DELETE CASCADE
);

CREATE TABLE category (
	category_id SERIAL,
	category_name VARCHAR UNIQUE NOT NULL,
	category_group VARCHAR,
	PRIMARY KEY (category_id)
);

CREATE TABLE Listings (
	listing_id VARCHAR,
	created_by VARCHAR,
	title VARCHAR NOT NULL,
	category VARCHAR,
	about TEXT,
	tagline VARCHAR,
	mission TEXT,
	listing_url VARCHAR,
	listing_email VARCHAR(320),
	listing_status VARCHAR,
	pics VARCHAR[],
	is_published BOOLEAN NOT NULL DEFAULT FALSE,
	is_verified BOOLEAN NOT NULL DEFAULT FALSE,
	is_featured BOOLEAN NOT NULL DEFAULT FALSE,
	start_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	end_date TIMESTAMPTZ,
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	deleted_on TIMESTAMPTZ DEFAULT NULL,
	PRIMARY KEY (listing_id),
	FOREIGN KEY (category) REFERENCES category (category_name) ON DELETE SET NULL,
	FOREIGN KEY (created_by) REFERENCES user (user_id) ON DELETE SET NULL
);

CREATE TABLE listingorganisation (
	listing_organisation_id SERIAL,
	listing_id VARCHAR NOT NULL,
	organisation_id UUID NOT NULL,
	PRIMARY KEY (listing_organisation_id),
	UNIQUE (listing_id, organisation_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE,
	FOREIGN KEY (organisation_id) REFERENCES organisation ON DELETE CASCADE
);

CREATE TABLE ListingStories (
	listing_id VARCHAR,
	overview TEXT,
	problem TEXT,
	solution TEXT,
	outcome TEXT,
	PRIMARY KEY (listing_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE HashTags (
	hashtag_id SERIAL,
	listing_id VARCHAR NOT NULL,
	tag VARCHAR NOT NULL,
	PRIMARY KEY (hashtag_id),
	UNIQUE (listing_id, tag),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

/* Jobs for a particular listing */
CREATE TABLE Jobs (
	job_id SERIAL,
	listing_id VARCHAR NOT NULL,
	job_title VARCHAR NOT NULL,
	job_description TEXT,
	deleted_on TIMESTAMPTZ DEFAULT NULL,
	PRIMARY KEY (job_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE FAQs (
	faq_id SERIAL,
	listing_id VARCHAR NOT NULL,
	question TEXT NOT NULL,
	answer TEXT,
	PRIMARY KEY (faq_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Likes (
	like_id SERIAL,
	user_id VARCHAR NOT NULL,
	listing_id VARCHAR NOT NULL,
	PRIMARY KEY (like_id),
	UNIQUE (user_id, listing_id),
	FOREIGN KEY (user_id) REFERENCES user ON DELETE CASCADE,
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingAdmins (
	listing_admin_id SERIAL,
	user_id VARCHAR NOT NULL,
	listing_id VARCHAR NOT NULL,
	PRIMARY KEY (listing_admin_id),
	UNIQUE (user_id, listing_id),
	FOREIGN KEY (user_id) REFERENCES user ON DELETE CASCADE,
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Participants (
	participant_id SERIAL,
	listing_id VARCHAR NOT NULL,
	user_id VARCHAR NOT NULL,
	joined_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	end_on TIMESTAMPTZ,
	PRIMARY KEY (participant_id),
	UNIQUE (listing_id, user_id),
	FOREIGN KEY (user_id) REFERENCES user ON DELETE CASCADE,
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE Milestones (
	milestone_id SERIAL,
	listing_id VARCHAR NOT NULL,
	description TEXT NOT NULL,
	date TIMESTAMPTZ,
	PRIMARY KEY (milestone_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingUpdates (
	listing_update_id SERIAL,
	listing_id VARCHAR NOT NULL,
	description TEXT NOT NULL,
	pics VARCHAR[],
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	PRIMARY KEY (listing_update_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE
);

CREATE TABLE ListingComments (
	listing_comment_id SERIAL,
	listing_id VARCHAR,
	user_id VARCHAR,
	COMMENT TEXT,
	reply_to_id INTEGER,
	created_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_on TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	deleted_on TIMESTAMPTZ,
	PRIMARY KEY (listing_comment_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE SET NULL,
	FOREIGN KEY (user_id) REFERENCES user ON DELETE SET NULL,
	FOREIGN KEY (reply_to_id) REFERENCES ListingComments (listing_comment_id) ON DELETE SET NULL
);

CREATE TABLE Locations (
	location_id SERIAL,
	location VARCHAR,
	zone VARCHAR,
	PRIMARY KEY (location_id)
);

CREATE TABLE ListingLocations (
	listing_location_id SERIAL,
	listing_id VARCHAR NOT NULL,
	location_id INTEGER NOT NULL,
	PRIMARY KEY (listing_location_id),
	UNIQUE (listing_id, location_id),
	FOREIGN KEY (listing_id) REFERENCES Listings ON DELETE CASCADE,
	FOREIGN KEY (location_id) REFERENCES Locations ON DELETE CASCADE
);
