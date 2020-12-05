import path from 'path';
import moment from 'moment-timezone';
import shell from 'shelljs';
import { BaseJob } from './base.job';

class DbBackupJob extends BaseJob {
    constructor() {
        super();
    }

    get frequency() {
        return '* 0 5 * * *';
    }

    get command() {
        return () => {
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
            console.log(`DB backup job completed and stored at ${backupFilePath}`.bgGreen.grey.inverse.bold);
        };
    }
}

export const dbBackupJob = new DbBackupJob();
