const { db } = require('../db/db');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const { cleanseData, parseSqlUpdateStmt } = require('../utils/dbHelper');
const { hashDecode } = require('../utils/hashIdGenerator');

/**
 * @desc    Get all profiles
 * @route   GET /api/users/profiles
 * @access  Public
 */
exports.getProfiles = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single profile by profile id
 * @route   GET /api/users/:user_id/profiles/raw
 * @access  Public
 */
exports.getProfile = asyncHandler(async (req, res) => {
  const rows = await db.one(
    'SELECT * FROM profiles WHERE user_id = $1',
    req.params.user_id
  );
  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Get single profile by hash id
 * @route   GET /api/users/:user_id/profiles
 * @access  Public
 */
exports.getProfileByHashId = asyncHandler(async (req, res, next) => {
  // if not user_id params, go to next middleware
  if (!req.params.user_id) {
    return next();
  }

  const decodedId = hashDecode(req.params.user_id)[0];
  if (!decodedId) {
    return next(new ErrorResponse('Invalid user ID', 400));
  }
  const rows = await db.one(
    'SELECT * FROM profiles WHERE user_id = $1',
    decodedId
  );
  return res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Update single profile
 * @route   PUT /api/users/:user_id/profiles
 * @access  Admin/Private
 */
exports.updateProfile = asyncHandler(async (req, res, next) => {
  // if non-admin user, throw 403 if not updating self
  if (
    req.user.role !== 'admin' &&
    req.user.user_id.toString() !== req.params.user_id
  ) {
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
    'WHERE user_id = $1 RETURNING $2:name',
    [req.params.user_id, data]
  );

  const rows = await db.one(updateProfileQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Verify single profile
 * @route   PUT /api/users/:user_id/profiles/verify
 * @access  Admin
 */
exports.verifyProfile = asyncHandler(async (req, res, next) => {
  // check if user exists
  const user = await db.one(
    'SELECT * FROM profiles WHERE user_id = $1',
    req.params.user_id
  );

  const { is_verified } = req.body;

  const data = {
    is_verified,
  };

  cleanseData(data);

  const updateIsVerifiedQuery = parseSqlUpdateStmt(
    data,
    'profiles',
    'WHERE user_id = $1 RETURNING $2:name',
    [req.params.user_id, data]
  );

  const rows = await db.one(updateIsVerifiedQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});

/**
 * @desc    Upload new or update profile picture
 * @route   PUT /api/users/:user_id/profiles/upload-photo
 * @access  Admin/Private
 */
exports.uploadPic = asyncHandler(async (req, res, next) => {
  // if non-admin user, throw 403 if not updating self
  if (
    req.user.role !== 'admin' &&
    req.user.user_id.toString() !== req.params.user_id
  ) {
    return next(
      new ErrorResponse(
        `Not allowed to update other user's profile picture`,
        403
      )
    );
  }

  const { profile_picture } = req.body;

  const data = {
    profile_picture,
  };

  const updateProfileQuery = parseSqlUpdateStmt(
    data,
    'profiles',
    'WHERE user_id = $1 RETURNING profile_picture',
    req.params.user_id
  );

  const rows = await db.one(updateProfileQuery);

  res.status(200).json({
    success: true,
    data: rows,
  });
});
