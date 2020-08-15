const asyncHandler = require('./async');
const { isEmpty } = require('lodash');
const ErrorResponse = require('../utils/errorResponse');
const { validationResult } = require('express-validator');

exports.checkInputError = asyncHandler(async (req, res, next) => {
  const { errors } = validationResult(req);
  const uniqueErrors = [...new Set(errors.map(obj => obj.msg))];

  if (!isEmpty(uniqueErrors)) {
    const errMsg = uniqueErrors.join('. ').trim() + '.';
    return next(new ErrorResponse(errMsg, 400));
  }
  next();
});
