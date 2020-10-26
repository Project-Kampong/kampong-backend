import moment from 'moment';
import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all jobs
 * @route   GET /api/jobs
 * @desc    Get all jobs for a listing
 * @route   GET /api/listings/:listing_id/jobs
 * @access  Public
 */
export const getJobs = asyncHandler(async (req, res) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found or soft deleted
        await db.one('SELECT * FROM listingsview WHERE listing_id = $1', req.params.listing_id);

        const jobs = await db.manyOrNone('SELECT * FROM jobsview WHERE listing_id = $1', req.params.listing_id);
        return res.status(200).json({
            success: true,
            count: jobs.length,
            data: jobs,
        });
    }

    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get all jobs including soft deletes
 * @route   GET /api/jobs/all
 * @desc    Get all jobs for a listing including soft deletes
 * @route   GET /api/listings/:listing_id/jobs/all
 * @access  Admin
 */
export const getJobsAll = asyncHandler(async (req, res) => {
    if (req.params.listing_id) {
        // return 404 error response if listing not found
        await db.one('SELECT * FROM listings WHERE listing_id = $1', req.params.listing_id);

        const jobs = await db.manyOrNone('SELECT * FROM jobs WHERE listing_id = $1', req.params.listing_id);
        return res.status(200).json({
            success: true,
            count: jobs.length,
            data: jobs,
        });
    }

    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single job
 * @route   GET /api/jobs/:id
 * @access  Public
 */
export const getJob = asyncHandler(async (req, res) => {
    const rows = await db.one('SELECT * FROM jobsview WHERE job_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
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

    // if non-admin ,check if owner of listing
    if (req.user.role !== 'admin') {
        const listingOwner = await isListingOwner(req.user.user_id, listing_id);
        if (!listingOwner) {
            return next(new ErrorResponse(`Not authorised to create jobs in this listing`, 403));
        }
    }

    const rows = await db.one('INSERT INTO jobs (${this:name}) VALUES (${this:csv}) RETURNING *', data);

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
    const job = await db.one('SELECT * FROM jobsview WHERE job_id = $1', req.params.id);

    // if non-admin, check if owner of listing
    if (req.user.role !== 'admin') {
        const listingOwner = await isListingOwner(req.user.user_id, job.listing_id);
        if (!listingOwner) {
            return next(new ErrorResponse(`Not authorised to update jobs in this listing`, 403));
        }
    }

    const { job_title, job_description } = req.body;

    const data = {
        job_title,
        job_description,
    };

    cleanseData(data);

    const updateJobQuery = parseSqlUpdateStmt(data, 'jobs', 'WHERE job_id = $1 RETURNING *', [req.params.id]);

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
    const job = await db.one('SELECT * FROM jobsview WHERE job_id = $1', req.params.id);

    // if non-admin, check if owner of listing
    if (req.user.role !== 'admin') {
        const listingOwner = await isListingOwner(req.user.user_id, job.listing_id);
        if (!listingOwner) {
            return next(new ErrorResponse(`Not authorised to delete jobs in this listing`, 403));
        }
    }

    const rows = await db.one('UPDATE jobs SET deleted_on=$2 WHERE job_id = $1 RETURNING *', [
        req.params.id,
        moment().format('YYYY-MM-DD HH:mm:ss.000'),
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
    await db.one('SELECT * FROM jobs WHERE job_id = $1', req.params.id);

    // check if user is admin
    if (req.user.role !== 'admin') {
        return next(new ErrorResponse(`Not authorised to delete jobs in this listing`, 403));
    }

    const rows = await db.one('DELETE FROM jobs WHERE job_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

const isListingOwner = async (userId, listingId) => {
    const owner = await db.one('SELECT created_by FROM Listings WHERE listing_id = $1', listingId);
    return userId === owner.created_by;
};
