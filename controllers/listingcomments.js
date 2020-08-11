const { db } = require('../db/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const { cleanseData, parseSqlUpdateStmt } = require('../utils/dbHelper');

/**
 * @desc    Get all listing comments
 * @route   GET /api/listing-comments
 * @desc    Get all listing comments for a listing
 * @route   GET /api/listings/:listing_id/listing-comments
 * @desc    Get all listing comments for a user
 * @route   GET /api/users/:user_id/listing-comments
 * @access  Public
 */
exports.getListingComments = asyncHandler(async (req, res) => {
  if (req.params.listing_id) {
    // return 404 error response if listing not found
    const listing = await db.one(
      'SELECT * FROM Listings WHERE listing_id = $1',
      req.params.listing_id
    );

    const listingComments = await db.manyOrNone(
      'SELECT * FROM ListingComments WHERE listing_id = $1',
      req.params.listing_id
    );

    return res.status(200).json({
      success: true,
      count: listingComments.length,
      data: listingComments,
    });
  }

  if (req.params.user_id) {
    // return 404 error response if user not found
    const user = await db.one(
      'SELECT * FROM Users WHERE user_id = $1',
      req.params.user_id
    );

    const listingComments = await db.manyOrNone(
      'SELECT * FROM ListingComments WHERE user_id = $1',
      req.params.user_id
    );

    return res.status(200).json({
      success: true,
      count: listingComments.length,
      data: listingComments,
    });
  }

  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listing comment (identified by listing comment id)
 * @route   GET /api/listing-comments/:listing_comment_id
 * @access  Public
 */
exports.getListingComment = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM ListingComments WHERE listing_comment_id = $1',
    req.params.listing_comment_id
  );

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Add comment to listing
 * @route   POST /api/listing-comments
 * @access  Private
 */
exports.createListingComment = asyncHandler(async (req, res, next) => {
  const { listing_id, comment, reply_to_id } = req.body;

  const data = {
    listing_id,
    user_id: req.user.user_id,
    comment,
    reply_to_id,
  };

  cleanseData(data);

  const rows = await db.one(
    'INSERT INTO ListingComments (${this:name}) VALUES (${this:csv}) RETURNING *',
    data
  );

  res.status(201).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Update single listing comment (identified by listing comment id)
 * @route   PUT /api/listing-comments/:listing_comment_id
 * @access  Admin/Owner/Private
 */
exports.updateListingComment = asyncHandler(async (req, res, next) => {
  // check for non-admin, must be listing owner, else must update own comment only
  if (req.user.role === 'user') {
    const listingId = await db.one(
      'SELECT listing_id FROM ListingComments WHERE listing_comment_id = $1',
      req.params.listing_comment_id
    );

    const isListingOwner = checkListingOwner(req.user.user_id, listingId);

    const isCommentOwner = checkCommentOwner(
      req.user.user_id,
      req.params.listing_comment_id
    );

    // if not listing owner and user_id to be updated is not self, 403 response
    if (!(await isListingOwner) && !(await isCommentOwner)) {
      return next(
        new ErrorResponse(
          `Not authorised to update other comments in this listing`,
          403
        )
      );
    }
  }

  const { comment } = req.body;

  const data = {
    comment,
  };

  cleanseData(data);

  const updateListingCommentQuery = parseSqlUpdateStmt(
    data,
    'listingcomments',
    'WHERE listing_comment_id = $1 RETURNING *',
    req.params.listing_comment_id
  );

  const rows = await db.one(updateListingCommentQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Delete single listing comment (identified by listing comment id)
 * @route   DELETE /api/listing-comments/:listing_comment_id
 * @access  Admin/Owner/Private
 */
exports.deleteListingComment = asyncHandler(async (req, res, next) => {
  // check for non-admin, must be listing owner, else must delete own comment only
  if (req.user.role === 'user') {
    const listingId = await db.one(
      'SELECT listing_id FROM ListingComments WHERE listing_comment_id = $1',
      req.params.listing_comment_id
    );

    const isListingOwner = checkListingOwner(req.user.user_id, listingId);

    const isCommentOwner = checkCommentOwner(
      req.user.user_id,
      req.params.listing_comment_id
    );

    // if not listing owner and user_id to be updated is not self, 403 response
    if (!(await isListingOwner) && !(await isCommentOwner)) {
      return next(
        new ErrorResponse(
          `Not authorised to delete other comments in this listing`,
          403
        )
      );
    }
  }

  const rows = await db.one(
    'DELETE FROM ListingComments WHERE listing_comment_id = $1 RETURNING *',
    req.params.listing_comment_id
  );

  res.status(200).json({
    success: true,
    data: rows,
  });
});

const checkListingOwner = async (userId, listingId) => {
  const owner = await db.one(
    'SELECT created_by FROM Listings WHERE listing_id = $1',
    listingId
  );
  return parseInt(userId) === owner.created_by;
};

const checkCommentOwner = async (userId, listingCommentId) => {
  const owner = await db.one(
    'SELECT user_id FROM ListingComments WHERE listing_comment_id = $1',
    listingCommentId
  );
  return parseInt(userId) === owner.user_id;
};
