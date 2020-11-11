import { db } from '../database';

export const checkListingOwner = async (userId: string, listingId: string): Promise<boolean> => {
    const owner = await db.one<Promise<{ created_by: string }>>('SELECT created_by FROM Listings WHERE listing_id = $1', listingId);
    return userId === owner.created_by;
};

export const checkOrganisationOwner = async (userId: string, organisationId: number) => {
    const owner = await db.one<Promise<{ owned_by: string }>>('SELECT owned_by FROM Organisations WHERE organisation_id = $1', organisationId);
    return userId === owner.owned_by;
};
