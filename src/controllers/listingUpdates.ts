import moment from 'moment-timezone';
import { db } from '../database';
import { asyncHandler } from '../middleware';
import { checkListingOwner, cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all updates for a listing
 * @route   GET /api/listings/:listing_id/listing-updates
 * @access  Public
 */
export const getListingUpdatesForListing = asyncHandler(async (req, res, next) => {
    if (req.params.listing_id) {
        // returns 404 error response if listing not found or soft deleted
        const listingUpdates = await db.many(
            'SELECT l.listing_id, lu.* FROM listingsview l LEFT JOIN ListingUpdates lu ON l.listing_id = lu.listing_id WHERE l.listing_id = $1',
            req.params.listing_id,
        );

        // remove null listing_update_id from result
        const data = listingUpdates.filter((updateEntry) => updateEntry.listing_update_id !== null);

        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    }
    return next(new ErrorResponse('Invalid route', 404));
});

/**
 * @desc    Create listing update
 * @route   POST /api/listing-updates
 * @access  Owner/Admin
 */
export const createListingUpdate = asyncHandler(async (req, res, next) => {
    const { listing_id, description, pics } = req.body;

    const data = {
        listing_id,
        description,
        pics,
    };

    cleanseData(data);

    const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

    // check listing owner for non-admin users
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to create listing update for this listing`, 403));
    }

    const rows = await db.one('INSERT INTO ListingUpdates (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Modify single listing update (identified by listing update id)
 * @route   PUT /api/listing-updates/:id
 * @access  Owner/Admin
 */
export const modifyListingUpdate = asyncHandler(async (req, res, next) => {
    // check if listing update exists
    const { listing_id } = await db.one<Promise<{ listing_id: string }>>(
        'SELECT listing_id FROM listingupdates WHERE listing_update_id = $1',
        req.params.id,
    );

    const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

    // check listing owner for non-admin users
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to update listing update for this listing`, 403));
    }

    const { description, pics } = req.body;

    const data = {
        description,
        pics,
        updated_on: moment.tz(process.env.DEFAULT_TIMEZONE).toDate(),
    };

    cleanseData(data);

    const modifyUpdateQuery = parseSqlUpdateStmt(data, 'listingupdates', 'WHERE listing_update_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one(modifyUpdateQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single update (identified by listing update id)
 * @route   DELETE /api/listing-updates/:id
 * @access  Owner/Admin
 */
export const deleteListingUpdate = asyncHandler(async (req, res, next) => {
    // check if listing update exists
    const listingUpdate = await db.one('SELECT * FROM ListingUpdates WHERE listing_update_id = $1', req.params.id);

    const isListingOwner = await checkListingOwner(req.user.user_id, listingUpdate.listing_id);

    // check listing owner for non-admin users
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to delete listing update for this listing`, 403));
    }

    const rows = await db.one('DELETE FROM ListingUpdates WHERE listing_update_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
