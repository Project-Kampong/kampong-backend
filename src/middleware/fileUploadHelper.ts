import { find, forEach, get, isEmpty } from 'lodash';

/**
 * Maps provided filename to its storage location given by multer-s3, after calling the `array` method.
 * Use as middleware immediately after fileUpload.array method.
 * @param  {...string} keys of the request body object containing the filenames, to be mapped as file location instead
 */
export const mapFilenameToLocation = (...keys) => {
    return (req, res, next) => {
        const obj = get(req, 'body', {});
        const filesInfo = get(req, 'files', []);
        if (!isEmpty(filesInfo)) {
            forEach(keys, (key) => {
                const fileInfo = find(filesInfo, (info) => info.originalname === obj[key]);
                obj[key] = get(fileInfo, 'location');
            });
        }
        next();
    };
};

/**
 * Maps provided key to its storage location as given by multer-s3, after calling the `single` method.
 * Use as middleware immediately after fileUpload.single method.
 * @param {*} key of the request body object where the storage location value is to be stored
 */
export const mapSingleFileLocation = (key) => {
    return (req, res, next) => {
        const obj = get(req, 'body', {});
        const fileInfo = get(req, 'file', []);
        if (!isEmpty(fileInfo)) {
            obj[key] = get(fileInfo, 'location');
        }
        next();
    };
};
