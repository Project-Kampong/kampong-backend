import { v1 as uuidv1 } from 'uuid';
import { db } from '../database/db';
import { Organisation, CreateOrganisationReqDto, UpdateOrganisationReqDto } from '../models';
import { asyncHandler } from '../middleware';
import { checkOrganisationOwner, cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

/**
 * @desc    Get all organisations
 * @route   GET /api/organisations
 * @desc    Get all organisations for a single listing
 * @route   GET /api/listings/:listing_id/organisations
 * @access  Public
 */
export const getOrganisations = asyncHandler(async (req, res) => {
    if (req.params.user_id) {
        const rows = await db.manyOrNone(
            'SELECT o.* FROM loginuser lu LEFT JOIN organisation o ON lu.user_id = o.owned_by WHERE lu.user_id = $1',
            req.params.user_id,
        );
        return res.status(200).json({
            success: true,
            data: rows,
        });
    }
    if (req.params.listing_id) {
        const rows = await db.manyOrNone(
            'SELECT * FROM listing l LEFT JOIN listingorganisation lo ON l.listing_id = lo.listing_id LEFT JOIN organisation o ON lo.organisation_id = o.organisation_id WHERE l.listing_id = $1',
            req.params.listing_id,
        );
        return res.status(200).json({
            success: true,
            data: rows,
        });
    }
    res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single organisation
 * @route   GET /api/organisations/:id
 * @access  Public
 */
export const getOrganisation = asyncHandler(async (req, res) => {
    const rows = await db.one<Promise<Organisation>>('SELECT * FROM organisation WHERE organisation_id = $1', req.params.id);
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
    const {
        name,
        organisation_type,
        about,
        website_url,
        phone,
        email,
        address,
        locations,
        story,
        facebook_link,
        twitter_link,
        instagram_link,
        banner_photo,
        profile_photo,
        additional_photos,
    } = req.body;

    const data: CreateOrganisationReqDto = {
        organisation_id: uuidv1(),
        name,
        organisation_type,
        about,
        website_url,
        phone,
        email,
        address,
        locations,
        story,
        facebook_link,
        twitter_link,
        instagram_link,
        banner_photo,
        profile_photo,
        additional_photos,
        owned_by: req.user.user_id,
    };

    cleanseData(data);

    const rows = await db.one<Organisation>('INSERT INTO organisation (${this:name}) VALUES (${this:csv}) RETURNING *', data);

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
    const userId: string = req.user.user_id;
    const isOrganisationOwner = await checkOrganisationOwner(userId, req.params.id);

    console.log(req.user.role);
    if (req.user.role !== 'admin' && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to update organisation as you are not the organisation owner', 403));
    }

    const {
        name,
        organisation_type,
        about,
        website_url,
        phone,
        email,
        address,
        locations,
        story,
        facebook_link,
        twitter_link,
        instagram_link,
        banner_photo,
        profile_photo,
        additional_photos,
    } = req.body;

    const data: UpdateOrganisationReqDto = {
        name,
        organisation_type,
        about,
        website_url,
        phone,
        email,
        address,
        locations,
        story,
        facebook_link,
        twitter_link,
        instagram_link,
        banner_photo,
        profile_photo,
        additional_photos,
    };

    cleanseData(data);

    const updateOrganisationQuery = parseSqlUpdateStmt(data, 'organisation', 'WHERE organisation_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one<Organisation>(updateOrganisationQuery);

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
    const userId: string = req.user.user_id;
    const isOrganisationOwner = await checkOrganisationOwner(userId, req.params.id);

    if (req.user.role !== 'admin' && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to delete organisation as you are not the organisation owner', 403));
    }

    const rows = await db.one<Organisation>('DELETE FROM organisation WHERE organisation_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

/**
 * @desc    Soft delete single organisation
 * @route   PUT /api/organisations/:id
 * @access  Admin/Owner
 */
export const deactivateOrganisation = asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const { user_id: userId }: { user_id: string; [key: string]: string } = req.user;
    const isOrganisationOwner = await checkOrganisationOwner(userId, req.params.id);
    // check current user is admin or owner of listing
    if (req.user.role !== 'admin' && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to delete organisation as you are not the organisation owner', 403));
    }
    // update db with new value for the affected organisation
    // UPDATE organisation SET (deleted_on) WHERE organisation_id = :id
    const rows = await db.one('UPDATE organisation SET (deleted_on) = $1 WHERE organisation_id = $2 RETURNING *', [new Date(), id]);

    res.status(200).json({
        success: true,
        data: rows,
    });
});
