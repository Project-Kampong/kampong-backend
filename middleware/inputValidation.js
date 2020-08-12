const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const { validationResult } = require('express-validator');

exports.checkInputError = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  const uniqueErrors = [...new Set(errors.errors.map(obj => obj.msg))];

  if (!errors.isEmpty()) {
    const errMsg = uniqueErrors.join('. ').trim() + '.';
    return next(new ErrorResponse(errMsg, 400));
  }
  next();
});
