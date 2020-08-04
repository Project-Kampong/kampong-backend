const { db, parseSqlUpdateStmt } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const { cleanseData } = require('../utils/dbHelper');

/**
 * @desc    Get all listing stories
 * @route   GET /api/listings/stories
 * @access  Public
 */
exports.getListingStories = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listing story
 * @route   GET /api/listings/stories/:id
 * @access  Public
 */
exports.getListingStory = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM listingstories WHERE listing_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Update single listing story
 * @route   PUT /api/listings/stories/:id
 * @access  Admin/Owner
 */
exports.updateListingStory = asyncHandler(async (req, res, next) => {
  // check if listing exists
  const listing = await db.one(
    'SELECT * FROM listings WHERE listing_id = $1',
    req.params.id
  );
  // if non-admin user, throw 403 if not updating self
  if (req.user.role !== 'admin' && req.user.user_id !== listing.created_by) {
    return next(
      new ErrorResponse(
        `Not allowed to update story of listing which you did not create`,
        403
      )
    );
  }

  const { overview, problem, solution, outcome } = req.body;

  const data = {
    overview,
    problem,
    solution,
    outcome,
  };

  cleanseData(data);

  const updateListingStoryQuery = parseSqlUpdateStmt(
    data,
    'listingstories',
    'WHERE listing_id = $1 RETURNING $2:name',
    [req.params.id, data]
  );

  const rows = await db.one(updateListingStoryQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});
