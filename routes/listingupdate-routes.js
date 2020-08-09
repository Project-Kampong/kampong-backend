const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');
const { checkInputError } = require('../middleware/input-validation');
const { mapFilenameToLocation } = require('../middleware/fileUploadHelper');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
} = require('../utils/inputExceptionMsg');
const { uploadFile } = require('../utils/fileUploader');

// import controllers here
const {
  getListingUpdates,
  getListingUpdate,
  createListingUpdate,
  modifyListingUpdate,
  deleteListingUpdate,
} = require('../controllers/listingupdates');

router.route('/').get(advancedResults('listingupdates'), getListingUpdates);
router.route('/:id').get(getListingUpdate);

// all routes below only accessible to authenticated user
router.use(protect);
router.use(authorise('user', 'admin'));

// map routes to controller
router
  .route('/')
  .post(
    uploadFile.array('pics', 5),
    mapFilenameToLocation('pic1', 'pic2', 'pic3', 'pic4', 'pic5'),
    [
      check('listing_id', INVALID_FIELD_MSG('listing id')).isInt(),
      check('description', INVALID_FIELD_MSG('description')).trim().notEmpty(),
    ],
    checkInputError,
    createListingUpdate
  );

router
  .route('/:id')
  .put(
    uploadFile.array('pics', 5),
    mapFilenameToLocation('pic1', 'pic2', 'pic3', 'pic4', 'pic5'),
    [
      oneOf([check('description').exists()], NO_FIELD_UPDATED_MSG),
      check('description', INVALID_FIELD_MSG('description'))
        .optional()
        .trim()
        .notEmpty(),
    ],
    checkInputError,
    modifyListingUpdate
  )
  .delete(deleteListingUpdate);

module.exports = router;
