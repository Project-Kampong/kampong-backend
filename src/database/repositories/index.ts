import { FaqsRepository } from './faqs.repository';
import { HashtagsRepository } from './hashtags.repository';
import { JobsRepository } from './jobs.repository';
import { ListingsRepository } from './listings.repository';
import { OrganisationJobsRepository } from './organisationJobs.repository';

// Database Interface Extensions (Add repositories here):
interface IExtensions {
    faqs: FaqsRepository;
    jobs: JobsRepository;
    listings: ListingsRepository;
    hashtags: HashtagsRepository;
    organisationJobs: OrganisationJobsRepository;
}

export { IExtensions, FaqsRepository, HashtagsRepository, JobsRepository, ListingsRepository, OrganisationJobsRepository };
