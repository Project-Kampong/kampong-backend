import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    Get all likes
 * @route   GET /api/likes
 * @desc    Get all likes (including profile information) for a listing
 * @route   GET /api/listings/:listing_id/likes
 * @desc    Get all likes (including listing information) for a user
 * @route   GET /api/users/:user_id/likes
 * @access  Public
 */
export const getLikes = asyncHandler(async (req, res) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found or soft deleted
        await db.one('SELECT * FROM listingsview WHERE listing_id = $1', req.params.listing_id);

        const likes = await db.manyOrNone('SELECT * FROM likes NATURAL JOIN profiles WHERE listing_id = $1', req.params.listing_id);

        return res.status(200).json({
            success: true,
            count: likes.length,
            data: likes,
        });
    }

    if (req.params.user_id) {
        // return 404 error response if user not found
        await db.one('SELECT * FROM Users WHERE user_id = $1', req.params.user_id);

        const likes = await db.manyOrNone('SELECT * FROM likes NATURAL JOIN listings WHERE user_id = $1', req.params.user_id);

        return res.status(200).json({
            success: true,
            count: likes.length,
            data: likes,
        });
    }

    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single like (identified by like_id)
 * @route   GET /api/likes/like_id
 * @access  Public
 */
export const getLike = asyncHandler(async (req, res) => {
    const rows = await db.one('SELECT * FROM likes WHERE like_id = $1', req.params.like_id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    User like listing
 * @route   POST /api/likes
 * @access  Private
 */
export const newLike = asyncHandler(async (req, res, next) => {
    const { listing_id } = req.body;

    const data = {
        listing_id,
        user_id: req.user.user_id,
    };

    cleanseData(data);

    const rows = await db.one('INSERT INTO likes (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    User unlike listing (identified by like_id)
 * @route   DELETE /api/likes/like_id
 * @access  Private
 */
export const unLike = asyncHandler(async (req, res, next) => {
    const like = await db.one('SELECT * FROM Likes WHERE like_id = $1', req.params.like_id);

    if (like.user_id !== req.user.user_id) {
        return next(new ErrorResponse('Not authorised to access this route', 403));
    }

    const rows = await db.one('DELETE FROM likes WHERE like_id = $1 RETURNING *', req.params.like_id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
