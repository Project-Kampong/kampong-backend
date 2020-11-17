import { asyncHandler } from '../middleware';

/**
 * @desc    Get all locations
 * @route   GET /api/locations
 * @access  Public
 */
export const getLocations = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});
