import { db } from '../database';
import { asyncHandler } from '../middleware';
import { checkListingOwner, cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all faqs for a listing
 * @route   GET /api/listings/:listing_id/faqs
 * @access  Public
 */
export const getFaqsForListing = asyncHandler(async (req, res, next) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found or soft deleted
        await db.one('SELECT * FROM listingview WHERE listing_id = $1', req.params.listing_id);

        const faqs = await db.manyOrNone('SELECT * FROM faq WHERE listing_id = $1', req.params.listing_id);
        return res.status(200).json({
            success: true,
            count: faqs.length,
            data: faqs,
        });
    }

    return next(new ErrorResponse('Invalid route', 404));
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

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to create FAQs for this listing`, 403));
    }

    const rows = await db.one('INSERT INTO faq (${this:name}) VALUES (${this:csv}) RETURNING *', data);

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
    const faq = await db.one('SELECT * FROM faq WHERE faq_id = $1', req.params.id);

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, faq.listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to update FAQ for this listing`, 403));
    }

    const { question, answer } = req.body;

    const data = {
        question,
        answer,
    };

    cleanseData(data);

    const updateFaqQuery = parseSqlUpdateStmt(data, 'faq', 'WHERE faq_id = $1 RETURNING *', [req.params.id]);

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
    const faq = await db.oneOrNone('SELECT * FROM faq WHERE faq_id = $1', req.params.id);

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, faq.listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to delete FAQ for this listing`, 403));
    }

    const rows = await db.one('DELETE FROM faq WHERE faq_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
