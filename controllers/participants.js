const { db, parseSqlUpdateStmt } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const { cleanseData } = require('../utils/dbHelper');

/**
 * @desc    Get all participants
 * @route   GET /api/participants
 * @desc    Get all participants for a listing
 * @route   GET /api/listings/:listing_id/participants
 * @desc    Get all participation for a user profile
 * @route   GET /api/profiles/:user_id/participants
 * @access  Public
 */
exports.getParticipants = asyncHandler(async (req, res) => {
  if (req.params.listing_id) {
    const participants = await db.manyOrNone(
      'SELECT * FROM Participants WHERE listing_id = $1',
      req.params.listing_id
    );

    return res.status(200).json({
      success: true,
      count: participants.length,
      data: participants
    });
  }

  if (req.params.user_id) {
    const participants = await db.manyOrNone(
      'SELECT * FROM Participants WHERE user_id = $1',
      req.params.user_id
    );

    return res.status(200).json({
      success: true,
      count: participants.length,
      data: participants
    });
  }

  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single participant (identified by listing_id and user_id)
 * @route   GET /api/participants/:listing_id/:user_id
 * @access  Public
 */
exports.getParticipant = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM participants WHERE listing_id = $2 AND user_id = $1',
    [req.params.listing_id, req.params.user_id]
  );

  res.status(200).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Add participant to listing
 * @route   POST /api/participants
 * @access  Admin/Owner
 */
exports.createParticipant = asyncHandler(async (req, res, next) => {
  const { listing_id, user_id, joined_on, end_on } = req.body;

  const data = {
    listing_id,
    user_id,
    joined_on,
    end_on
  };

  cleanseData(data);

  // check if user role, must be listing owner
  if (req.user.role === 'user') {
    const isListingOwner = await checkListingOwner(
      req.user.user_id,
      data.listing_id
    );
    if (!isListingOwner) {
      return next(
        new ErrorResponse(
          `Not authorised to add participants to this listing`,
          403
        )
      );
    }
  }

  const rows = await db.one(
    'INSERT INTO participants (${this:name}) VALUES (${this:csv}) RETURNING *',
    data
  );

  res.status(201).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Update single participant (identified by listing_id and user_id)
 * @route   PUT /api/participants/:listing_id/:user_id
 * @access  Admin/Owner/Private
 */
exports.updateParticipant = asyncHandler(async (req, res, next) => {
  // check for user role, must be listing owner, else must update self
  if (req.user.role === 'user') {
    const isListingOwner = await checkListingOwner(
      req.user.user_id,
      req.params.listing_id
    );
    // if not listing owner and user_id to be updated is not self, 403 response
    if (!isListingOwner && req.user.user_id !== req.params.user_id) {
      return next(
        new ErrorResponse(
          `Not authorised to update other participants in this listing`,
          403
        )
      );
    }
  }

  // check if participant exists
  const participantExists = await db.oneOrNone(
    'SELECT * FROM participants WHERE listing_id = $1 AND user_id = $2',
    [req.params.listing_id, req.params.user_id]
  );

  // return bad request response if invalid participant
  if (!participantExists) {
    return next(new ErrorResponse(`Participant does not exist`, 400));
  }

  const { joined_on, end_on } = req.body;

  const data = {
    joined_on,
    end_on
  };

  cleanseData(data);

  const updateParticipantQuery = parseSqlUpdateStmt(
    data,
    'participants',
    'WHERE listing_id = $1 AND user_id = $2 RETURNING *',
    [req.params.listing_id, req.params.user_id]
  );

  const rows = await db.one(updateParticipantQuery);

  res.status(200).json({
    success: true,
    data: rows
  });
});

/**
 * @desc    Delete single participant (identified by listing_id and user_id)
 * @route   DELETE /api/participants/:listing_id/:user_id
 * @access  Admin/Owner/Private
 */
exports.deleteParticipant = asyncHandler(async (req, res, next) => {
  // check for user role, must be listing owner, else must update self
  if (req.user.role === 'user') {
    const isListingOwner = await checkListingOwner(
      req.user.user_id,
      req.params.listing_id
    );
    // if not listing owner and user_id to be updated is not self, 403 response
    if (!isListingOwner && req.user.user_id !== req.params.user_id) {
      return next(
        new ErrorResponse(
          `Not authorised to update other participants in this listing`,
          403
        )
      );
    }
  }

  // check if participant exists
  const participant = await db.oneOrNone(
    'SELECT * FROM participants WHERE listing_id = $1 AND user_id = $2',
    [req.params.listing_id, req.params.user_id]
  );

  // return bad request response if invalid participant
  if (!participant) {
    return next(new ErrorResponse(`Participant does not exist`, 400));
  }

  const rows = await db.one(
    'DELETE FROM participants WHERE listing_id = $1 AND user_id = $2 RETURNING *',
    [req.params.listing_id, req.params.user_id]
  );

  res.status(200).json({
    success: true,
    data: rows
  });
});

const checkListingOwner = async (userId, listingId) => {
  const owner = await db.one(
    'SELECT created_by FROM Listings WHERE listing_id = $1',
    listingId
  );
  return userId === owner.created_by;
};
