import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';
import { isNil } from 'lodash';

/**
 * @desc    Get all listings
 * @route   GET /api/listings
 * @desc    Get all listings for a location
 * @route   GET /api/locations/:location_id/listings
 * @access  Public
 */
export const getListings = asyncHandler(async (req, res) => {
    if (req.params.location_id) {
        // return 404 error response if location not found or soft deleted
        const locations = await db.many(
            'SELECT lil.listing_location_id, l.listing_id, lil.location_id FROM listingsview l LEFT JOIN ListingLocations lil ON l.listing_id = lil.listing_id WHERE l.listing_id = $1',
            req.params.location_id,
        );

        // remove null location_id from result
        const data = locations.filter((lil) => lil.location_id !== null);

        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    }

    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get all listings including soft deletes
 * @route   GET /api/listings/all
 * @access  Admin
 */
export const getListingsAll = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listing by listing id (excludes soft-deleted)
 * @route   GET /api/listings/:id
 * @access  Public
 */
export const getListing = asyncHandler(async (req, res, next) => {
    const rows = await db.one('SELECT * FROM listingsview WHERE listing_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Get all listings owned by particular user (excludes soft-deleted)
 * @route   GET /api/users/:user_id/listings/owner
 * @access  Public
 */
export const getAllListingsOwnedByUser = asyncHandler(async (req, res, next) => {
    const userId = req.params.user_id;
    // check if user exists
    await db.one('SELECT * FROM Users WHERE user_id = $1', userId);

    const rows = await db.manyOrNone('SELECT * FROM listingsview WHERE created_by = $1', userId);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create listing and associated listing story
 * @route   POST /api/listings
 * @access  Private
 */
export const createListing = asyncHandler(async (req, res) => {
    const {
        organisation_id, // NOTE: do not use this field until organisations endpoint is implemented
        title,
        category,
        about,
        tagline,
        mission,
        listing_url,
        listing_email,
        listing_status,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        is_published,
        start_date,
        end_date,
    } = req.body;

    const data = {
        listing_id: uuidv4(),
        created_by: req.user.user_id,
        organisation_id,
        title,
        category,
        about,
        tagline,
        mission,
        listing_url,
        listing_email,
        listing_status,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        is_published,
        start_date,
        end_date,
    };

    // remove undefined values in json object
    cleanseData(data);

    /**
     * SQL Transaction, creating listing and associated listing story
     * Returns an array of 2 json:
     * 1st json: Listing entry
     * 2nd json: Listing story entry
     */
    const rows = await db.tx(async (query) => {
        const createListing = await query.one('INSERT INTO listings (${this:name}) VALUES (${this:csv}) RETURNING *', data);
        const createListingStory = await query.one('INSERT INTO listingstories (listing_id) VALUES ($1) RETURNING *', createListing.listing_id);
        return query.batch([createListing, createListingStory]);
    });

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single listing (excludes soft-deleted)
 * @route   PUT /api/listings/:id
 * @access  Admin/Owner
 */
export const updateListing = asyncHandler(async (req, res, next) => {
    // check if listing exists and is not soft-deleted
    const listing = await db.one('SELECT * FROM listingsview WHERE listing_id = $1', req.params.id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || req.user.user_id === listing.created_by)) {
        return next(new ErrorResponse(`User not authorised to update this listing`, 403));
    }

    const {
        organisation_id, // NOTE: do not use this field until organisations endpoint is implemented
        title,
        category,
        about,
        tagline,
        mission,
        listing_url,
        listing_email,
        listing_status,
        is_published,
        start_date,
        end_date,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
    } = req.body;

    const data = {
        organisation_id,
        title,
        category,
        about,
        tagline,
        mission,
        listing_url,
        listing_email,
        listing_status,
        is_published,
        start_date,
        end_date,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
    };

    // remove undefined items in json
    cleanseData(data);

    const updateListingQuery = parseSqlUpdateStmt(data, 'listings', 'WHERE listing_id = $1 RETURNING *', req.params.id);

    const rows = await db.one(updateListingQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Verify single listing
 * @route   PUT /api/listings/:id/verify
 * @access  Admin
 */
export const verifyListing = asyncHandler(async (req, res, next) => {
    // check if listing exists
    await db.one('SELECT * FROM listings WHERE listing_id = $1', req.params.id);

    const { is_verified } = req.body;

    const data = { is_verified };

    const verifyListingQuery = parseSqlUpdateStmt(data, 'listings', 'WHERE listing_id = $1 RETURNING $2:name', [req.params.id, data]);

    const rows = await db.one(verifyListingQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Deactivate (soft delete) single listing
 * @route   PUT /api/listings/:id/deactivate
 * @access  Admin/Owner
 */

export const deactivateListing = asyncHandler(async (req, res, next) => {
    // check if listing exists and not soft-deleted
    const listing = await db.one('SELECT * FROM listingsview WHERE listing_id = $1', req.params.id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || req.user.user_id === listing.created_by)) {
        return next(new ErrorResponse(`User not authorised to delete this listing`, 403));
    }

    const rows = await db.one('UPDATE listings SET deleted_on=$1 WHERE listing_id = $2 RETURNING *', [
        moment().format('YYYY-MM-DD HH:mm:ss.000'),
        req.params.id,
    ]);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single listing and associated listing story
 * @route   DELETE /api/listings/:id
 * @access  Admin
 */
export const deleteListing = asyncHandler(async (req, res, next) => {
    // check if listing exists
    await db.one('SELECT * FROM listings WHERE listing_id = $1', req.params.id);

    // Unauthorised if not admin
    if (req.user.role !== 'admin') {
        return next(new ErrorResponse(`User not authorised to delete this listing`, 403));
    }

    const rows = await db.one('DELETE FROM listings WHERE listing_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Upload multiple (up to 5) new pictures for a particular listing (identified by listing id)
 * @route   PUT /api/listings/:id/upload-photo
 * @access  Admin/Owner
 */
export const uploadListingPics = asyncHandler(async (req, res, next) => {
    // check if listing exists
    const listing = await db.one('SELECT * FROM listings WHERE listing_id = $1', req.params.id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || req.user.user_id === listing.created_by)) {
        return next(new ErrorResponse(`User not authorised to upload photo for this listing`, 403));
    }

    // get mapping of pic number to original filename from req body
    const { pic1, pic2, pic3, pic4, pic5 } = req.body;

    const data = {
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
    };
    cleanseData(data);

    const updateListingQuery = parseSqlUpdateStmt(data, 'listings', 'WHERE listing_id = $1 RETURNING $2:name', [req.params.id, data]);

    const rows = await db.one(updateListingQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Search listings by title, category or location
 * @route   GET /api/listings/search?keyword=:keyword&limit=:limit
 * @access  Public
 */
export const searchListings = asyncHandler(async (req, res) => {
    let { keyword = '', limit } = req.query;
    limit = isNil(limit) || isNaN(limit) ? 10 : parseInt(limit);
    const data = { keyword: keyword.split(',').join(' | '), limit };

    const rows = await db.manyOrNone(
        "SELECT * FROM listingsview WHERE to_tsvector(title) @@ to_tsquery(${keyword}) OR to_tsvector(category) @@ to_tsquery(${keyword}) OR to_tsvector(array_to_string(locations::text[], ' ')) @@ to_tsquery(${keyword}) LIMIT ${limit}",
        data,
    );

    res.status(200).json({
        success: true,
        data: rows,
    });
});
