const moment = require('moment');
const { db } = require('../db/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const { cleanseData, parseSqlUpdateStmt } = require('../utils/dbHelper');

/**
 * @desc    Get all listing updates
 * @route   GET /api/listing-updates
 * @desc    Get all updates for a listing
 * @route   GET /api/listings/:listing_id/listing-updates
 * @access  Public
 */
exports.getListingUpdates = asyncHandler(async (req, res, next) => {
  if (req.params.listing_id) {
    // returns 404 error response if listing not found
    const listingUpdates = await db.many(
      'SELECT l.listing_id, lu.listing_update_id, lu.description, lu.pic1, lu.pic2, lu.pic3, lu.pic4, lu.pic5, lu.created_on, lu.updated_on FROM listings l LEFT JOIN ListingUpdates lu ON l.listing_id = lu.listing_id WHERE l.listing_id = $1',
      req.params.listing_id
    );

    // remove null listing_update_id from result
    const data = listingUpdates.filter(
      updateEntry => updateEntry.listing_update_id !== null
    );

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  }

  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listing update (identified by listing update id)
 * @route   GET /api/listing-updates/:id
 * @access  Public
 */
exports.getListingUpdate = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM ListingUpdates WHERE listing_update_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Create listing update
 * @route   POST /api/listing-updates
 * @access  Owner/Admin
 */
exports.createListingUpdate = asyncHandler(async (req, res, next) => {
  const { listing_id, description, pic1, pic2, pic3, pic4, pic5 } = req.body;

  const data = {
    listing_id,
    description,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
  };

  cleanseData(data);

  // if non-admin ,check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(req.user.user_id, listing_id);
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to create updates for this listing`,
          403
        )
      );
    }
  }

  const rows = await db.one(
    'INSERT INTO ListingUpdates (${this:name}) VALUES (${this:csv}) RETURNING *',
    data
  );

  res.status(201).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Modify single listing update (identified by listing update id)
 * @route   PUT /api/listing-updates/:id
 * @access  Owner/Admin
 */
exports.modifyListingUpdate = asyncHandler(async (req, res, next) => {
  // check if listing update exists
  const listingUpdate = await db.one(
    'SELECT * FROM ListingUpdates WHERE listing_update_id = $1',
    req.params.id
  );

  // if non-admin, check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(
      req.user.user_id,
      listingUpdate.listing_id
    );
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to modify updates in this listing`,
          403
        )
      );
    }
  }

  const { description, pic1, pic2, pic3, pic4, pic5 } = req.body;

  const data = {
    description,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    updated_on: moment().format('YYYY-MM-DD HH:mm:ss.000'),
  };

  cleanseData(data);

  const modifyUpdateQuery = parseSqlUpdateStmt(
    data,
    'listingupdates',
    'WHERE listing_update_id = $1 RETURNING *',
    [req.params.id]
  );

  const rows = await db.one(modifyUpdateQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Delete single update (identified by listing update id)
 * @route   DELETE /api/listing-updates/:id
 * @access  Owner/Admin
 */
exports.deleteListingUpdate = asyncHandler(async (req, res, next) => {
  // check if listing update exists
  const listingUpdate = await db.one(
    'SELECT * FROM ListingUpdates WHERE listing_update_id = $1',
    req.params.id
  );

  // if non-admin, check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(
      req.user.user_id,
      listingUpdate.listing_id
    );
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to delete updates in this listing`,
          403
        )
      );
    }
  }

  const rows = await db.one(
    'DELETE FROM ListingUpdates WHERE listing_update_id = $1 RETURNING *',
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
