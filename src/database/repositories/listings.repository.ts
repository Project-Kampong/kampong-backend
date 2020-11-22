import { IDatabase, IMain } from 'pg-promise';
import { BaseRepository } from './base.repository';
import { ListingsView } from '../models';

export class ListingsRepository extends BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        super(db, pgp);
    }

    getListingById(listingId: string): Promise<ListingsView> {
        return this.db.one('SELECT * FROM listingsview WHERE listing_id = $1', listingId);
    }
}
