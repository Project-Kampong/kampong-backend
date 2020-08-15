const moment = require('moment');
const { db } = require('../db/db');
const { asyncHandler } = require('../middleware');
const {
  cleanseData,
  ErrorResponse,
  hashDecode,
  parseSqlUpdateStmt,
} = require('../utils');

/**
 * @desc    Get all listings
 * @route   GET /api/listings
 * @access  Public
 */
exports.getListings = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get all listings including soft deletes
 * @route   GET /api/listings/all
 * @access  Admin
 */
exports.getListingsAll = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listing by listing id
 * @route   GET /api/listings/:id/raw
 * @access  Public
 */
exports.getListing = asyncHandler(async (req, res, next) => {
  const rows = await db.one(
    'SELECT * FROM listings WHERE listing_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Get all listings owned by particular user
 * @route   GET /api/users/:user_id/listings/owner
 * @access  Public
 */
exports.getAllListingsOwnedByUser = asyncHandler(async (req, res, next) => {
  const userId = req.params.user_id;
  // check if user exists
  const user = await db.one('SELECT * FROM Users WHERE user_id = $1', userId);

  const rows = await db.manyOrNone(
    'SELECT * FROM Listings WHERE created_by = $1',
    userId
  );

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Get single listing by hashId
 * @route   GET /api/listings/:hashId
 * @access  Public
 */
exports.getListingByHashId = asyncHandler(async (req, res, next) => {
  const decodedId = hashDecode(req.params.hashId)[0];
  if (!decodedId) {
    return next(new ErrorResponse('Invalid listing ID', 400));
  }
  const rows = await db.one(
    'SELECT * FROM listings WHERE listing_id = $1',
    decodedId
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Create listing and associated listing story
 * @route   POST /api/listings
 * @access  Private
 */
exports.createListing = asyncHandler(async (req, res) => {
  const {
    organisation_id, // NOTE: do not use this field until organisations endpoint is implemented
    title,
    category,
    about,
    tagline,
    mission,
    listing_url,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    is_published,
    start_date,
    end_date,
  } = req.body;

  const data = {
    organisation_id,
    title,
    category,
    about,
    tagline,
    mission,
    listing_url,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    is_published,
    start_date,
    end_date,
  };

  // Add logged in user as creator of listing
  data.created_by = req.user.user_id;

  // remove undefined values in json object
  cleanseData(data);

  /**
   * SQL Transaction, creating listing and associated listing story
   * Returns an array of 2 json:
   * 1st json: Listing entry
   * 2nd json: Listing story entry
   */
  const rows = await db.tx(async query => {
    const createListing = await query.one(
      'INSERT INTO listings (${this:name}) VALUES (${this:csv}) RETURNING *',
      data
    );
    const createListingStory = await query.one(
      'INSERT INTO listingstories (listing_id) VALUES ($1) RETURNING *',
      createListing.listing_id
    );
    return query.batch([createListing, createListingStory]);
  });

  res.status(201).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Update single listing
 * @route   PUT /api/listings/:id
 * @access  Admin/Owner
 */
exports.updateListing = asyncHandler(async (req, res, next) => {
  // check if listing exists
  const listing = await db.one(
    'SELECT * FROM listings WHERE listing_id = $1',
    req.params.id
  );

  // Unauthorised if neither admin nor listing owner
  if (!(req.user.role === 'admin' || req.user.user_id === listing.created_by)) {
    return next(
      new ErrorResponse(`User not authorised to update this listing`, 403)
    );
  }

  const {
    organisation_id, // NOTE: do not use this field until organisations endpoint is implemented
    title,
    category,
    about,
    tagline,
    mission,
    listing_url,
    is_published,
    start_date,
    end_date,
  } = req.body;

  const data = {
    organisation_id,
    title,
    category,
    about,
    tagline,
    mission,
    listing_url,
    is_published,
    start_date,
    end_date,
  };

  // remove undefined items in json
  cleanseData(data);

  const updateListingQuery = parseSqlUpdateStmt(
    data,
    'listings',
    'WHERE listing_id = $1 RETURNING $2:name',
    [req.params.id, data]
  );

  const rows = await db.one(updateListingQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Verify single listing
 * @route   PUT /api/listings/:id/verify
 * @access  Admin
 */
exports.verifyListing = asyncHandler(async (req, res, next) => {
  // check if listing exists
  const isValidListing = await db.one(
    'SELECT * FROM listings WHERE listing_id = $1',
    req.params.id
  );

  const { is_verified } = req.body;

  const data = { is_verified };

  const verifyListingQuery = parseSqlUpdateStmt(
    data,
    'listings',
    'WHERE listing_id = $1 RETURNING $2:name',
    [req.params.id, data]
  );

  const rows = await db.one(verifyListingQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Deactivate (soft delete) single listing
 * @route   PUT /api/listings/:id/deactivate
 * @access  Admin/Owner
 */

exports.deactivateListing = asyncHandler(async (req, res, next) => {
  // check if listing exists
  const listing = await db.one(
    'SELECT * FROM listings WHERE listing_id = $1',
    req.params.id
  );

  // Unauthorised if neither admin nor listing owner
  if (!(req.user.role === 'admin' || req.user.user_id === listing.created_by)) {
    return next(
      new ErrorResponse(`User not authorised to delete this listing`, 403)
    );
  }

  const rows = await db.one(
    'UPDATE listings SET deleted_on=$2 WHERE listing_id = $1 RETURNING *',
    [req.params.id, moment().format('YYYY-MM-DD HH:mm:ss.000')]
  );

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Delete single listing and associated listing story
 * @route   DELETE /api/listings/:id
 * @access  Admin
 */
exports.deleteListing = asyncHandler(async (req, res, next) => {
  // check if listing exists
  const listing = await db.one(
    'SELECT * FROM listings WHERE listing_id = $1',
    req.params.id
  );

  // Unauthorised if not admin
  if (req.user.role !== 'admin') {
    return next(
      new ErrorResponse(`User not authorised to delete this listing`, 403)
    );
  }

  const rows = await db.one(
    'DELETE FROM listings WHERE listing_id = $1 RETURNING *',
    req.params.id
  );

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Upload multiple (up to 5) new pictures for a particular listing (identified by listing id)
 * @route   PUT /api/listings/:id/upload-photo
 * @access  Admin/Owner
 */
exports.uploadListingPics = asyncHandler(async (req, res, next) => {
  // check if listing exists
  const listing = await db.one(
    'SELECT * FROM listings WHERE listing_id = $1',
    req.params.id
  );

  // Unauthorised if neither admin nor listing owner
  if (!(req.user.role === 'admin' || req.user.user_id === listing.created_by)) {
    return next(
      new ErrorResponse(
        `User not authorised to upload photo for this listing`,
        403
      )
    );
  }

  // get mapping of pic number to original filename from req body
  const { pic1, pic2, pic3, pic4, pic5 } = req.body;

  const data = {
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
  };
  cleanseData(data);

  const updateListingQuery = parseSqlUpdateStmt(
    data,
    'listings',
    'WHERE listing_id = $1 RETURNING $2:name',
    [req.params.id, data]
  );

  const rows = await db.one(updateListingQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});
