import express from 'express';
export const router = express.Router();
import { check, oneOf } from 'express-validator';
import { checkInputError, protect } from '../../middleware';
import { NO_FIELD_UPDATED_MSG, INVALID_FIELD_MSG } from '../../utils';

// Import controllers here
import { createAnnouncement, updateAnnouncement, deleteAnnouncement } from '../../controllers/organisationAnnouncements';

// Define input validation chain
const validateCreateAnnouncementFields = [
    check('organisation_id', INVALID_FIELD_MSG('organisation id')).isUUID(),
    check('announcement', INVALID_FIELD_MSG('announcement')).trim().notEmpty(),
];

const validateUpdateAnnouncementFields = [
    oneOf([check('announcement').exists()], NO_FIELD_UPDATED_MSG),
    check('announcement', INVALID_FIELD_MSG('announcement')).optional().trim().notEmpty(),
];

// Protect routes
router.use(protect);

// Mount routes
router.route('/').post(validateCreateAnnouncementFields, checkInputError, createAnnouncement);
router.route('/:announcement_id').put(validateUpdateAnnouncementFields, checkInputError, updateAnnouncement).delete(deleteAnnouncement);
