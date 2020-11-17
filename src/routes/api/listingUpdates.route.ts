import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { checkInputError, protect } from '../../middleware';
import { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { getListingUpdatesForListing, createListingUpdate, modifyListingUpdate, deleteListingUpdate } from '../../controllers/listingUpdates';

// Define input validation chain
const validateCreateListingUpdateFields = [
    check('listing_id', INVALID_FIELD_MSG('listing id')).isUUID(),
    check('description', INVALID_FIELD_MSG('description')).trim().notEmpty(),
];

const validateModifyListingUpdateFields = [
    oneOf(
        [
            check('description').exists(),
            check('pic1').exists(),
            check('pic2').exists(),
            check('pic3').exists(),
            check('pic4').exists(),
            check('pic5').exists(),
        ],
        NO_FIELD_UPDATED_MSG,
    ),
    check('description', INVALID_FIELD_MSG('description')).optional().trim().notEmpty(),
];

router.route('/').get(getListingUpdatesForListing);

// all routes below only accessible to authenticated user (specifically, listing owner, to be implemented)
router.use(protect);

// map routes to controller
router.route('/').post(validateCreateListingUpdateFields, checkInputError, createListingUpdate);
router.route('/:id').put(validateModifyListingUpdateFields, checkInputError, modifyListingUpdate).delete(deleteListingUpdate);
