import moment from 'moment-timezone';
import { CreateOrganisationJobSchema } from '../database/models';
import { OrganisationJobsRepository, OrganisationsRepository } from '../database';
import { checkOrganisationOwner, cleanseData, ErrorResponse } from '../utils';

export class OrganisationJobsController {
    constructor(
        private readonly organisationJobsRepository: OrganisationJobsRepository,
        private readonly organisationsRepository: OrganisationsRepository,
    ) {
        this.organisationJobsRepository = organisationJobsRepository;
        this.organisationsRepository = organisationsRepository;
    }

    /**
     * @desc    Get all jobs for a organisation
     * @route   GET /api/organisations/:organisationId/jobs
     * @access  Public
     */
    getOrganisationJobs = async (req, res, next) => {
        if (req.params.organisation_id) {
            const organisationId: string = req.params.organisation_id;

            // return 404 error response if organisation not found
            await this.organisationsRepository.getOrganisationById(organisationId);

            const jobs = await this.organisationJobsRepository.getAllJobsForOrganisation(organisationId);
            return res.status(200).json({
                success: true,
                data: jobs,
            });
        }

        return next(new ErrorResponse('Invalid route', 404));
    };

    /**
     * @desc    Get single organisation job
     * @route   GET /api/organisation-jobs/:organisationJobId
     * @access  Public
     */
    getSingleOrganisationJob = async (req, res, next) => {
        const organisationJobId = req.params.organisationJobId;

        const job = await this.organisationJobsRepository.getOrganisationJobById(organisationJobId);
        return res.status(200).json({
            success: true,
            data: job,
        });
    };

    /**
     * @desc    Create organisation job
     * @route   POST /api/organisation-jobs
     * @access  Owner/Admin
     */
    createOrganisationJob = async (req, res, next) => {
        const { organisation_id, job_title, job_description } = req.body;

        const data: CreateOrganisationJobSchema = {
            organisation_id,
            organisation_job_title: job_title,
            organisation_job_description: job_description,
        };

        cleanseData(data);

        // check if organisation exists and user is organisation owner
        const isOrganisationOwner = await checkOrganisationOwner(req.user.user_id, organisation_id);

        // Unauthorised if neither admin nor organisation owner
        if (!(req.user.role === 'admin' || isOrganisationOwner)) {
            return next(new ErrorResponse(`Not authorised to create jobs for this listing`, 403));
        }

        const rows = await this.organisationJobsRepository.createOrganisationJob(data);

        res.status(201).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    Update single organisation job
     * @route   PUT /api/organisation-jobs/:organisationJobId
     * @access  Admin/Owner
     */
    updateOrganisationJob = async (req, res, next) => {
        // check if job exists and is not soft deleted
        const job = await this.organisationJobsRepository.getOrganisationJobById(req.params.organisationJobId);

        // check if organisation exists and user is organisation owner
        const isOrganisationOwner = await checkOrganisationOwner(req.user.user_id, job.organisation_id);

        // Unauthorised if neither admin nor organisation owner
        if (!(req.user.role === 'admin' || isOrganisationOwner)) {
            return next(new ErrorResponse(`Not authorised to create jobs for this listing`, 403));
        }

        const { job_title, job_description } = req.body;

        const data = {
            organisation_job_title: job_title,
            organisation_job_description: job_description,
        };

        cleanseData(data);

        const rows = await this.organisationJobsRepository.updateOrganisationJobById(data, req.params.organisationJobId);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    Deactivate (Soft delete) single organisation job
     * @route   PUT /api/organisation-jobs/:organisationJobId/deactivate
     * @access  Admin/Owner
     */
    deactivateOrganisationJob = async (req, res, next) => {
        // check if job exists and not soft deleted
        const job = await this.organisationJobsRepository.getOrganisationJobById(req.params.organisationJobId);

        // check if organisation exists and user is organisation owner
        const isOrganisationOwner = await checkOrganisationOwner(req.user.user_id, job.organisation_id);

        // Unauthorised if neither admin nor organisation owner
        if (!(req.user.role === 'admin' || isOrganisationOwner)) {
            return next(new ErrorResponse(`Not authorised to create jobs for this listing`, 403));
        }

        const data = {
            deleted_on: moment.tz(process.env.DEFAULT_TIMEZONE).toDate(),
        };

        const rows = await this.organisationJobsRepository.deactivateOrganisationJobById(data, req.params.organisationJobId);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };

    /**
     * @desc    Delete single organisation job
     * @route   DELETE /api/organisation-jobs/:organisationJobId
     * @access  Admin
     */
    deleteOrganisationJob = async (req, res, next) => {
        const rows = await this.organisationJobsRepository.deleteOrganisationJobById(req.params.organisationJobId);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };
}
