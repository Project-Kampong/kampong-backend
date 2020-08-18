const advancedResults = require('./advancedResults');
const asyncHandler = require('./async');
const { protect, authorise } = require('./auth');
const errorHandler = require('./error');
const {
  mapFilenameToLocation,
  mapSingleFileLocation,
} = require('./fileUploadHelper');
const { checkInputError } = require('./inputValidation');

module.exports = {
  advancedResults,
  asyncHandler,
  protect,
  authorise,
  errorHandler,
  mapFilenameToLocation,
  mapSingleFileLocation,
  checkInputError,
};
