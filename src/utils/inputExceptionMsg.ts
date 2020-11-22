export const INVALID_FIELD_MSG = (field: string): string => `Please include a valid ${field}`;

export const INVALID_EXISTING_MSG = (field: string): string => `Please enter your ${field}`;

export const INVALID_ALPHA_SPACE_MSG = (field: string): string => `Please include a valid ${field} with alphabets and spaces only`;

export const INVALID_BOOLEAN_MSG = (field: string): string => `Please include a boolean value for ${field}`;

export const INVALID_TIMESTAMP_MSG = (field: string): string => `Please include a valid timestamp (of string type) for ${field}`;

export const INVALID_EMAIL_MSG = 'Please include a valid email';

export const INVALID_PASSWORD_MSG =
    'Please enter a password with 8-25 characters, at least 1 uppercase letter, 1 lowercase letter and 1 special character';

export const NO_FIELD_UPDATED_MSG = 'At least one field must be updated';

export const INVALID_LISTING_STATUS_MSG = 'Listing status can only be "ongoing" or "completed"';

export const INVALID_PHONE_NUMBER_MSG = 'Please enter a valid phone number';

export const INVALID_LOCATION_MSG = 'Please enter a valid location';
