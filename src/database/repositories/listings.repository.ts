import { IDatabase, IMain } from 'pg-promise';
import { BaseRepository } from './base.repository';
import { ListingView } from '../models';

export class ListingsRepository extends BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        super(db, pgp);
    }

    getListingById(listingId: string): Promise<ListingView> {
        return this.db.one('SELECT * FROM listingview WHERE listing_id = $1', listingId);
    }
}
