import moment from 'moment-timezone';
import { camelCase, cloneDeep, forOwn, get, map } from 'lodash';
import { S3ClientService } from '../services/s3Client.service';

export class UploadsController {
    constructor(private readonly s3ClientService: S3ClientService) {
        this.s3ClientService = s3ClientService;
    }

    uploadSingleFileToPublic = async (req, res, next) => {
        const file: Buffer = get(req.files, 'upload.data', null);
        const name: string = get(req.files, 'upload.name', null);
        const nameArr = name.split('.');
        const key = `${nameArr.shift()}-${moment.tz(process.env.DEFAULT_TIMEZONE).format('YYYYMMDDHHmmss')}.${nameArr.join()}`;
        const result = await this.s3ClientService.uploadFileToPublicRead(file, key, { originalFileName: name });

        const parsedResult = this.convertObjKeysToCamel(result);

        res.status(200).json({ success: true, data: parsedResult });
    };

    uploadMultipleFilesToPublic = async (req, res, next) => {
        const uploads = get(req.files, 'uploads', []);
        const uploadPromises = map(uploads, (upload) => {
            const file: Buffer = get(upload, 'data', null);
            const name: string = get(upload, 'name', null);
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
