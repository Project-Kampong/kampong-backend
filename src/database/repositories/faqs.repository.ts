import { BaseRepository } from './base.repository';
import { CreateFaqSchema, Faq, UpdateFaqSchema } from '../../models';

export class FaqsRepository extends BaseRepository {
    async getAllFaqsForListing(listingId: string): Promise<Faq[]> {
        return this.db.manyOrNone('SELECT * FROM faq WHERE listing_id = $1', listingId);
    }

    async getFaqById(faqId: string): Promise<Faq> {
        return this.db.one('SELECT * FROM faq WHERE faq_id = $1', faqId);
    }

    async createFaq(createFaqData: CreateFaqSchema): Promise<Faq> {
        return this.db.one('INSERT INTO faq (${this:name}) VALUES (${this:csv}) RETURNING *', createFaqData);
    }

    async updateFaqById(updateFaqData: UpdateFaqSchema, faqId: string): Promise<Faq> {
        const updateFaqQuery = this.pgp.helpers.update(updateFaqData, null, 'faq') + this.pgp.as.format(' WHERE faq_id = $1 RETURNING *', faqId);
        return this.db.one(updateFaqQuery);
    }

    async deleteFaqById(faqId: string): Promise<Faq> {
        return this.db.one('DELETE FROM faq WHERE faq_id = $1 RETURNING *', faqId);
    }
}
