import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
const { advancedResults, checkInputError, protect } = require('../../middleware');
import { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// import controllers here
const { getListingStories, getListingStory, updateListingStory } = require('../../controllers/listingstories');

// Define input validation chain
const validateUpdateListingStoryFields = [
    oneOf([check('overview').exists(), check('problem').exists(), check('solution').exists(), check('outcome').exists()], NO_FIELD_UPDATED_MSG),
    check('overview', INVALID_FIELD_MSG('overview')).optional().trim().notEmpty(),
    check('problem', INVALID_FIELD_MSG('problem')).optional().trim().notEmpty(),
    check('solution', INVALID_FIELD_MSG('solution')).optional().trim().notEmpty(),
    check('outcome', INVALID_FIELD_MSG('outcome')).optional().trim().notEmpty(),
];

// All routes below use mergedParams from listings route
router
    .route('/')
    .get(getListingStory, advancedResults('listingstories'), getListingStories)
    .put(protect, validateUpdateListingStoryFields, checkInputError, updateListingStory);
