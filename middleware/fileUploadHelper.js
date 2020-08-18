const { find, forEach, get, isEmpty } = require('lodash');

/**
 * If used as middleware immediately after fileUpload.array method AND files are present, maps and overwrites the provided filename
 * values from the request keys to its storage location given by multer-s3,
 * Else, this does not overwrite the values of the argument keys passed.
 * @param  {...string} keys of the request body object containing the filenames, to be mapped as file location instead
 */
exports.mapFilenameToLocation = (...keys) => {
  return (req, res, next) => {
    const obj = get(req, 'body', {});
    const filesInfo = get(req, 'files', []);

    // if using multer-s3, map uploaded file URL to the given keys
    if (!isEmpty(filesInfo)) {
      forEach(keys, key => {
        const fileInfo = find(
          filesInfo,
          info => info.originalname === obj[key]
        );
        obj[key] = get(fileInfo, 'location');
      });
    }
    next();
  };
};

/**
 * Maps provided key to its storage location as given by multer-s3, after calling the `single` method AND files are present.
 * Else, this does not overwrite the values of the argument keys passed.
 * @param {*} key of the request body object where the storage location value is to be stored
 */
exports.mapSingleFileLocation = key => {
  return (req, res, next) => {
    const obj = get(req, 'body', {});
    const fileInfo = get(req, 'file', []);
    if (!isEmpty(filesInfo)) {
      obj[key] = get(fileInfo, 'location');
    }
    next();
  };
};
