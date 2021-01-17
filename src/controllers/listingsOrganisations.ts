import { db } from '../database/db';
import { checkOrganisationOwner, checkListingOwner, cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    Create an entry in the listings-organisations table
 * @route   POST /api/listings-organisations
 * @access  Private
 */
export const createListingOrganisation = async (req, res, next) => {
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
};

/**
 * @desc    Delete an entry in the listings-organisations table
 * @route   DELETE /api/listings-organisations?listingId=:listingId&organisationId=:organisationId
 * @access  Admin/Owner
 */
export const deleteListingOrganisation = async (req, res, next) => {
    const userId: string = req.user.user_id;
    const { listingId, organisationId } = req.query;

    // Check permissions
    const isOrganisationOwner = await checkOrganisationOwner(userId, organisationId);
    const isListingOwner = await checkListingOwner(userId, listingId);
    if (req.user.role !== 'admin' && !isListingOwner && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to delete listing organisation as you are not the organisation or listing owner', 403));
    }

    const rows = await db.one('DELETE FROM listingorganisation WHERE listing_id = $1 AND organisation_id = $2 RETURNING *', [
        listingId,
        organisationId,
    ]);

    res.status(200).json({
        success: true,
        data: rows,
    });
};
