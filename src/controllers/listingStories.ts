import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all listing stories
 * @route   GET /api/listings/stories
 * @access  Public
 */
export const getListingStories = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single listing story
 * @route   GET /api/listings/:listing_id/stories
 * @access  Public
 */
export const getListingStory = asyncHandler(async (req, res, next) => {
    // re-route to next middleware
    if (!req.params.listing_id) {
        return next();
    }

    const rows = await db.one('SELECT * FROM listingstories WHERE listing_id = $1', req.params.listing_id);
    return res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single listing story
 * @route   PUT /api/listings/:listing_id/stories
 * @access  Admin/Owner
 */
export const updateListingStory = asyncHandler(async (req, res, next) => {
    // check if listing exists
    const listing = await db.one('SELECT * FROM listings WHERE listing_id = $1', req.params.listing_id);
    // if non-admin user, throw 403 if not listing owner
    if (req.user.role !== 'admin' && req.user.user_id !== listing.created_by) {
        return next(new ErrorResponse(`Not allowed to update story of listing which you are not the owner of`, 403));
    }

    const { overview, problem, solution, outcome } = req.body;

    const data = {
        overview,
        problem,
        solution,
        outcome,
    };

    cleanseData(data);

    const updateListingStoryQuery = parseSqlUpdateStmt(data, 'listingstories', 'WHERE listing_id = $1 RETURNING *', [req.params.listing_id]);

    const rows = await db.one(updateListingStoryQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
