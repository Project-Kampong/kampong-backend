const { db, parseSqlUpdateStmt } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const { cleanseData } = require('../utils/dbHelper');

/**
 * @desc    Get all milestones
 * @route   GET /api/milestones
 * @desc    Get all milestones for a listing
 * @route   GET /api/listings/:listing_id/milestones
 * @access  Public
 */
exports.getMilestones = asyncHandler(async (req, res, next) => {
  if (req.params.listing_id) {
    // returns 404 error response if listing not found
    const milestones = await db.many(
      'SELECT l.listing_id, m.milestone_id, description, m.date FROM listings l LEFT JOIN milestones m ON l.listing_id = m.listing_id WHERE l.listing_id = $1',
      req.params.listing_id
    );

    // remove null milestone_id from result
    const data = milestones.filter(m => m.milestone_id !== null);

    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  }

  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single milestone
 * @route   GET /api/milestones/:id
 * @access  Public
 */
exports.getMilestone = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM milestones WHERE milestone_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Create milestone
 * @route   POST /api/milestones
 * @access  Owner/Admin
 */
exports.createMilestone = asyncHandler(async (req, res, next) => {
  const { listing_id, description, date } = req.body;

  const data = {
    listing_id,
    description,
    date,
  };

  cleanseData(data);

  // if non-admin ,check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(req.user.user_id, listing_id);
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to create milestones for this listing`,
          403
        )
      );
    }
  }

  const rows = await db.one(
    'INSERT INTO milestones (${this:name}) VALUES (${this:csv}) RETURNING *',
    data
  );

  res.status(201).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Update single milestone
 * @route   PUT /api/milestones/:id
 * @access  Owner/Admin
 */
exports.updateMilestone = asyncHandler(async (req, res, next) => {
  // check if milestone exists
  const milestone = await db.one(
    'SELECT * FROM milestones WHERE milestone_id = $1',
    req.params.id
  );

  // if non-admin, check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(
      req.user.user_id,
      milestone.listing_id
    );
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to update milestones in this listing`,
          403
        )
      );
    }
  }

  const { description, date } = req.body;

  const data = {
    description,
    date,
  };

  cleanseData(data);

  const updateMilestoneQuery = parseSqlUpdateStmt(
    data,
    'milestones',
    'WHERE milestone_id = $1 RETURNING *',
    [req.params.id]
  );

  const rows = await db.one(updateMilestoneQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Delete single milestone
 * @route   DELETE /api/milestones/:id
 * @access  Owner/Admin
 */
exports.deleteMilestone = asyncHandler(async (req, res, next) => {
  // check if milestone exists
  const milestone = await db.one(
    'SELECT * FROM milestones WHERE milestone_id = $1',
    req.params.id
  );

  // if non-admin, check if owner of listing
  if (req.user.role !== 'admin') {
    const listingOwner = await isListingOwner(
      req.user.user_id,
      milestone.listing_id
    );
    if (!listingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to delete milestones in this listing`,
          403
        )
      );
    }
  }

  const rows = await db.one(
    'DELETE FROM milestones WHERE milestone_id = $1 RETURNING *',
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
