import moment from 'moment-timezone';
import { db } from '../database';
import { asyncHandler } from '../middleware';
import { checkListingOwner, cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all jobs for a listing
 * @route   GET /api/listings/:listing_id/jobs
 * @access  Public
 */
export const getJobs = asyncHandler(async (req, res, next) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found or soft deleted
        await db.one('SELECT * FROM listingview WHERE listing_id = $1', req.params.listing_id);

        const jobs = await db.manyOrNone('SELECT * FROM jobview WHERE listing_id = $1', req.params.listing_id);
        return res.status(200).json({
            success: true,
            count: jobs.length,
            data: jobs,
        });
    }
    return next(new ErrorResponse('Invalid route', 404));
});

/**
 * @desc    Create job
 * @route   POST /api/jobs
 * @access  Owner/Admin
 */
export const createJob = asyncHandler(async (req, res, next) => {
    const { listing_id, job_title, job_description } = req.body;

    const data = {
        listing_id,
        job_title,
        job_description,
    };

    cleanseData(data);

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to create jobs for this listing`, 403));
    }

    const rows = await db.one('INSERT INTO job (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single job
 * @route   PUT /api/jobs/:id
 * @access  Admin/Owner
 */
export const updateJob = asyncHandler(async (req, res, next) => {
    // check if job exists and is not soft deleted
    const job = await db.one('SELECT * FROM jobview WHERE job_id = $1', req.params.id);

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, job.listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to update job for this listing`, 403));
    }

    const { job_title, job_description } = req.body;

    const data = {
        job_title,
        job_description,
    };

    cleanseData(data);

    const updateJobQuery = parseSqlUpdateStmt(data, 'job', 'WHERE job_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one(updateJobQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Deactivate (Soft delete) single job
 * @route   PUT /api/jobs/:id/deactivate
 * @access  Admin/Owner
 */
export const deactivateJob = asyncHandler(async (req, res, next) => {
    // check if job exists nd not soft deleted
    const job = await db.one('SELECT * FROM jobview WHERE job_id = $1', req.params.id);

    // check if listing exists and is listing owner
    const isListingOwner = await checkListingOwner(req.user.user_id, job.listing_id);

    // Unauthorised if neither admin nor listing owner
    if (!(req.user.role === 'admin' || isListingOwner)) {
        return next(new ErrorResponse(`Not authorised to deactivate jobs for this listing`, 403));
    }

    const rows = await db.one('UPDATE job SET deleted_on=$2 WHERE job_id = $1 RETURNING *', [
        req.params.id,
        moment.tz(process.env.DEFAULT_TIMEZONE).toDate(),
    ]);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single job
 * @route   DELETE /api/jobs/:id
 * @access  Admin
 */
export const deleteJob = asyncHandler(async (req, res, next) => {
    // check if job exists
    await db.one('SELECT * FROM job WHERE job_id = $1', req.params.id);

    const rows = await db.one('DELETE FROM job WHERE job_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
