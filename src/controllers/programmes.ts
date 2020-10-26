import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all programmes
 * @route   GET /api/programmes
 * @access  Public
 * @desc    Get all programmes for an organisation
 * @route   GET /api/organisations/:organisation_id/programmes
 * @access  Public
 */
export const getProgrammes = asyncHandler(async (req, res) => {
    if (req.params.organisation_id) {
        const rows = await db.manyOrNone('SELECT * FROM programmes WHERE organisation_id = $1', req.params.organisation_id);
        return res.status(200).json({
            success: true,
            data: rows,
        });
    }
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
 * @desc    Create programme
 * @route   POST /api/programmes
 * @access  Owner
 */
export const createProgramme = asyncHandler(async (req, res) => {
    const { organisation_id, title, about, media_url } = req.body;

    const data = {
        organisation_id,
        title,
        about,
        media_url,
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
    
    await db.one('SELECT * FROM programmes WHERE programme_id = $1', req.params.id);

    const { organisation_id, title, about, media_url } = req.body;

    const data = {
        organisation_id,
        title,
        about,
        media_url,
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

    // Unauthorised if not admin
    if (req.user.role !== 'admin') {
        return next(new ErrorResponse(`User not authorised to delete this programme`, 403));
    }

    // Unauthorised if not owner
    if (req.user.role !== 'owner') {
        return next(new ErrorResponse(`User not authorised to delete this programme`, 403));
    }

    const rows = await db.one('DELETE FROM programmes WHERE programme_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
