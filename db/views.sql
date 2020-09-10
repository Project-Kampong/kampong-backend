DROP VIEW IF EXISTS ListingsView CASCADE;
DROP VIEW IF EXISTS OrganisationsView CASCADE;
DROP VIEW IF EXISTS JobsView CASCADE;

CREATE VIEW ListingsView AS
  SELECT l.*, p.nickname, p.profile_picture, p.phone
  FROM Listings l
  LEFT JOIN Profiles p
  ON l.created_by = p.user_id
  WHERE deleted_on IS NULL;

CREATE VIEW OrganisationsView AS
  SELECT *
  FROM Organisations
  WHERE deleted_on IS NULL;

CREATE VIEW JobsView AS
  SELECT *
  FROM Jobs
  WHERE deleted_on IS NULL;

CREATE VIEW ListingCommentsView AS
  SELECT lc.*, p.nickname, p.profile_picture
  FROM ListingComments lc
  LEFT JOIN Profiles p
  ON lc.user_id = p.user_id
  WHERE lc.deleted_on IS NULL;
  