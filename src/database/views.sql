DROP VIEW IF EXISTS featuredlistingview CASCADE;
DROP VIEW IF EXISTS listingview CASCADE;
DROP VIEW IF EXISTS organisationview CASCADE;
DROP VIEW IF EXISTS jobview CASCADE;
DROP VIEW IF EXISTS listingcommentview CASCADE;

CREATE VIEW listingview AS WITH combinedlistinglocation AS (
	SELECT
		ls.listing_id,
		ARRAY_AGG(lo.location) AS location,
		ARRAY_AGG(lo.location_id) AS location_ids
	FROM
		listing ls
		JOIN (listinglocation lsl
			JOIN location lo ON lsl.location_id = lo.location_id) ON ls.listing_id = lsl.listing_id
	GROUP BY
		ls.listing_id
)
SELECT
	l.*,
	p.nickname,
	p.profile_picture,
	cll.locations,
	cll.location_ids,
	to_tsvector(l.title || ' ' || l.category || ' ' || array_to_string(cll.locations::text[], ' ')) AS keyword_vector
FROM
	listing l
	LEFT JOIN combinedlistinglocation cll ON l.listing_id = cll.listing_id
	LEFT JOIN profile p ON l.created_by = p.user_id
WHERE
	deleted_on IS NULL;

CREATE VIEW organisationview AS
	SELECT *
  	FROM organisation
  	WHERE deleted_on IS NULL;

CREATE VIEW jobview AS
  	SELECT *
  	FROM job
  	WHERE deleted_on IS NULL;

CREATE VIEW listingcommentview AS
	SELECT lc.*, p.nickname, p.profile_picture
	FROM listingcomment lc
	LEFT JOIN profile p
	ON lc.user_id = p.user_id
	WHERE lc.deleted_on IS NULL;
  
CREATE VIEW featuredlistingview AS
	SELECT *
	FROM listingview
	WHERE is_featured = TRUE;
