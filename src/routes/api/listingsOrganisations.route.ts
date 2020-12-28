import express from 'express';
export const router = express.Router();
import { check } from 'express-validator';
import { protect, authorise, checkInputError, asyncHandler } from '../../middleware';
import { INVALID_FIELD_MSG } from '../../utils';

// Import listings-organisations controllers
import { createListingOrganisation, deleteListingOrganisation } from '../../controllers/listingsOrganisations';

// Define input validation
const validateCreateListingOrganisationEntryFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).isUUID(),
];

// Map routes to controller
router
    .route('/')
    .post(protect, validateCreateListingOrganisationEntryFields, checkInputError, asyncHandler(createListingOrganisation))
    .delete(protect, authorise('admin', 'owner'), asyncHandler(deleteListingOrganisation));
