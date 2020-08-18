const { get, isNil, set } = require('lodash');
const { hashDecode } = require('../utils/hashIdGenerator');

/**
 * Decode the specified key passed as a hashId value
 * Note: Decoder will not throw an error if nothing is decoded.
 * Handle error separately, if necessary.
 * Example key to access nested property in req object: 'params.user_id', 'body.listing_id'
 * @param {string} key path to object property in req with the hash value to decode
 */
exports.decodeHashedReqKey = key => {
  return (req, res, next) => {
    const val = get(req, key, null);
    if (isNil(val)) {
      return next();
    }
    set(req, key, hashDecode(val)[0]);
    next();
  };
};
