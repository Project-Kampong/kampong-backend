const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const { db } = require('../db/db');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  const auth = req.headers.authorization;
  let token;

  if (auth && auth.startsWith('Bearer')) {
    // Get token part, since format of auth is string "Bearer <token>"
    token = auth.split(' ')[1];
  }

  // if token exist in cookie, assign to token variable (comment out for testing purpose)
  // else if (req.cookies) {
  //   token = req.cookies.token;
  // }

  // Check token exists
  if (!token) {
    return next(new ErrorResponse('Not authorised to access this route', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // console.log(decoded);

    // Set user request to the token's user id (all protected route has user entry (as JSON) in request)
    req.user = await db.one(
      'SELECT * FROM users WHERE user_id = $1',
      decoded.id
    );

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorised to access this route', 401));
  }
});

// Grant access to specific roles
exports.authorise = (...roles) => {
  return (req, res, next) => {
    roles = roles.map(str => str.toLowerCase());
    if (!roles.includes(req.user.role.toLowerCase())) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} not authorised to access this route`,
          403
        )
      );
    }
    next();
  };
};
