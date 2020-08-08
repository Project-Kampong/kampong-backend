const { db } = require('../db/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const { cleanseData, parseSqlUpdateStmt } = require('../utils/dbHelper');

/**
 * @desc    Get all hashtags
 * @route   GET /api/hashtags
 * @desc    Get all hashtags for a listing
 * @route   GET /api/listings/:listing_id/hashtags
 * @access  Public
 */
exports.getHashtags = asyncHandler(async (req, res, next) => {
  if (req.params.listing_id) {
    // returns 404 error response if listing not found
    const hashtags = await db.many(
      'SELECT l.listing_id, h.hashtag_id, tag FROM listings l LEFT JOIN hashtags h ON l.listing_id = h.listing_id WHERE l.listing_id = $1',
      req.params.listing_id
    );

    // remove null hashtag_id from result
    const data = hashtags.filter(h => h.hashtag_id !== null);

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  }

  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single hashtag
 * @route   GET /api/hashtags/:id
 * @access  Public
 */
exports.getHashtag = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM hashtags WHERE hashtag_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Create hashtag
 * @route   POST /api/hashtags
 * @access  Owner/Admin
 */
exports.createHashtag = asyncHandler(async (req, res, next) => {
  const { listing_id, tag } = req.body;

  const data = {
    listing_id,
    tag,
  };

  cleanseData(data);

  // if non-admin ,check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(req.user.user_id, listing_id);
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to create hashtags for this listing`,
          403
        )
      );
    }
  }

  const rows = await db.one(
    'INSERT INTO hashtags (${this:name}) VALUES (${this:csv}) RETURNING *',
    data
  );

  res.status(201).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Update single hashtag
 * @route   PUT /api/hashtags/:id
 * @access  Owner/Admin
 */
exports.updateHashtag = asyncHandler(async (req, res, next) => {
  // check if hashtag exists
  const hashtag = await db.one(
    'SELECT * FROM hashtags WHERE hashtag_id = $1',
    req.params.id
  );

  // if non-admin, check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(
      req.user.user_id,
      hashtag.listing_id
    );
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to update hashtags for this listing`,
          403
        )
      );
    }
  }

  const { tag } = req.body;

  const data = {
    tag,
  };

  cleanseData(data);

  const updateHashtagQuery = parseSqlUpdateStmt(
    data,
    'hashtags',
    'WHERE hashtag_id = $1 RETURNING *',
    [req.params.id]
  );

  const rows = await db.one(updateHashtagQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Delete single hashtag
 * @route   DELETE /api/hashtags/:id
 * @access  Owner/Admin
 */
exports.deleteHashtag = asyncHandler(async (req, res, next) => {
  // check if hashtag exists
  const hashtag = await db.one(
    'SELECT * FROM hashtags WHERE hashtag_id = $1',
    req.params.id
  );

  // if non-admin, check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(
      req.user.user_id,
      hashtag.listing_id
    );
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to update hashtags for this listing`,
          403
        )
      );
    }
  }

  const rows = await db.one(
    'DELETE FROM hashtags WHERE hashtag_id = $1 RETURNING *',
    req.params.id
  );

  res.status(200).json({
    success: true,
    data: rows,
  });
});

const isListingOwner = async (userId, listingId) => {
  const owner = await db.one(
    'SELECT created_by FROM Listings WHERE listing_id = $1',
    listingId
  );
  return userId === owner.created_by;
};
