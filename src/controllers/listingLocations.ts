import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    Get all listing locations
 * @route   GET /api/listing-locations
 * @desc    Get all listing locations for a listing
 * @route   GET /api/listings/:listing_id/listing-locations
 * @access  Public
 */
export const getListingLocations = asyncHandler(async (req, res, next) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found or soft deleted
        const listingLocations = await db.many(
            'SELECT lil.listing_location_id, l.listing_id, lil.location_id, lo.location FROM listingsview l LEFT JOIN ListingLocations lil ON l.listing_id = lil.listing_id LEFT JOIN Locations lo ON lil.location_id = lo.location_id WHERE l.listing_id = $1',
            req.params.listing_id,
        );

        // remove null listing_location_id from result
        const data = listingLocations.filter((lil) => lil.listing_location_id !== null);

        return res.status(200).json({
            success: true,
            count: data.length,
            data,
        });
    }

    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listinglocation by listing location id
 * @route   GET /api/listing-locations/:id
 * @access  Public
 */
export const getListingLocation = asyncHandler(async (req, res) => {
    const rows = await db.one(
        'SELECT * FROM ListingLocations lil JOIN Locations lo ON lil.location_id = lo.location_id WHERE listing_location_id = $1',
        req.params.id,
    );
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create listing location for listing (with location_id known)
 * @route   POST /api/listing-locations
 * @access  Admin/Owner
 */
export const createListingLocation = asyncHandler(async (req, res, next) => {
    const { listing_id, location_id } = req.body;

    const data = {
        listing_id,
        location_id,
    };

    cleanseData(data);

    const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

    // check listing owner for non-admin users
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to delete listing location for this listing`, 403));
    }

    const rows = await db.one('INSERT INTO ListingLocations (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single listing location by listing location id
 * @route   DELETE /api/listing-locations/:id
 * @access  Admin/Owner
 */
export const deleteListingLocation = asyncHandler(async (req, res, next) => {
    // check if listinglocation exists
    const listingLocation = await db.one('SELECT * FROM ListingLocations WHERE listing_location_id = $1', req.params.id);

    const isListingOwner = await checkListingOwner(req.user.user_id, listingLocation.listing_id);

    // check listing owner for non-admin users
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to delete listing location for this listing`, 403));
    }

    const rows = await db.one('DELETE FROM ListingLocations WHERE listing_location_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

const checkListingOwner = async (userId: string, listingId: string) => {
    const owner = await db.one<Promise<{ created_by: string }>>('SELECT created_by FROM Listings WHERE listing_id = $1', listingId);
    return userId === owner.created_by;
};
