import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

interface ProgrammeSchema {
    programme_id: number;
    organisation_id: number;
    title: string;
    about: string;
    media_url: string[];
}

interface CreateProgrammeRequestSchema {
    organisation_id: number;
    title: string;
    about: string;
    media_url?: string[];
}

interface UpdateProgrammeRequestSchema {
    title?: string;
    about?: string;
    media_url?: string[];
}

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
        const rows = await db.manyOrNone<Promise<ProgrammeSchema[]>>(
            'SELECT * FROM programmes WHERE organisation_id = $1',
            req.params.organisation_id,
        );
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
    const row = await db.one<Promise<ProgrammeSchema>>('SELECT * FROM programmes WHERE programme_id = $1', req.params.id);
    res.status(200).json({
        success: true,
        data: row,
    });
});

/**
 * @desc    Create programme
 * @route   POST /api/programmes
 * @access  Admin/Owner
 */
export const createProgramme = asyncHandler(async (req, res, next) => {
    const { organisation_id, title, about, media_url } = req.body;

    const userId: string = req.user.user_id;
    const organisationId: number = parseInt(organisation_id);
    const isOrganisationOwner = await checkOrganisationOwner(userId, organisationId);

    if (req.user.role !== 'admin' && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to create programme as you are not the organisation owner', 403));
    }

    const data: CreateProgrammeRequestSchema = {
        organisation_id,
        title,
        about,
        media_url,
    };

    // remove undefined values in json object
    cleanseData(data);

    const row = await db.one<Promise<ProgrammeSchema>>('INSERT INTO programmes (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: row,
    });
});

/**
 * @desc    Update single programme
 * @route   PUT /api/programmes/:id
 * @access  Admin/Owner
 */
export const updateProgramme = asyncHandler(async (req, res, next) => {
    const { organisation_id } = await db.one<Promise<{ organisation_id: number }>>(
        'SELECT organisation_id FROM programmes WHERE programme_id = $1',
        req.params.id,
    );
    const userId: string = req.user.user_id;
    const isOrganisationOwner = await checkOrganisationOwner(userId, organisation_id);

    if (req.user.role !== 'admin' && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to update programme as you are not the organisation owner', 403));
    }

    const { title, about, media_url } = req.body;

    const data: UpdateProgrammeRequestSchema = {
        title,
        about,
        media_url,
    };

    cleanseData(data);

    const updateProgrammeQuery = parseSqlUpdateStmt(data, 'programmes', 'WHERE programme_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one<Promise<ProgrammeSchema>>(updateProgrammeQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single programme
 * @route   DELETE /api/programmes/:id
 * @access  Admin/Owner
 */
export const deleteProgramme = asyncHandler(async (req, res, next) => {
    const { organisation_id } = await db.one<Promise<{ organisation_id: number }>>(
        'SELECT organisation_id FROM programmes WHERE programme_id = $1',
        req.params.id,
    );
    const userId: string = req.user.user_id;
    const isOrganisationOwner = await checkOrganisationOwner(userId, organisation_id);

    if (req.user.role !== 'admin' && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to delete programme as you are not the organisation owner', 403));
    }

    const row = await db.one<Promise<ProgrammeSchema>>('DELETE FROM programmes WHERE programme_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: row,
    });
});

const checkOrganisationOwner = async (userId: string, organisationId: number) => {
    const owner = await db.one<Promise<{ owned_by: string }>>('SELECT owned_by FROM Organisations WHERE organisation_id = $1', organisationId);
    console.log(userId);
    console.log(owner.owned_by);
    return userId === owner.owned_by;
};
