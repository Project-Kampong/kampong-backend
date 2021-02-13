export interface Hashtag {
    hashtag_id: number;
    listing_id: string;
    tag: string;
}

export interface CreateHashtagSchema {
    listing_id: string;
    tag: string;
}
