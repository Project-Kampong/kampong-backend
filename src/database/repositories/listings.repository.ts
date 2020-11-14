import { IDatabase, IMain } from 'pg-promise';
import { ListingsView } from '../models';

export class ListingsRepository {
    constructor(private db: IDatabase<any>, private pgp: IMain) {
        this.db = db;
    }

    getListingById(listingId: string): Promise<ListingsView> {
        return this.db.one('SELECT * FROM listingsview WHERE listing_id = $1', listingId);
    }
}
