import { db } from '../database';
import { asyncHandler } from '../middleware';
import { checkListingOwner, cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    Get all hashtags for a listing
 * @route   GET /api/listings/:listing_id/hashtags
 * @access  Public
 */
export const getHashtagsForListing = asyncHandler(async (req, res, next) => {
    if (req.params.listing_id) {
        // returns 404 error response if listing not found or soft deleted
        const hashtags = await db.many(
            'SELECT l.listing_id, h.hashtag_id, tag FROM listingview l LEFT JOIN hashtag h ON l.listing_id = h.listing_id WHERE l.listing_id = $1',
            req.params.listing_id,
        );

        // remove null hashtag_id from result
        const data = hashtags.filter((h) => h.hashtag_id !== null);

        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    }

    return next(new ErrorResponse('Invalid route', 404));
});

/**
 * @desc    Create hashtag
 * @route   POST /api/hashtags
 * @access  Owner/Admin
 */
export const createHashtag = asyncHandler(async (req, res, next) => {
    const { listing_id, tag } = req.body;

    const data = {
        listing_id,
        tag,
    };

    cleanseData(data);

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to create hashtags for this listing`, 403));
    }

    const rows = await db.one('INSERT INTO hashtag (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single hashtag
 * @route   DELETE /api/hashtags/:id
 * @access  Owner/Admin
 */
export const deleteHashtag = asyncHandler(async (req, res, next) => {
    // check if hashtag exists
    const hashtag = await db.one('SELECT * FROM hashtag WHERE hashtag_id = $1', req.params.id);

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, hashtag.listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to delete hashtag for this listing`, 403));
    }

    const rows = await db.one('DELETE FROM hashtag WHERE hashtag_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
