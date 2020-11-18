import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { checkOrganisationOwner, checkListingOwner, cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    Create an entry in the listings-organisations table
 * @route   POST /api/listings-organisations
 * @access  Private
 */
export const createListingOrganisation = asyncHandler(async (req, res, next) => {
    const userId = req.user.user_id;
    const { listing_id, organisation_id } = req.body;

    // Chcek permissions
    const isOrganisationOwner = await checkOrganisationOwner(userId, organisation_id);
    const isListingOwner = await checkListingOwner(userId, listing_id);
    if (req.user.role !== 'admin' && !isListingOwner && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to create listing organisation as you are not the organisation or listing owner', 403));
    }

    const data = {
        listing_id,
        organisation_id,
    };

    cleanseData(data);

    const rows = await db.one('INSERT INTO listingorganisation (listing_id, organisation_id) VALUES (${this:csv}) RETURNING *', data);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete an entry in the listings-organisations table
 * @route   DELETE /api/listings-organisations/:id
 * @access  Admin/Owner
 */
export const deleteListingOrganisation = asyncHandler(async (req, res, next) => {
    const userId: string = req.user.user_id;
    const ids = await db.one('SELECT listing_id, organisation_id FROM listingorganisation WHERE listing_organisation_id = $1', req.params.id);
    const { listing_id, organisation_id } = ids;

    // Check permissions
    const isOrganisationOwner = await checkOrganisationOwner(userId, organisation_id);
    const isListingOwner = await checkListingOwner(userId, listing_id);
    if (req.user.role !== 'admin' && !isListingOwner && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to delete listing organisation as you are not the organisation or listing owner', 403));
    }

    const rows = await db.one('DELETE FROM listingorganisation WHERE listing_organisation_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
