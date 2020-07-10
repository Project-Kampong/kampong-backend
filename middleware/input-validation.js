const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const { validationResult } = require('express-validator');

exports.checkInputError = asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errMsg = '';
    errors.errors
      .map(obj => obj.msg)
      .forEach(element => {
        errMsg += element + '. ';
      });
    return next(new ErrorResponse(errMsg.trim(), 400));
  }
  next();
});
