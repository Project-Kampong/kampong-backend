import express from 'express';
export const router = express.Router();
import { check, query } from 'express-validator';
import { protect, checkInputError, asyncHandler } from '../../middleware';
import { INVALID_FIELD_MSG } from '../../utils';

// Import listings-organisations controllers
import { createListingOrganisation, deleteListingOrganisation } from '../../controllers/listingsOrganisations';

// Define input validation
const validateCreateListingOrganisationEntryFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).isUUID(),
];
const validateDeleteListingOrganisationEntryFields = [
    query('listingId', INVALID_FIELD_MSG('listing id')).isUUID(),
    query('organisationId', INVALID_FIELD_MSG('organisation id')).isUUID(),
];

// Map routes to controller
router
    .route('/')
    .post(protect, validateCreateListingOrganisationEntryFields, checkInputError, asyncHandler(createListingOrganisation))
    .delete(protect, validateDeleteListingOrganisationEntryFields, checkInputError, asyncHandler(deleteListingOrganisation));
