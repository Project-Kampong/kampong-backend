import moment from 'moment-timezone';
import { camelCase, cloneDeep, forOwn, get, isNil, map } from 'lodash';
import { S3ClientService } from '../services/s3Client.service';
import { ErrorResponse } from '../utils';

export class UploadsController {
    constructor(private readonly s3ClientService: S3ClientService) {
        this.s3ClientService = s3ClientService;
    }

    uploadSingleFileToPublic = async (req, res, next) => {
        const name: string = get(req.files, 'upload.name', null);
        if (isNil(name)) {
            return next(new ErrorResponse('Cannot upload file as filename is empty', 400));
        }
        const file: Buffer = get(req.files, 'upload.data', null);
        if (isNil(file)) {
            return next(new ErrorResponse(`Cannot upload file as file is empty (filename: ${name})`, 400));
        }
        const nameArr = name.split('.');
        const key = `${nameArr.shift()}-${moment.tz(process.env.DEFAULT_TIMEZONE).format('YYYYMMDDHHmmss')}.${nameArr.join()}`;
        const result = await this.s3ClientService.uploadFileToPublicRead(file, key, { originalFileName: name });

        const parsedResult = this.convertObjKeysToCamel(result);

        res.status(200).json({ success: true, data: parsedResult });
    };

    uploadMultipleFilesToPublic = async (req, res, next) => {
        const uploads = get(req.files, 'uploads', []);
        const uploadPromises = map(uploads, (upload) => {
            const name: string = get(upload, 'name', null);
            if (isNil(name)) {
                return next(new ErrorResponse('Cannot upload file as filename is empty', 400));
            }
            const file: Buffer = get(upload, 'data', null);
            if (isNil(file)) {
                return next(new ErrorResponse(`Cannot upload file as file is empty (filename: ${name})`, 400));
            }
            const nameArr = name.split('.');
            const key = `${nameArr.shift()}-${moment.tz(process.env.DEFAULT_TIMEZONE).format('YYYYMMDDHHmmss')}.${nameArr.join()}`;
            return this.s3ClientService.uploadFileToPublicRead(file, key, { originalFileName: name });
        });
        const results = await Promise.all(uploadPromises);

        const parsedResults = map(results, (result) => this.convertObjKeysToCamel(result));

        res.status(200).json({ success: true, data: parsedResults });
    };

    private convertObjKeysToCamel(obj: { [key: string]: any }): { [key: string]: any } {
        const objCopy = cloneDeep(obj);
        forOwn(objCopy, (val: any, key: string) => {
            delete objCopy[key];
            objCopy[camelCase(key)] = val;
        });
        return objCopy;
    }
}
