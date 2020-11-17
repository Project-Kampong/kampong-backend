import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { checkListingOwner, cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    Get all participants for a listing
 * @route   GET /api/listings/:listing_id/participants
 * @desc    Get all participation for a user
 * @route   GET /api/users/:user_id/participants
 * @access  Public
 */
export const getParticipants = asyncHandler(async (req, res, next) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found
        await db.one('SELECT * FROM listingsview WHERE listing_id = $1', req.params.listing_id);

        const participants = await db.manyOrNone('SELECT * FROM participant WHERE listing_id = $1', req.params.listing_id);

        return res.status(200).json({
            success: true,
            count: participants.length,
            data: participants,
        });
    }

    if (req.params.user_id) {
        // return 404 error response if user not found
        await db.one('SELECT * FROM Users WHERE user_id = $1', req.params.user_id);

        const participants = await db.manyOrNone('SELECT * FROM participant WHERE user_id = $1', req.params.user_id);

        return res.status(200).json({
            success: true,
            count: participants.length,
            data: participants,
        });
    }

    return next(new ErrorResponse('Invalid route', 404));
});

/**
 * @desc    Add participant to listing
 * @route   POST /api/participants
 * @access  Admin/Owner
 */
export const createParticipant = asyncHandler(async (req, res, next) => {
    const { listing_id, user_id, joined_on, end_on } = req.body;

    const data = {
        listing_id,
        user_id,
        joined_on,
        end_on,
    };

    cleanseData(data);

    const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);
    const isOwnUser = req.user.user_id === user_id;

    // check listing owner or ownself for non-admin users
    if (!(req.user.role === 'admin' || isListingOwner || isOwnUser)) {
        return next(new ErrorResponse(`Not authorised to add participant to this listing`, 403));
    }

    const rows = await db.one('INSERT INTO participant (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single participant (identified by participant id)
 * @route   DELETE /api/participants/:participant_id
 * @access  Admin/Owner/Private
 */
export const deleteParticipant = asyncHandler(async (req, res, next) => {
    // check if participant exists
    const participant = await db.one('SELECT * FROM participant WHERE participant_id = $1', req.params.participant_id);

    const isListingOwner = await checkListingOwner(req.user.user_id, participant.listing_id);
    const isOwnUser = req.user.user_id === participant.user_id;

    // check listing owner or ownself for non-admin users
    if (!(req.user.role === 'admin' || isListingOwner || isOwnUser)) {
        return next(new ErrorResponse(`Not authorised to delete participant from this listing`, 403));
    }

    const rows = await db.one('DELETE FROM participant WHERE participant_id = $1 RETURNING *', req.params.participant_id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
