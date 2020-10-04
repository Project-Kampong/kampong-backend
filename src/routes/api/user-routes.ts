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
import { router as likeRoute } from './like-routes';
import { router as listingCommentRoute } from './listingcomment-routes';
import { router as listingRoute } from './listing-routes';
import { router as participantRoute } from './participant-routes';
import { router as profileRoute } from './profile-routes';

// Re-route this URI to other resource router
router.use('/profiles', profileRoute);
router.use('/:user_id/likes', likeRoute);
router.use('/:user_id/listing-comments', listingCommentRoute);
router.use('/:user_id/listings', listingRoute);
router.use('/:user_id/participants', participantRoute);
router.use('/:user_id/profiles', profileRoute);

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
router.use(authorise('admin')); // admin authorisation only

// map routes to controller
router.route('/').get(advancedResults('users'), getUsers).post(validateCreateUserFields, checkInputError, createUser);

router.route('/:id').get(getUser).put(validateUpdateUserFields, checkInputError, updateUser).delete(deleteUser);
