import { db } from '../database';
import { parseSqlUpdateStmt } from '../utils';

class FaqsSchema {
    faq_id: number;
    listing_id: string;
    question: string;
    answer: string;
}

class CreateFaqSchema {
    listing_id: string;
    question: string;
    answer: string;
}

class UpdateFaqSchema {
    question: string;
    answer: string;
}

export class FaqsRepository {
    static getAllFaqsForListing(listingId: string): Promise<FaqsSchema[]> {
        return db.manyOrNone('SELECT * FROM faqs WHERE listing_id = $1', listingId);
    }

    static getFaqById(faqId: string): Promise<FaqsSchema> {
        return db.one('SELECT * FROM faqs WHERE faq_id = $1', faqId);
    }

    static createFaq(createFaqData: CreateFaqSchema): Promise<FaqsSchema> {
        return db.one('INSERT INTO faqs (${this:name}) VALUES (${this:csv}) RETURNING *', createFaqData);
    }

    static updateFaqById(updateFaqData: UpdateFaqSchema, faqId: string): Promise<FaqsSchema> {
        const updateFaqQuery = parseSqlUpdateStmt(updateFaqData, 'faqs', 'WHERE faq_id = $1 RETURNING *', faqId);
        return db.one(updateFaqQuery);
    }

    static deleteFaqById(faqId: string): Promise<FaqsSchema> {
        return db.one('DELETE FROM faqs WHERE faq_id = $1 RETURNING *', faqId);
    }
}
