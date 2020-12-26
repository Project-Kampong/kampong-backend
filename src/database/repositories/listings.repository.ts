import { BaseRepository } from './base.repository';
import { ListingView } from '../models';

export class ListingsRepository extends BaseRepository {
    getListingById(listingId: string): Promise<ListingView> {
        return this.db.one('SELECT * FROM listingview WHERE listing_id = $1', listingId);
    }

    unsetAllFeaturedListings(): Promise<null> {
        return this.db.none('UPDATE listing SET is_featured = FALSE');
    }

    /**
     * Sets a given number of listings to is_featured TRUE. Listings that are already featured are excluded from this random pool.
     * @param count number of non-featured listing to set is_featured to TRUE. Default 3.
     */
    setRandomFeaturedListings(count = 3): Promise<{ listing_id: string }[]> {
        return this.db.manyOrNone<{ listing_id: string }>(
            'UPDATE listing SET is_featured = TRUE WHERE listing_id IN (SELECT listing_id FROM listing WHERE is_featured = FALSE ORDER BY random() LIMIT $1) RETURNING listing_id',
            count,
        );
    }
}
