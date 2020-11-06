import express from 'express';
export const router = express.Router();
import { check, oneOf } from 'express-validator';
import { advancedResults, protect, authorise, checkInputError } from '../../middleware';
import {
    ALPHA_WHITESPACE_REGEX,
    INVALID_EMAIL_MSG,
    INVALID_ALPHA_SPACE_MSG,
    INVALID_PASSWORD_MSG,
    NO_FIELD_UPDATED_MSG,
    PASSWORD_REGEX,
} from '../../utils';

// import controllers here
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../../controllers/users';

// Include other resource's controllers to access their endpoints
import { router as likesRoute } from './likes.route';
import { router as listingCommentsRoute } from './listingComments.route';
import { router as listingsRoute } from './listings.route';
import { router as participantsRoute } from './participants.route';
import { router as profilesRoute } from './profiles.route';

// Re-route this URI to other resource router
router.use('/profiles', profilesRoute);
router.use('/:user_id/likes', likesRoute);
router.use('/:user_id/listing-comments', listingCommentsRoute);
router.use('/:user_id/listings', listingsRoute);
router.use('/:user_id/participants', participantsRoute);
router.use('/:user_id/profiles', profilesRoute);

// Define input validation chain
const validateCreateUserFields = [
    check('first_name', INVALID_ALPHA_SPACE_MSG('first name')).trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('last_name', INVALID_ALPHA_SPACE_MSG('last name')).optional().trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('email', INVALID_EMAIL_MSG).trim().isEmail().normalizeEmail(),
    check('password', INVALID_PASSWORD_MSG).matches(PASSWORD_REGEX),
];

const validateUpdateUserFields = [
    oneOf([check('first_name').exists(), check('last_name').exists(), check('email').exists(), check('password').exists()], NO_FIELD_UPDATED_MSG),
    check('first_name', INVALID_ALPHA_SPACE_MSG('first name')).optional().trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('last_name', INVALID_ALPHA_SPACE_MSG('last name')).optional().trim().notEmpty().matches(ALPHA_WHITESPACE_REGEX),
    check('email', INVALID_EMAIL_MSG).optional().trim().isEmail().normalizeEmail(),
    check('password', INVALID_PASSWORD_MSG).optional().matches(PASSWORD_REGEX),
];

// all route to use protect middleware
router.use(protect);
router.use(authorise('admin')); // admin only route

// map routes to controller
router.route('/').get(advancedResults('users'), getUsers).post(validateCreateUserFields, checkInputError, createUser);

router.route('/:id').get(getUser).put(validateUpdateUserFields, checkInputError, updateUser).delete(deleteUser);
