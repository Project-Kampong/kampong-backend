import { IDatabase, IMain } from 'pg-promise';
import { ListingsView } from '../models';
import { BaseRepository } from './base.repository';

export class ListingsRepository extends BaseRepository {
    constructor(protected db: IDatabase<any>, protected pgp: IMain) {
        super(db, pgp);
    }

    getListingById(listingId: string): Promise<ListingsView> {
        return this.db.one('SELECT * FROM listingsview WHERE listing_id = $1', listingId);
    }
}
