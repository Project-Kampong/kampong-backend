import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    User like organisation
 * @route   POST /api/organisation-likes
 * @access  Private
 */
export const likeOrganisation = asyncHandler(async (req, res, next) => {
    const { organisation_id } = req.body;

    const data = {
        organisation_id,
        user_id: req.user.user_id,
    };

    cleanseData(data);

    const rows = await db.one('INSERT INTO organisationlike (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    User unlike organisation (identified by organisation_like_id)
 * @route   DELETE /api/organisation-likes/:organisation_like_id
 * @access  Private
 */
export const unLikeOrganisation = asyncHandler(async (req, res, next) => {
    const organisationLike = await db.one('SELECT * FROM organisationlike WHERE organisation_like_id = $1', req.params.organisation_like_id);
    if (organisationLike.user_id !== req.user.user_id) {
        return next(new ErrorResponse('Not authorised to access this route', 403));
    }

    const rows = await db.one('DELETE FROM organisationlike WHERE organisation_like_id = $1 RETURNING *', req.params.organisation_like_id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
