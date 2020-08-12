const Hashids = require('hashids');
/**
 * Pseudo-hashing to jumble serial ID. NOT cryptographically secure.
 * Do NOT use for sensitive information.
 */
const hashids = new Hashids('sekretkey');

/**
 * Helper method to encode a number and return a hashed value
 * @param {number} num positive number to encode
 */
exports.hashEncode = num => hashids.encode(num);

/**
 * Helper method to decode a hashed value and return an array
 * @param {number} hash hashed value to decode
 * @returns {array} returns an array of numbers that were originallly encoded. Single number encoding will give a single element array when decoded.
 */
exports.hashDecode = hash => hashids.decode(hash);
