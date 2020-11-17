import moment from 'moment-timezone';
import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { checkOrganisationOwner, cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Create announcement in organisation
 * @route   POST /api/announcements
 * @access  Admin/Owner
 */
export const createAnnouncement = asyncHandler(async (req, res, next) => {
    const { organisation_id, announcement } = req.body;
    const isOrganisationOwner = await checkOrganisationOwner(req.user.user_id, organisation_id);

    if (!(req.user.role === 'admin' || isOrganisationOwner)) {
        return next(new ErrorResponse(`Not authorised to create an announcement in this organisation`, 403));
    }

    const data = {
        organisation_id,
        announcement,
    };

    cleanseData(data);

    const rows = await db.one('INSERT INTO organisationannouncements (${this:name}) VALUES (${this:csv}) RETURNING *', data);

    res.status(201).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Update single announcement (identified by announcement_id)
 * @route   PUT /api/annoucements/:id
 * @access  Admin/Owner
 */
export const updateAnnouncement = asyncHandler(async (req, res, next) => {
    const { announcement } = req.body;
    const organisationIdObj = await db.one(
        'SELECT organisation_id FROM organisationannouncements WHERE announcement_id = $1',
        req.params.announcement_id,
    );
    console.log(organisationIdObj.organisation_id);
    const isOrganisationOwner = await checkOrganisationOwner(req.user.user_id, organisationIdObj.organisation_id);

    if (!(req.user.role === 'admin' || isOrganisationOwner)) {
        return next(new ErrorResponse(`Not authorised to update an announcement in this organisation`, 403));
    }

    const data = {
        announcement,
        updated_on: moment.tz(process.env.DEFAULT_TIMEZONE).toDate(),
    };

    cleanseData(data);

    const updateAnnoucementQuery = parseSqlUpdateStmt(
        data,
        'organisationannouncements',
        'WHERE announcement_id = $1 RETURNING *',
        req.params.announcement_id,
    );

    const rows = await db.one(updateAnnoucementQuery);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Delete single announcement (identified by announcement_id)
 * @route   Delete /api/annoucements/:id
 * @access  Admin/Owner
 */
export const deleteAnnouncement = asyncHandler(async (req, res, next) => {
    const organisationIdObj = await db.one(
        'SELECT organisation_id FROM organisationannouncements WHERE announcement_id = $1',
        req.params.announcement_id,
    );
    const isOrganisationOwner = await checkOrganisationOwner(req.user.user_id, organisationIdObj.organisation_id);

    if (!(req.user.role === 'admin' || isOrganisationOwner)) {
        return next(new ErrorResponse(`Not authorised to update an announcement in this organisation`, 403));
    }

    const rows = await db.one('DELETE FROM organisationannouncements WHERE announcement_id = $1 RETURNING *', req.params.announcement_id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
