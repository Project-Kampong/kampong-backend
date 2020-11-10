import express from 'express';
export const router = express.Router();
import { check } from 'express-validator';
import { protect, authorise, checkInputError } from '../../middleware';
import { INVALID_FIELD_MSG } from '../../utils';

// Import listings-organisations controllers
import { createListingOrganisation, deleteListingOrganisation } from '../../controllers/listingsOrganisations';

// Define input validation
const validateCreateListingOrganisationEntryFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isInt(),
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).isInt(),
];

// Map routes to controller
router.route('/').post(protect, validateCreateListingOrganisationEntryFields, checkInputError, createListingOrganisation);

router.route('/:id').delete(protect, authorise('admin', 'owner'), deleteListingOrganisation);
