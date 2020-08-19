const { getSignedJwtToken, hashPassword, checkPassword } = require('./auth');
const {
  cleanseData,
  checkConn,
  generateSqlQueryFile,
  parseSqlUpdateStmt,
} = require('./dbHelper');
const ErrorResponse = require('./errorResponse');
const { uploadFile } = require('./fileUploader');
const {
  INVALID_ALPHA_SPACE_MSG,
  INVALID_BOOLEAN_MSG,
  INVALID_EMAIL_MSG,
  INVALID_EXISTING_MSG,
  INVALID_FIELD_MSG,
  INVALID_PASSWORD_MSG,
  INVALID_TIMESTAMP_MSG,
} = require('./inputExceptionMsg');
const {
  ALPHA_WHITESPACE_REGEX,
  DATETIME_REGEX,
  HASHTAG_REGEX,
} = require('./regex');
const sendEmail = require('./sendEmail');

module.exports = {
  getSignedJwtToken,
  hashPassword,
  checkPassword,
  cleanseData,
  checkConn,
  generateSqlQueryFile,
  parseSqlUpdateStmt,
  ErrorResponse,
  uploadFile,
  INVALID_ALPHA_SPACE_MSG,
  INVALID_BOOLEAN_MSG,
  INVALID_EMAIL_MSG,
  INVALID_EXISTING_MSG,
  INVALID_FIELD_MSG,
  INVALID_PASSWORD_MSG,
  INVALID_TIMESTAMP_MSG,
  ALPHA_WHITESPACE_REGEX,
  DATETIME_REGEX,
  HASHTAG_REGEX,
  sendEmail,
};
