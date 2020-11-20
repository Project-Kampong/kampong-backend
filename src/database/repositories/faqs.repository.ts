import { IDatabase, IMain } from 'pg-promise';
import { BaseRepository } from './base.repository';
import { CreateFaqSchema, Faq, UpdateFaqSchema } from '../models';

export class FaqsRepository extends BaseRepository {
    constructor(protected readonly db: IDatabase<any>, protected readonly pgp: IMain) {
        super(db, pgp);
    }

    getAllFaqsForListing(listingId: string): Promise<Faq[]> {
        return this.db.manyOrNone('SELECT * FROM faqs WHERE listing_id = $1', listingId);
    }

    getFaqById(faqId: string): Promise<Faq> {
        return this.db.one('SELECT * FROM faqs WHERE faq_id = $1', faqId);
    }

    createFaq(createFaqData: CreateFaqSchema): Promise<Faq> {
        return this.db.one('INSERT INTO faqs (${this:name}) VALUES (${this:csv}) RETURNING *', createFaqData);
    }

    updateFaqById(updateFaqData: UpdateFaqSchema, faqId: string): Promise<Faq> {
        const updateFaqQuery = this.pgp.helpers.update(updateFaqData, null, 'faqs') + this.pgp.as.format(' WHERE faq_id = $1 RETURNING *', faqId);
        return this.db.one(updateFaqQuery);
    }

    deleteFaqById(faqId: string): Promise<Faq> {
        return this.db.one('DELETE FROM faqs WHERE faq_id = $1 RETURNING *', faqId);
    }
}
