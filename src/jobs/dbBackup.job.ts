import fs from 'fs';
import path from 'path';
import moment from 'moment-timezone';
import shell from 'shelljs';
import { BaseJob } from './base.job';
import { S3ClientService, s3ClientService } from '../services/s3Client.service';

class DbBackupJob extends BaseJob {
    constructor(private readonly s3ClientService: S3ClientService) {
        super();
    }

    get frequency() {
        return '* 0 5 * * *';
    }

    get command() {
        return async () => {
            console.log('Running DB backup job'.bgYellow.grey.inverse.bold);
            const backupDirectory = path.resolve(__dirname, '../../db-backup');
            const backupFileName = `${process.env.PG_NAME}-${moment.tz(process.env.DEFAULT_TIMEZONE).format('YYYYMMDD-HHmmss')}`;
            const backupFilePath = `${backupDirectory}/${backupFileName}`;
            shell.exec(
                `mkdir -p ${backupDirectory} && sudo -u ${process.env.PG_USER} pg_dump ${process.env.PG_NAME} --no-password > ${backupFilePath}`,
                {
                    fatal: true,
                },
            );
            const uploadedFile = fs.readFileSync(backupFilePath);
            const { Location } = await this.s3ClientService.uploadFileToBackupBucket(uploadedFile, `db-backup/${backupFileName}`, {
                originalFileName: backupFilePath,
            });
            console.log(`DB backup job completed and stored at ${backupFilePath} and ${Location}`.bgGreen.grey.inverse.bold);
        };
    }
}

export const dbBackupJob = new DbBackupJob(s3ClientService);
