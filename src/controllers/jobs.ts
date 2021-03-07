import { db, JobsRepository, ListingsRepository } from '../database';
import { CreateJobReqDto, UpdateJobReqDto } from '../models';
import { checkListingOwner, modelValidator, ErrorResponse, ModelValidator } from '../utils';

export class JobsController {
    constructor(
        private readonly jobsRepository: JobsRepository,
        private readonly listingsRepository: ListingsRepository,
        private readonly modelValidator: ModelValidator,
    ) {}

    /**
     * @desc    Get all jobs for a listing
     * @route   GET /api/listings/:listing_id/jobs
     * @access  Public
     */
    getJobs = async (req, res, next) => {
        if (req.params.listing_id) {
            const listingId: string = req.params.listing_id;
            // return 404 error response if listing not found
            await this.listingsRepository.getListingById(listingId);

            const jobs = await this.jobsRepository.getAllJobsForListing(listingId);
            return res.status(200).json({
                success: true,
                data: jobs,
            });
        }

        return next(new ErrorResponse('Invalid route', 404));
    };

    /**
     * @desc    Create job
     * @route   POST /api/jobs
     * @access  Owner/Admin
     */
    createJob = async (req, res, next) => {
        const { listing_id, job_title, job_description } = req.body;

        const data = {
            listing_id,
            job_title,
            job_description,
        };

        await this.modelValidator.validateModel(CreateJobReqDto, data);

        // check if listing exists and is listing owner
        const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

        // Unauthorised if neither admin nor listing owner
        if (!(req.user.role === 'admin' || isListingOwner)) {
            return next(new ErrorResponse(`Not authorised to create jobs for this listing`, 403));
        }

        const rows = await this.jobsRepository.createJob(data);

        res.status(201).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    Update single job
     * @route   PUT /api/jobs/:id
     * @access  Admin/Owner
     */
    updateJob = async (req, res, next) => {
        // check if job exists
        const job = await this.jobsRepository.getJobById(req.params.id);

        const { job_title, job_description } = req.body;

        const data = {
            job_title,
            job_description,
        };

        await this.modelValidator.validateModel(UpdateJobReqDto, data);

        // check if listing exists and is listing owner
        const isListingOwner = await checkListingOwner(req.user.user_id, job.listing_id);

        // Unauthorised if neither admin nor listing owner
        if (!(req.user.role === 'admin' || isListingOwner)) {
            return next(new ErrorResponse(`Not authorised to update jobs for this listing`, 403));
        }

        const rows = await this.jobsRepository.updateJobById(data, req.params.id);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    Delete single job
     * @route   DELETE /api/jobs/:id
     * @access  Owner/Admin
     */
    deleteJob = async (req, res, next) => {
        // check if job exists
        const job = await this.jobsRepository.getJobById(req.params.id);

        // check if listing exists and is listing owner
        const isListingOwner = await checkListingOwner(req.user.user_id, job.listing_id);

        // Unauthorised if neither admin nor listing owner
        if (!(req.user.role === 'admin' || isListingOwner)) {
            return next(new ErrorResponse(`Not authorised to delete jobs for this listing`, 403));
        }

        const rows = await this.jobsRepository.deleteJobById(req.params.id);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };
}

export const jobsController = new JobsController(db.jobs, db.listings, modelValidator);
