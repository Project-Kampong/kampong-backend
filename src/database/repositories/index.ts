import { CategoriesRepository } from './categories.repository';
import { ChatRoomsRepository } from './chatRooms.repository';
import { FaqsRepository } from './faqs.repository';
import { HashtagsRepository } from './hashtags.repository';
import { JobsRepository } from './jobs.repository';
import { ListingsRepository } from './listings.repository';
import { OrganisationsRepository } from './organisations.repository';
import { OrganisationJobsRepository } from './organisationJobs.repository';

// Database Interface Extensions (Add repositories here):
interface IExtensions {
    categories: CategoriesRepository;
    chatRooms: ChatRoomsRepository;
    faqs: FaqsRepository;
    jobs: JobsRepository;
    listings: ListingsRepository;
    hashtags: HashtagsRepository;
    organisations: OrganisationsRepository;
    organisationJobs: OrganisationJobsRepository;
}

export {
    IExtensions,
    CategoriesRepository,
    ChatRoomsRepository,
    FaqsRepository,
    HashtagsRepository,
    JobsRepository,
    ListingsRepository,
    OrganisationsRepository,
    OrganisationJobsRepository,
};
