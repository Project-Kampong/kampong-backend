import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all programmes
 * @route   GET /api/programmes
 * @access  Public
 */
export const getProgrammes = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single programme by programme id
 * @route   GET /api/programmes/:id
 * @access  Public
 */
export const getProgramme = asyncHandler(async (req, res, next) => {
    const rows = await db.one('SELECT * FROM programmes WHERE programme_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Get all programmes for an organisation
 * @route   GET /api/organisations/:organisation_id/programmes
 * @access  Public
 */
export const getOrganisationProgrammes = asyncHandler(async (req, res, next) => {
    // if not organisation_id, go to next middleware
    if (!req.params.organisation_id) {
        return next();
    }

    const rows = db.manyOrNone('SELECT * FROM programmes WHERE organisation_id = $1', req.params.organisation_id);
    return res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Get single programme from an organisation
 * @route   GET /api/organisations/:organisation_id/programmes/:programme_id
 * @access  Public
 */
export const getOrganisationProgramme = asyncHandler(async (req, res, next) => {
    // if not organisation_id, go to next middleware
    if (!req.params.organisation_id) {
        return next();
    }

    const rows = db.one('SELECT * FROM programmes WHERE organisation_id = $1 AND programme_id = $2', req.params.organisation_id, req.params.progamme_id);
    return res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create programme
 * @route   POST /api/programmes
 * @access  Owner
 */
export const createProgramme = asyncHandler(async (req, res) => {
    const {
        organisation_id,
        title,
        about,
        media_url
    } = req.body;

    const data = {
        organisation_id,
        title,
        about,
        media_url
    };

    // remove undefined values in json object
    cleanseData(data);

    /**
     * SQL Transaction and creating programme
     * Returns a json containing programme data
     */
    const rows = await db.one('INSERT INTO programmes (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single programme
 * @route   PUT /api/programmes/:id
 * @access  Owner
 */
export const updateProgramme = asyncHandler(async (req, res, next) => {
    // check if programme exists
    const isValidProgramme = await db.oneOrNone('SELECT * FROM programmes WHERE programme_id = $1', req.params.id);

    // return bad request response if invalid organisation
    if (!isValidProgramme) {
        return next(new ErrorResponse(`Programme does not exist`, 400));
    }

    const {
        organisation_id,
        title,
        about,
        media_url
    } = req.body;

    const data = {
        organisation_id,
        title,
        about,
        media_url
    };

    cleanseData(data);

    const updateProgrammeQuery = parseSqlUpdateStmt(data, 'programmes', 'WHERE programme_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one(updateProgrammeQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single programme
 * @route   DELETE /api/programmes/:id
 * @access  Owner
 */
export const deleteProgramme = asyncHandler(async (req, res, next) => {
    // check if programme exists
    const programme = await db.one('SELECT * FROM programmes WHERE programme_id = $1', req.params.id);

    // Unauthorised if not owner
    if (req.user.role !== 'admin') {
        return next(new ErrorResponse(`User not authorised to delete this programme`, 403));
    }

    const rows = await db.one('DELETE FROM programmes WHERE programme_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
