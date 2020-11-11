import { db } from '../database';

export const checkListingOwner = async (userId: string, listingId: string): Promise<boolean> => {
    const owner = await db.one<Promise<{ created_by: string }>>('SELECT created_by FROM Listings WHERE listing_id = $1', listingId);
    return userId === owner.created_by;
};
