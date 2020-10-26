import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all faqs
 * @route   GET /api/faqs
 * @desc    Get all faqs for a listing
 * @route   GET /api/listings/:listing_id/faqs
 * @access  Public
 */
export const getFaqs = asyncHandler(async (req, res) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found or soft deleted
        await db.one('SELECT * FROM listingsview WHERE listing_id = $1', req.params.listing_id);

        const faqs = await db.manyOrNone('SELECT * FROM faqs WHERE listing_id = $1', req.params.listing_id);
        return res.status(200).json({
            success: true,
            count: faqs.length,
            data: faqs,
        });
    }

    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single faq
 * @route   GET /api/faqs/:id
 * @access  Public
 */
export const getFaq = asyncHandler(async (req, res) => {
    const rows = await db.one('SELECT * FROM faqs WHERE faq_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create faq
 * @route   POST /api/faqs
 * @access  Owner/Admin
 */
export const createFaq = asyncHandler(async (req, res, next) => {
    const { listing_id, question, answer } = req.body;

    const data = {
        listing_id,
        question,
        answer,
    };

    cleanseData(data);

    // if non-admin ,check if owner of listing
    if (req.user.role !== 'admin') {
        const listingOwner = await isListingOwner(req.user.user_id, listing_id);
        if (!listingOwner) {
            return next(new ErrorResponse(`Not authorised to create FAQs for this listing`, 403));
        }
    }

    const rows = await db.one('INSERT INTO faqs (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single faq
 * @route   PUT /api/faqs/:id
 * @access  Owner/Admin
 */
export const updateFaq = asyncHandler(async (req, res, next) => {
    // check if faq exists
    const faq = await db.oneOrNone('SELECT * FROM faqs WHERE faq_id = $1', req.params.id);

    // return bad request response if invalid faq
    if (!faq) {
        return next(new ErrorResponse(`Faq does not exist`, 400));
    }

    // if non-admin, check if owner of listing
    if (req.user.role !== 'admin') {
        const listingOwner = await isListingOwner(req.user.user_id, faq.listing_id);
        if (!listingOwner) {
            return next(new ErrorResponse(`Not authorised to update FAQs in this listing`, 403));
        }
    }

    const { question, answer } = req.body;

    const data = {
        question,
        answer,
    };

    cleanseData(data);

    const updateFaqQuery = parseSqlUpdateStmt(data, 'faqs', 'WHERE faq_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one(updateFaqQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single faq
 * @route   DELETE /api/faqs/:id
 * @access  Owner/Admin
 */
export const deleteFaq = asyncHandler(async (req, res, next) => {
    // check if faq exists
    const faq = await db.oneOrNone('SELECT * FROM faqs WHERE faq_id = $1', req.params.id);

    // return bad request response if invalid faq
    if (!faq) {
        return next(new ErrorResponse(`Faq does not exist`, 400));
    }

    // if non-admin, check if owner of listing
    if (req.user.role !== 'admin') {
        const listingOwner = await isListingOwner(req.user.user_id, faq.listing_id);
        if (!listingOwner) {
            return next(new ErrorResponse(`Not authorised to delete FAQs in this listing`, 403));
        }
    }

    const rows = await db.one('DELETE FROM faqs WHERE faq_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

const isListingOwner = async (userId, listingId) => {
    const owner = await db.one('SELECT created_by FROM Listings WHERE listing_id = $1', listingId);
    return userId === owner.created_by;
};
