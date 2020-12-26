import { BaseRepository } from './base.repository';
import { ListingView } from '../models';

export class ListingsRepository extends BaseRepository {
    getListingById(listingId: string): Promise<ListingView> {
        return this.db.one('SELECT * FROM listingview WHERE listing_id = $1', listingId);
    }
}
