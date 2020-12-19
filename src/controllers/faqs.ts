import { db, FaqsRepository, ListingsRepository } from '../database';
import { checkListingOwner, cleanseData, ErrorResponse } from '../utils';

export class FaqsController {
    constructor(private readonly faqsRepository: FaqsRepository, private readonly listingsRepository: ListingsRepository) {}

    /**
     * @desc    Get all faqs for a listing
     * @route   GET /api/listings/:listing_id/faqs
     * @access  Public
     */
    getFaqsForListing = async (req, res, next) => {
        if (req.params.listing_id) {
            const listingId: string = req.params.listing_id;
            // return 404 error response if listing not found or soft deleted
            await this.listingsRepository.getListingById(listingId);

            const faqs = await this.faqsRepository.getAllFaqsForListing(listingId);
            return res.status(200).json({
                success: true,
                data: faqs,
            });
        }

        return next(new ErrorResponse('Invalid route', 404));
    };

    /**
     * @desc    Create faq
     * @route   POST /api/faqs
     * @access  Owner/Admin
     */
    createFaq = async (req, res, next) => {
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

        const rows = await this.faqsRepository.createFaq(data);

        res.status(201).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    Update single faq
     * @route   PUT /api/faqs/:id
     * @access  Owner/Admin
     */
    updateFaq = async (req, res, next) => {
        // check if faq exists
        const faq = await this.faqsRepository.getFaqById(req.params.id);

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

        const rows = await this.faqsRepository.updateFaqById(data, req.params.id);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    Delete single faq
     * @route   DELETE /api/faqs/:id
     * @access  Owner/Admin
     */
    deleteFaq = async (req, res, next) => {
        // check if faq exists
        const faq = await this.faqsRepository.getFaqById(req.params.id);

        // check if listing exists and is listing owner
        const isListingOwner = await checkListingOwner(req.user.user_id, faq.listing_id);

        // Unauthorised if neither admin nor listing owner
        if (!(req.user.role === 'admin' || isListingOwner)) {
            return next(new ErrorResponse(`Not authorised to delete FAQ for this listing`, 403));
        }

        const rows = await this.faqsRepository.deleteFaqById(req.params.id);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };
}

export const faqsController = new FaqsController(db.faqs, db.listings);
