const { hashPassword } = require('../utils/auth.js');
const { db, parseSqlUpdateStmt } = require('../config/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const { cleanseData } = require('../utils/dbHelper');

/**
 * @desc    Get all profiles
 * @route   GET /api/profiles
 * @access  Public
 */
exports.getProfiles = asyncHandler(async (req, res) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single profile
 * @route   GET /api/profiles/:id
 * @access  Public
 */
exports.getProfile = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM profiles WHERE user_id = $1',
    req.params.id
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Update single profile
 * @route   PUT /api/profiles/:id
 * @access  Admin/Private
 */
exports.updateProfile = asyncHandler(async (req, res, next) => {
  // if non-admin user, throw 403 if not updating self
  if (req.user.role !== 'admin' && req.user.user_id !== req.params.id) {
    return next(
      new ErrorResponse(`Not allowed to update other user's profile`, 403)
    );
  }

  const {
    nickname,
    about,
    gender,
    dob,
    interest,
    phone,
    facebook_link,
    twitter_link,
    instagram_link,
    linkedin_link,
  } = req.body;

  const data = {
    nickname,
    about,
    gender,
    dob,
    interest,
    phone,
    facebook_link,
    twitter_link,
    instagram_link,
    linkedin_link,
  };

  cleanseData(data);

  const updateProfileQuery = parseSqlUpdateStmt(
    data,
    'profiles',
    'WHERE user_id = $1 RETURNING *',
    [req.params.id]
  );

  const rows = await db.one(updateProfileQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Verify single profile
 * @route   PUT /api/profiles/:id
 * @access  Admin
 */
exports.verifyProfile = asyncHandler(async (req, res, next) => {
  // check if user exists
  const isValidUser = await db.oneOrNone(
    'SELECT * FROM profiles WHERE user_id = $1',
    req.params.id
  );

  // return bad request response if invalid user
  if (!isValidUser) {
    return next(new ErrorResponse(`User does not exist`, 400));
  }

  const { is_verified } = req.body;

  const data = {
    is_verified,
  };

  cleanseData(data);

  const updateIsVerifiedQuery = parseSqlUpdateStmt(
    data,
    'profiles',
    'WHERE user_id = $1 RETURNING *',
    [req.params.id]
  );

  const rows = await db.one(updateIsVerifiedQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Upload new or update profile picture
 * @route   PUT /api/profiles/:id/photo
 * @access  Admin/Private
 */
exports.uploadPic = asyncHandler(async (req, res, next) => {
  // if non-admin user, throw 403 if not updating self
  if (req.user.role !== 'admin' && req.user.user_id !== req.params.id) {
    return next(
      new ErrorResponse(
        `Not allowed to update other user's profile picture`,
        403
      )
    );
  }

  const profile_picture = req.file.location;

  const data = {
    profile_picture,
  };

  const updateProfileQuery = parseSqlUpdateStmt(
    data,
    'profiles',
    'WHERE user_id = $1 RETURNING profile_picture',
    req.params.id
  );

  const rows = await db.one(updateProfileQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});
