import { LikesRepository } from '../database';
import { db } from '../database/db';
import { NewLikeReqDto } from '../models';
import { modelValidator, ErrorResponse, ModelValidator } from '../utils';

export class LikesController {
    constructor(private readonly likesRepository: LikesRepository, private readonly modelValidator: ModelValidator) {}

    /**
     * @desc    Get all likes (including profile information) for a listing
     * @route   GET /api/listings/:listing_id/likes
     * @desc    Get all likes (including listing information) for a user
     * @route   GET /api/users/:user_id/likes
     * @access  Public
     */
    getLikes = async (req, res, next) => {
        if (req.params.listing_id) {
            const likes = await this.likesRepository.getAllLikesInfoForListing(req.params.listing_id);

            return res.status(200).json({
                success: true,
                data: likes,
            });
        }

        if (req.params.user_id) {
            const likes = await this.likesRepository.getAllLikesInfoForUser(req.params.user_id);

            return res.status(200).json({
                success: true,
                data: likes,
            });
        }

        return next(new ErrorResponse('Invalid route', 404));
    };

    /**
     * @desc    User like listing
     * @route   POST /api/likes
     * @access  Private
     */
    newLike = async (req, res, next) => {
        const { listing_id } = req.body;

        const data = {
            listing_id,
            user_id: req.user.user_id,
        };

        await this.modelValidator.validateModel(NewLikeReqDto, data);

        const rows = await this.likesRepository.createLike(data);

        res.status(201).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    User unlike listing (identified by like_id)
     * @route   DELETE /api/likes/:like_id
     * @access  Private
     */
    unLike = async (req, res, next) => {
        const { like_id } = req.params;
        const listingLike = await this.likesRepository.getLikeById(like_id);

        if (listingLike.user_id !== req.user.user_id) {
            return next(new ErrorResponse('Not authorised to access this route', 403));
        }

        const rows = await this.likesRepository.deleteLikeById(like_id);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };
}

export const likesController = new LikesController(db.likes, modelValidator);
