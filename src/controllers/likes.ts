import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse } from '../utils';

export class LikeController {
    constructor() {}
    /**
     * @desc    Get all likes (including profile information) for a listing
     * @route   GET /api/listings/:listing_id/likes
     * @desc    Get all likes (including listing information) for a user
     * @route   GET /api/users/:user_id/likes
     * @access  Public
     */
    getLikes = asyncHandler(async (req, res, next) => {
        if (req.params.listing_id) {
            // return 404 error response if listing not found or soft deleted
            await db.one('SELECT * FROM listingview WHERE listing_id = $1', req.params.listing_id);

            const likes = await db.manyOrNone('SELECT * FROM listinglike NATURAL JOIN profile WHERE listing_id = $1', req.params.listing_id);

            return res.status(200).json({
                success: true,
                data: likes,
            });
        }

        if (req.params.user_id) {
            // return 404 error response if user not found
            await db.one('SELECT * FROM loginuser WHERE user_id = $1', req.params.user_id);

            const likes = await db.manyOrNone(
                'SELECT * FROM listinglike ll JOIN listing ls ON ll.listing_id = ls.listing_id WHERE user_id = $1',
                req.params.user_id,
            );

            return res.status(200).json({
                success: true,
                data: likes,
            });
        }

        return next(new ErrorResponse('Invalid route', 404));
    });

    /**
     * @desc    User like listing
     * @route   POST /api/likes
     * @access  Private
     */
    newLike = asyncHandler(async (req, res, next) => {
        const { listing_id } = req.body;

        const data = {
            listing_id,
            user_id: req.user.user_id,
        };

        cleanseData(data);

        const rows = await db.one('INSERT INTO listinglike (${this:name}) VALUES (${this:csv}) RETURNING *', data);

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
    unLike = asyncHandler(async (req, res, next) => {
        const listingLike = await db.one('SELECT * FROM listinglike WHERE like_id = $1', req.params.like_id);

        if (listingLike.user_id !== req.user.user_id) {
            return next(new ErrorResponse('Not authorised to access this route', 403));
        }

        const rows = await db.one('DELETE FROM listinglike WHERE like_id = $1 RETURNING *', req.params.like_id);

        res.status(200).json({
            success: true,
            data: rows,
        });
    });
}

export const likeController = new LikeController();
