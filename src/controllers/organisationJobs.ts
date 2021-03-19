import { CreateOrganisationJobReqDto, UpdateOrganisationJobReqDto } from '../models';
import { db, OrganisationJobsRepository, OrganisationsRepository } from '../database';
import { checkOrganisationOwner, cleanseData, ErrorResponse } from '../utils';

class OrganisationJobsController {
    constructor(
        private readonly organisationJobsRepository: OrganisationJobsRepository,
        private readonly organisationsRepository: OrganisationsRepository,
    ) {}

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
     * @desc    Create organisation job
     * @route   POST /api/organisation-jobs
     * @access  Owner/Admin
     */
    createOrganisationJob = async (req, res, next) => {
        const { organisation_id, organisation_job_title, organisation_job_description } = req.body;

        const data: CreateOrganisationJobReqDto = {
            organisation_id,
            organisation_job_title,
            organisation_job_description,
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
        const { organisationJobId } = req.params;

        // check if job exists
        const job = await this.organisationJobsRepository.getOrganisationJobById(organisationJobId);

        // check if organisation exists and user is organisation owner
        const isOrganisationOwner = await checkOrganisationOwner(req.user.user_id, job.organisation_id);

        // Unauthorised if neither admin nor organisation owner
        if (!(req.user.role === 'admin' || isOrganisationOwner)) {
            return next(new ErrorResponse(`Not authorised to create jobs for this listing`, 403));
        }

        const { organisation_job_title, organisation_job_description } = req.body;

        const data: UpdateOrganisationJobReqDto = {
            organisation_job_title,
            organisation_job_description,
        };

        cleanseData(data);

        const rows = await this.organisationJobsRepository.updateOrganisationJobById(data, organisationJobId);

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
        const { organisationJobId } = req.params;
        const rows = await this.organisationJobsRepository.deleteOrganisationJobById(organisationJobId);

        res.status(200).json({
            success: true,
            data: rows,
        });
    };
}

export const organisationJobsController = new OrganisationJobsController(db.organisationJobs, db.organisations);
