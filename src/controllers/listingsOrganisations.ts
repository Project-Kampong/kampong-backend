import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse } from '../utils';

/**
 * @desc    Create an entry in the listings-organisations table
 * @route   POST /api/listings-organisations
 * @access  Private
 */
export const createListingOrganisation = asyncHandler(async (req, res) => {
    const { listing_id, organisation_id } = req.body;
    const data = {
        listing_id,
        organisation_id,
    };

    cleanseData(data);

    const rows = await db.one('INSERT INTO listingsorganisations (listing_id, organisation_id) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
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
    const ids = await db.one('SELECT listing_id, organisation_id FROM listingsorganisations WHERE listing_organisation_id = $1', req.params.id);
    const {
        listing_id,
        organisation_id
    } = ids;

    const isOrganisationOwner = checkOrganisationOwner(userId,organisation_id);
    const isListingOwner = checkListingOwner(userId, listing_id);
    if (req.user.role !== 'admin' && !isListingOwner && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to delete listing organisation as you are not the organisation or listing owner', 403));
    }

    const rows = await db.one('DELETE FROM listingsorganisations WHERE listing_organisation_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

const checkOrganisationOwner = async (userId: string, organisationId: number) => {
    const owner = await db.one<Promise<{ owned_by: string }>>('SELECT owned_by FROM Organisations WHERE organisation_id = $1', organisationId);
    return userId === owner.owned_by;
};

const checkListingOwner = async (userId: string, listingId: string) => {
    const owner = await db.one<Promise<{ created_by: string }>>('SELECT created_by FROM Listings WHERE listing_id = $1', listingId);
    return userId === owner.created_by;
};
