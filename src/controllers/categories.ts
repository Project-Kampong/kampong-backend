import { asyncHandler } from '../middleware';

/**
 * @desc    Get all categories
 * @route   GET /api/categories
 * @access  Public
 */
export const getCategories = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});
