import { map } from 'lodash';
import { db, ListingsRepository } from '../database';
import { BaseJob } from './base.job';

class ShuffleFeaturedListings extends BaseJob {
    constructor(private readonly listingsRepository: ListingsRepository) {
        super();
    }

    get frequency() {
        return '0 0 0 * * *';
    }

    get command() {
        return async () => {
            console.log('Running job to shuffle featured listings'.bgYellow.grey.inverse.dim);
            await this.listingsRepository.unsetAllFeaturedListings();
            const idsUpdated = await this.listingsRepository.setRandomFeaturedListings(3);
            const idsUpdatedArr = map(idsUpdated, 'listing_id');
            console.log(`Shuffle featured listings job completed. Updated listings ${idsUpdatedArr}.`.bgGreen.grey.inverse.dim);
        };
    }
}

export const shuffleFeaturedListings = new ShuffleFeaturedListings(db.listings);
