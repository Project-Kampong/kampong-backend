const { db } = require('../db/db');
const { asyncHandler } = require('../middleware');

/**
 * @desc    Get all featured listings
 * @route   GET /api/featured-listings
 * @access  Public
 */
exports.getFeaturedListings = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single featured listing
 * @route   GET /api/featured-listings/:id
 * @access  Public
 */
exports.getFeaturedListing = asyncHandler(async (req, res) => {
    const rows = await db.one('SELECT * FROM featuredlistings WHERE featured_listing_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create featured listing
 * @route   POST /api/featured-listings
 * @access  Admin
 */
exports.createFeaturedListing = asyncHandler(async (req, res, next) => {
    const { listing_id } = req.body;

    const data = {
        listing_id,
    };

    const rows = await db.one('INSERT INTO featuredlistings (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single featured listing
 * @route   DELETE /api/featured-listings/:id
 * @access  Admin
 */
exports.deleteFeaturedListing = asyncHandler(async (req, res, next) => {
    const rows = await db.one('DELETE FROM featuredlistings WHERE featured_listing_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
