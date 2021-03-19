import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';
import { isNil } from 'lodash';

/**
 * @desc    Get all profiles
 * @route   GET /api/users/profiles
 * @access  Public
 */
export const getProfiles = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single profile by hashed user id
 * @route   GET /api/users/:user_id/profiles
 * @access  Public
 */
export const getProfile = asyncHandler(async (req, res, next) => {
    // if not user_id params, go to next middleware
    if (!req.params.user_id) {
        return next();
    }
    const rows = await db.one('SELECT * FROM profile WHERE user_id = $1', req.params.user_id);
    return res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single profile by user id
 * @route   PUT /api/users/:user_id/profiles
 * @access  Admin/Private
 */
export const updateProfile = asyncHandler(async (req, res, next) => {
    // if non-admin user, throw 403 if not updating self
    if (req.user.role !== 'admin' && req.user.user_id.toString() !== req.params.user_id) {
        return next(new ErrorResponse(`Not allowed to update other user's profile`, 403));
    }

    const {
        nickname,
        first_name,
        last_name,
        about,
        gender,
        dob,
        profile_picture,
        occupation,
        phone,
        facebook_link,
        twitter_link,
        instagram_link,
        linkedin_link,
    } = req.body;

    const data = {
        nickname,
        first_name,
        last_name,
        about,
        gender,
        dob,
        profile_picture,
        occupation,
        phone,
        facebook_link,
        twitter_link,
        instagram_link,
        linkedin_link,
    };

    cleanseData(data);

    const updateProfileQuery = parseSqlUpdateStmt(data, 'profile', 'WHERE user_id = $1 RETURNING *', [req.params.user_id]);

    const rows = await db.one(updateProfileQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Verify single profile by hashed user id
 * @route   PUT /api/users/:user_id/profiles/verify
 * @access  Admin
 */
export const verifyProfile = asyncHandler(async (req, res, next) => {
    // 400 response for wrong hash decoding
    if (isNil(req.params.user_id)) {
        return next(new ErrorResponse(`Invalid user id`, 400));
    }
    // check if user exists
    await db.one('SELECT * FROM profile WHERE user_id = $1', req.params.user_id);

    const { is_verified } = req.body;

    const data = {
        is_verified,
    };

    cleanseData(data);

    const updateIsVerifiedQuery = parseSqlUpdateStmt(data, 'profile', 'WHERE user_id = $1 RETURNING *', [req.params.user_id]);

    const rows = await db.one(updateIsVerifiedQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
