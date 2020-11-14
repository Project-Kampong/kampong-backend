import { FaqsRepository } from './faqs.repository';
import { ListingsRepository } from './listings.repository';

// Database Interface Extensions (Add repositories here):
interface IExtensions {
    faqs: FaqsRepository;
    listings: ListingsRepository;
}

export { IExtensions, FaqsRepository, ListingsRepository };
