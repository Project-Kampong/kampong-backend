import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all organisations
 * @route   GET /api/organisations
 * @access  Public
 */
export const getOrganisations = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single organisation
 * @route   GET /api/organisations/:id
 * @access  Public
 */
export const getOrganisation = asyncHandler(async (req, res) => {
    const rows = await db.one('SELECT * FROM organisations WHERE organisation_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Create organisation
 * @route   POST /api/organisations
 * @access  Private
 */
export const createOrganisation = asyncHandler(async (req, res) => {
    const { name, type, about, website_url, handphone, email } = req.body;

    const data = {
        name,
        type,
        about,
        website_url,
        handphone,
        email,
    };

    /**
     * SQL Transaction and creating organisation
     * Returns a json containing organisation data
     */
    const rows = await db.one('INSERT INTO organisations (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single organisation
 * @route   PUT /api/organisations/:id
 * @access  Admin/Owner
 */
export const updateOrganisation = asyncHandler(async (req, res, next) => {
    // check if organisation exists
    const isValidOrganisation = await db.oneOrNone('SELECT * FROM organisations WHERE organisation_id = $1', req.params.id);

    // return bad request response if invalid organisation
    if (!isValidOrganisation) {
        return next(new ErrorResponse(`Organisation does not exist`, 400));
    }

    const { name, type, about, website_url, handphone, email } = req.body;

    const data = {
        name,
        type,
        about,
        website_url,
        handphone,
        email,
    };

    cleanseData(data);

    const updateOrganisationQuery = parseSqlUpdateStmt(data, 'organisations', 'WHERE organisation_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one(updateOrganisationQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single organisation
 * @route   DELETE /api/organisations/:id
 * @access  Admin/Owner
 */
export const deleteOrganisation = asyncHandler(async (req, res, next) => {
    // check if organisation exists
    const organisation = await db.oneOrNone('SELECT * FROM organisations WHERE organisation_id = $1', req.params.id);

    // return bad request response if invalid organisation
    if (!organisation) {
        return next(new ErrorResponse(`Organisation does not exist`, 400));
    }

    const rows = await db.one('DELETE FROM organisations WHERE organisation_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
