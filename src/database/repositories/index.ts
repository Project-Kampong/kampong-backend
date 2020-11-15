import { FaqsRepository } from './faqs.repository';
import { HashtagsRepository } from './hashtags.repository';
import { ListingsRepository } from './listings.repository';

// Database Interface Extensions (Add repositories here):
interface IExtensions {
    faqs: FaqsRepository;
    listings: ListingsRepository;
    hashtags: HashtagsRepository;
}

export { IExtensions, FaqsRepository, HashtagsRepository, ListingsRepository };
