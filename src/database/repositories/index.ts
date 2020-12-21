import { CategoriesRepository } from './categories.repository';
import { FaqsRepository } from './faqs.repository';
import { HashtagsRepository } from './hashtags.repository';
import { JobsRepository } from './jobs.repository';
import { ListingsRepository } from './listings.repository';
import { OrganisationsRepository } from './organisations.repository';
import { OrganisationJobsRepository } from './organisationJobs.repository';
import { UsersRepository } from './users.repository';

// Database Interface Extensions (Add repositories here):
interface IExtensions {
    categories: CategoriesRepository;
    faqs: FaqsRepository;
    jobs: JobsRepository;
    listings: ListingsRepository;
    hashtags: HashtagsRepository;
    organisations: OrganisationsRepository;
    organisationJobs: OrganisationJobsRepository;
    users: UsersRepository;
}

export {
    IExtensions,
    CategoriesRepository,
    FaqsRepository,
    HashtagsRepository,
    JobsRepository,
    ListingsRepository,
    OrganisationsRepository,
    OrganisationJobsRepository,
    UsersRepository,
};
