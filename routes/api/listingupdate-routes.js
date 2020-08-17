const express = require('express');
const router = express.Router({ mergeParams: true });
const { check, oneOf } = require('express-validator');
const {
  advancedResults,
  checkInputError,
  protect,
  authorise,
  mapFilenameToLocation,
} = require('../../middleware');
const {
  NO_FIELD_UPDATED_MSG,
  INVALID_FIELD_MSG,
  uploadFile,
} = require('../../utils');

// import controllers here
const {
  getListingUpdates,
  getListingUpdate,
  createListingUpdate,
  modifyListingUpdate,
  deleteListingUpdate,
} = require('../../controllers/listingupdates');

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
    NO_FIELD_UPDATED_MSG
  ),
  check('description', INVALID_FIELD_MSG('description'))
    .optional()
    .trim()
    .notEmpty(),
];

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
    validateCreateListingUpdateFields,
    checkInputError,
    createListingUpdate
  );

router
  .route('/:id')
  .put(
    uploadFile.array('pics', 5),
    mapFilenameToLocation('pic1', 'pic2', 'pic3', 'pic4', 'pic5'),
    validateModifyListingUpdateFields,
    checkInputError,
    modifyListingUpdate
  )
  .delete(deleteListingUpdate);

module.exports = router;
