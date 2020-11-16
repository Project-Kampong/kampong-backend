import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check, oneOf } from 'express-validator';
import { advancedResults, checkInputError, protect, authorise } from '../../middleware';
import { DATETIME_REGEX, INVALID_TIMESTAMP_MSG, INVALID_FIELD_MSG, NO_FIELD_UPDATED_MSG, INVALID_PHONE_NUMBER_MSG } from '../../utils';

// import controllers here
import { getProfiles, getProfile, updateProfile, verifyProfile } from '../../controllers/profiles';

// Define input validation chain for routes
const validateProfileUpdateFields = [
    oneOf(
        [
            check('nickname').exists(),
            check('profile_picture').exists(),
            check('about').exists(),
            check('gender').exists(),
            check('dob').exists(),
            check('occupation').exists(),
            check('phone').exists(),
            check('facebook_link').exists(),
            check('twitter_link').exists(),
            check('instagram_link').exists(),
            check('linkedin_link').exists(),
        ],
        NO_FIELD_UPDATED_MSG,
    ),
    check('nickname', INVALID_FIELD_MSG('nickname')).optional().trim().notEmpty(),
    check('dob').optional().matches(DATETIME_REGEX).withMessage(INVALID_TIMESTAMP_MSG('dob')),
    check('phone').optional().isMobilePhone('any').withMessage(INVALID_PHONE_NUMBER_MSG),
    check(['facebook_link', 'twitter_link', 'instagram_link', 'linkedin_link']).optional().isURL().withMessage(INVALID_FIELD_MSG('URL')),
];

// map routes to controller
router.route('/').get(getProfile, advancedResults('profiles'), getProfiles);

// all routes below uses protect middleware
router.use(protect);

// router takes merged params 'user_id' from user route
router.route('/').put(authorise('admin', 'user'), validateProfileUpdateFields, checkInputError, updateProfile);

router.route('/verify').put(authorise('admin'), [check('is_verified', NO_FIELD_UPDATED_MSG).exists()], checkInputError, verifyProfile);
