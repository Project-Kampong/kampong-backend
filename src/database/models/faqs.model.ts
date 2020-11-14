export interface Faqs {
    faq_id: number;
    listing_id: string;
    question: string;
    answer: string;
}

export interface CreateFaqSchema {
    listing_id: string;
    question: string;
    answer: string;
}

export interface UpdateFaqSchema {
    question: string;
    answer: string;
}
