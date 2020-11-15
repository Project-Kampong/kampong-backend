import { db } from '../database';

export const checkListingOwner = async (userId: string, listingId: string): Promise<boolean> => {
    const owner = await db.one<Promise<{ created_by: string }>>('SELECT created_by FROM Listings WHERE listing_id = $1', listingId);
    return userId === owner.created_by;
};

export const checkListingOrCommentOwner = async (userId: string, listingCommentId: number): Promise<boolean> => {
    const listingInfo = await db.one<{ created_by: string; user_id: string }>(
        'SELECT created_by, user_id FROM ListingComments lc JOIN Listings l USING (listing_id) WHERE listing_comment_id = $1',
        listingCommentId,
    );
    return listingInfo.created_by === userId || listingInfo.user_id === userId;
};
