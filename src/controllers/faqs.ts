import { asyncHandler } from '../middleware';
import { checkListingOwner, cleanseData, ErrorResponse } from '../utils';
import { FaqsRepository, ListingsRepository } from '../repository';

/**
 * @desc    Get all faqs
 * @route   GET /api/faqs
 * @desc    Get all faqs for a listing
 * @route   GET /api/listings/:listing_id/faqs
 * @access  Public
 */
export const getFaqs = asyncHandler(async (req, res) => {
    if (req.params.listing_id) {
        const listingId: string = req.params.listing_id;
        // return 404 error response if listing not found or soft deleted
        await ListingsRepository.getListingById(listingId);

        const faqs = await FaqsRepository.getAllFaqsForListing(listingId);
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
    const faqId: string = req.params.id;
    const rows = await FaqsRepository.getFaqById(faqId);
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

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to create FAQs for this listing`, 403));
    }

    const rows = await FaqsRepository.createFaq(data);

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
    const faq = await FaqsRepository.getFaqById(req.params.id);

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

    const rows = await FaqsRepository.updateFaqById(data, req.params.id);

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
    const faq = await FaqsRepository.getFaqById(req.params.id);

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, faq.listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to delete FAQ for this listing`, 403));
    }

    const rows = await FaqsRepository.deleteFaqById(req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
