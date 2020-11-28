import moment from 'moment-timezone';
import { v1 as uuidv1 } from 'uuid';
import { db } from '../database';
import { asyncHandler } from '../middleware';
import { checkListingOwner, cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';
import { isNil } from 'lodash';

/**
 * @desc    Get all listings
 * @route   GET /api/listings
 * @desc    Get all listings for a listing category
 * @route   GET /api/categories/:category_name/listings
 * @desc    Get all listings for a location
 * @route   GET /api/locations/:location_id/listings
 * @desc    Get all listings for an organisation
 * @route   GET /api/organisations/:organisation_id/listings
 * @access  Public
 */
export const getListings = asyncHandler(async (req, res) => {
    if (req.params.category_name) {
        // returns 404 error if category name not found
        const rows = await db.many(
            'SELECT * FROM category lc LEFT JOIN listingview lv ON lc.category_name = lv.category WHERE lc.category_name = $1',
            req.params.category_name,
        );

        // remove null listing id from result
        const data = rows.filter((listing) => listing.listing_id !== null);

        return res.status(200).json({
            success: true,
            data,
        });
    }
    if (req.params.location_id) {
        // return 404 error response if location with location id not found
        const rows = await db.many(
            'SELECT lv.*, lil.location_id FROM location l LEFT JOIN listinglocation lil ON l.location_id = lil.location_id LEFT JOIN listingview lv ON lil.listing_id = lv.listing_id WHERE l.location_id = $1',
            req.params.location_id,
        );

        // remove null listing id from result
        const data = rows.filter((listing) => listing.listing_id !== null);

        return res.status(200).json({
            success: true,
            data,
        });
    } else if (req.params.organisation_id) {
        const rows = await db.manyOrNone(
            'SELECT lv.*, lo.listing_organisation_id FROM organisation o LEFT JOIN listingorganisation lo ON o.organisation_id = lo.organisation_id LEFT JOIN listingview lv ON lo.listing_id = lv.listing_id WHERE o.organisation_id = $1',
            req.params.organisation_id,
        );

        // remove null listing id from result
        const data = rows.filter((listing) => listing.listing_id !== null);

        return res.status(200).json({
            success: true,
            data,
        });
    }

    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get all featured listings
 * @route   GET /api/listings/featured
 * @access  Public
 */
export const getFeaturedListings = asyncHandler(async (req, res) => {
    const rows = await db.manyOrNone('SELECT * FROM featuredlistingview');
    res.status(200).json({ success: true, data: rows });
});

/**
 * @desc    Get single listing by listing id (excludes soft-deleted)
 * @route   GET /api/listings/:id
 * @access  Public
 */
export const getListing = asyncHandler(async (req, res, next) => {
    const rows = await db.one('SELECT * FROM listingview WHERE listing_id = $1', req.params.id);
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

    const rows = await db.manyOrNone('SELECT * FROM listingview WHERE created_by = $1', userId);

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
        organisation_id,
        title,
        category,
        about,
        tagline,
        mission,
        overview,
        problem,
        solution,
        outcome,
        listing_url,
        listing_email,
        listing_status,
        pics,
        is_published,
        start_date,
        end_date,
    } = req.body;

    const data = {
        listing_id: uuidv1(),
        created_by: req.user.user_id,
        organisation_id,
        title,
        category,
        about,
        tagline,
        mission,
        overview,
        problem,
        solution,
        outcome,
        listing_url,
        listing_email,
        listing_status,
        pics,
        is_published,
        start_date,
        end_date,
    };

    // remove undefined values in json object
    cleanseData(data);

    const rows = await db.one('INSERT INTO listing (${this:name}) VALUES (${this:csv}) RETURNING *', data);

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
    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, req.params.id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`User not authorised to update this listing`, 403));
    }

    const {
        organisation_id, // NOTE: do not use this field until organisations endpoint is implemented
        title,
        category,
        about,
        tagline,
        mission,
        overview,
        problem,
        solution,
        outcome,
        listing_url,
        listing_email,
        listing_status,
        is_published,
        start_date,
        end_date,
        pics,
    } = req.body;

    const data = {
        organisation_id,
        title,
        category,
        about,
        tagline,
        mission,
        overview,
        problem,
        solution,
        outcome,
        listing_url,
        listing_email,
        listing_status,
        is_published,
        start_date,
        end_date,
        pics,
        updated_on: moment.tz(process.env.DEFAULT_TIMEZONE).toDate(),
    };

    // remove undefined items in json
    cleanseData(data);

    const updateListingQuery = parseSqlUpdateStmt(data, 'listing', 'WHERE listing_id = $1 RETURNING *', req.params.id);

    const rows = await db.one(updateListingQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Verify or feature single listing
 * @route   PUT /api/listings/:id/verify
 * @access  Admin
 */
export const verifyOrFeatureListing = asyncHandler(async (req, res, next) => {
    // check if listing exists
    await db.one('SELECT * FROM listing WHERE listing_id = $1', req.params.id);

    const { is_verified, is_featured } = req.body;

    const data = { is_verified, is_featured };

    cleanseData(data);

    const verifyListingQuery = parseSqlUpdateStmt(data, 'listing', 'WHERE listing_id = $1 RETURNING *', req.params.id);

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
    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, req.params.id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`User not authorised to delete this listing`, 403));
    }

    const rows = await db.one('UPDATE listing SET deleted_on=$1 WHERE listing_id = $2 RETURNING *', [
        moment.tz(process.env.DEFAULT_TIMEZONE).toDate(),
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
    await db.one('SELECT * FROM listing WHERE listing_id = $1', req.params.id);

    // Unauthorised if not admin
    if (req.user.role !== 'admin') {
        return next(new ErrorResponse(`User not authorised to delete this listing`, 403));
    }

    const rows = await db.one('DELETE FROM listing WHERE listing_id = $1 RETURNING *', req.params.id);

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
    const { keyword = '' } = req.query;
    let { limit } = req.query;
    limit = isNil(limit) || isNaN(limit) ? 10 : parseInt(limit);
    const data = { fullTextKeyword: keyword.split(',').join(' | '), partialTextKeyword: keyword.split(',').map((key) => '%' + key + '%'), limit };

    const searchQuery =
        'WITH rankedlisting AS (SELECT *, ts_rank_cd(keyword_vector, to_tsquery(${fullTextKeyword})) FROM listingview) ' +
        'SELECT * FROM rankedlisting WHERE keyword_vector @@ to_tsquery(${fullTextKeyword}) ' +
        'UNION ' +
        // ILIKE is expensive query, remove line below if too expensive
        "SELECT * FROM rankedlisting WHERE title ILIKE ANY (${partialTextKeyword}) OR category ILIKE ANY (${partialTextKeyword}) OR array_to_string(locations::text[], ' ') ILIKE ANY (${partialTextKeyword}) " +
        'ORDER BY ts_rank_cd DESC LIMIT ${limit}';

    const rows = await db.manyOrNone(searchQuery, data);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
