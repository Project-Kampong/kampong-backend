import { db } from '../database/db';
import { asyncHandler } from '../middleware';
import { cleanseData, ErrorResponse, parseSqlUpdateStmt } from '../utils';

interface OrganisationSchema {
    organisation_id: number;
    name: string;
    organisation_type: string;
    about: string;
    website_url: string;
    phone: string;
    email: string;
    owned_by: string;
    locations: string[];
    story: string;
    is_verified: boolean;
    created_on: Date;
    deleted_on: Date;
}

interface CreateOrganisationRequestSchema {
    name: string;
    organisation_type?: string;
    about: string;
    website_url?: string;
    phone?: string;
    email: string;
    address: string;
    owned_by: string;
    locations: string[];
    story: string;
    facebook_link: string;
    twitter_link: string;
    instagram_link: string;
    banner_photo: string;
    profile_photo: string;
    additional_photos: string[];
}

interface UpdateOrganisationRequestSchema {
    name?: string;
    organisation_type?: string;
    about?: string;
    website_url?: string;
    phone?: string;
    email?: string;
    address?: string;
    locations?: string[];
    story?: string;
    facebook_link?: string;
    twitter_link?: string;
    instagram_link?: string;
    banner_photo?: string;
    profile_photo?: string;
    additional_photos?: string[];
}

/**
 * @desc    Get all organisations
 * @route   GET /api/organisations
 * @desc    Get all organisations for a single listing
 * @route   GET /api/listings/:listing_id/organisations
 * @access  Public
 */
export const getOrganisations = asyncHandler(async (req, res) => {
    console.log(`Listing ID = ${req.params.listing_id}`);
    if (req.params.listing_id) {
        const rows = await db.manyOrNone<Promise<OrganisationSchema[]>>(
            'SELECT * FROM listings l LEFT JOIN listingsorganisations lo ON l.listing_id = lo.listing_id LEFT JOIN organisations o ON lo.organisation_id = o.organisation_id WHERE l.listing_id = $1',
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
    const rows = await db.one<Promise<OrganisationSchema>>('SELECT * FROM organisations WHERE organisation_id = $1', req.params.id);
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

    const data: CreateOrganisationRequestSchema = {
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

    const rows = await db.one<OrganisationSchema>('INSERT INTO organisations (${this:name}) VALUES (${this:csv}) RETURNING *', data);

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
    const organisationId: number = parseInt(req.params.id);
    const isOrganisationOwner = await checkOrganisationOwner(userId, organisationId);

    if (req.user.role !== 'admin' && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to delete organisation as you are not the organisation owner', 403));
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

    const data: UpdateOrganisationRequestSchema = {
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

    const updateOrganisationQuery = parseSqlUpdateStmt(data, 'organisations', 'WHERE organisation_id = $1 RETURNING *', [req.params.id]);

    const rows = await db.one<OrganisationSchema>(updateOrganisationQuery);

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
    const organisationId: number = parseInt(req.params.id);
    const isOrganisationOwner = await checkOrganisationOwner(userId, organisationId);

    if (req.user.role !== 'admin' && !isOrganisationOwner) {
        return next(new ErrorResponse('Not authorised to delete organisation as you are not the organisation owner', 403));
    }

    const rows = await db.one<OrganisationSchema>('DELETE FROM organisations WHERE organisation_id = $1 RETURNING *', req.params.id);

    res.status(200).json({
        success: true,
        data: rows,
    });
});

const checkOrganisationOwner = async (userId: string, organisationId: number) => {
    const owner = await db.one<Promise<{ owned_by: string }>>('SELECT owned_by FROM Organisations WHERE organisation_id = $1', organisationId);
    return userId === owner.owned_by;
};
