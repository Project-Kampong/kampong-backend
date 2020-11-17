import express from 'express';
export const router = express.Router({ mergeParams: true });
import { check } from 'express-validator';
import { checkInputError, protect } from '../../middleware';
import { INVALID_FIELD_MSG } from '../../utils';

// import controllers here
import { likeOrganisation, unLikeOrganisation } from '../../controllers/organisationLikes';

// Check input using validator
const validateNewLikeFields = [check('organisation_id', INVALID_FIELD_MSG('organisation id')).isUUID()];

// Use protect middleware
router.use(protect);

// Define routes
router.route('/').post(validateNewLikeFields, checkInputError, likeOrganisation)

router.delete('/:organisation_like_id', unLikeOrganisation);
