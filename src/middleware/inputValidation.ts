import { asyncHandler } from './async';
import { isEmpty } from 'lodash';
import { ErrorResponse } from '../utils';
import { validationResult } from 'express-validator';

export const checkInputError = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req).array();
    const uniqueErrors = [...new Set(errors.map((obj) => obj.msg))];

    if (!isEmpty(uniqueErrors)) {
        const errMsg = uniqueErrors.join('. ').trim() + '.';
        return next(new ErrorResponse(errMsg, 400));
    }
    next();
});
