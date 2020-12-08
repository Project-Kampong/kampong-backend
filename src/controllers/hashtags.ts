import { db, HashtagsRepository, ListingsRepository } from '../database';
import { checkListingOwner, cleanseData, ErrorResponse } from '../utils';

export class HashtagsController {
    constructor(private readonly hashtagsRepository: HashtagsRepository, private readonly listingsRepository: ListingsRepository) {
        this.hashtagsRepository = hashtagsRepository;
        this.listingsRepository = listingsRepository;
    }

    /**
     * @desc    Get all hashtags for a listing
     * @route   GET /api/listings/:listing_id/hashtags
     * @access  Public
     */
    getHashtagsForListing = async (req, res, next) => {
        if (req.params.listing_id) {
            // return 404 error response if listing not found or soft deleted
            await this.listingsRepository.getListingById(req.params.listing_id);

            const hashtags = await this.hashtagsRepository.getAllHashtagsForListing(req.params.listing_id);

            return res.status(200).json({
                success: true,
                data: hashtags,
            });
        }

        return next(new ErrorResponse('Invalid route', 404));
    };

    /**
     * @desc    Create hashtag
     * @route   POST /api/hashtags
     * @access  Owner/Admin
     */
    createHashtag = async (req, res, next) => {
        const { listing_id, tag } = req.body;

        const data = {
            listing_id,
            tag,
        };

        cleanseData(data);

        // check if listing exists and is listing owner
        const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

        // Unauthorised if neither admin nor listing owner
        if (!(req.user.role === 'admin' || isListingOwner)) {
            return next(new ErrorResponse(`Not authorised to create hashtags for this listing`, 403));
        }

        const rows = await this.hashtagsRepository.createHashtag(data);

        res.status(201).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    Delete single hashtag
     * @route   DELETE /api/hashtags/:id
     * @access  Owner/Admin
     */
    deleteHashtag = async (req, res, next) => {
        // check if hashtag exists
        const hashtag = await this.hashtagsRepository.getHashtagById(req.params.id);

        // check if listing exists and is listing owner
        const isListingOwner = await checkListingOwner(req.user.user_id, hashtag.listing_id);

        // Unauthorised if neither admin nor listing owner
        if (!(req.user.role === 'admin' || isListingOwner)) {
            return next(new ErrorResponse(`Not authorised to delete hashtag for this listing`, 403));
        }

        const rows = await this.hashtagsRepository.deleteHashtagById(req.params.id);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };
}

export const hashtagsController = new HashtagsController(db.hashtags, db.listings);
