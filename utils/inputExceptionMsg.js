exports.INVALID_FIELD_MSG = field => `Please include a valid ${field}`;

exports.INVALID_EXISTING_MSG = field => `Please enter your ${field}`;

exports.INVALID_ALPHA_SPACE_MSG = field =>
  `Please include a valid ${field} with alphabets and spaces only`;

exports.INVALID_BOOLEAN_MSG = field =>
  `Please include a boolean value for ${field}`;

exports.INVALID_TIMESTAMP_MSG = field =>
  `Please include a valid timestamp (of string type) for ${field}`;

exports.INVALID_EMAIL_MSG = 'Please include a valid email';

exports.INVALID_PASSWORD_MSG =
  'Please enter a password with 6 or more characters';

exports.NO_FIELD_UPDATED_MSG = 'At least one field must be updated';
