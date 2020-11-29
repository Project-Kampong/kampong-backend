import { IDatabase, IMain } from 'pg-promise';
import { BaseRepository } from './base.repository';
import { CreateHashtagSchema, Hashtag } from '../models';

export class HashtagsRepository extends BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        super(db, pgp);
    }

    getAllHashtagsForListing(listingId: string): Promise<Hashtag[]> {
        return this.db.manyOrNone('SELECT * FROM hashtag WHERE listing_id = $1', listingId);
    }

    getHashtagById(hashtagId: string): Promise<Hashtag> {
        return this.db.one('SELECT * FROM hashtag WHERE hashtag_id = $1', hashtagId);
    }

    createHashtag(createHashtagData: CreateHashtagSchema): Promise<Hashtag> {
        return this.db.one('INSERT INTO hashtag (${this:name}) VALUES (${this:csv}) RETURNING *', createHashtagData);
    }

    deleteHashtagById(hashtagId: string): Promise<Hashtag> {
        return this.db.one('DELETE FROM hashtag WHERE hashtag_id = $1 RETURNING *', hashtagId);
    }
}
