import { CronCommand, CronJob } from 'cron';

export abstract class BaseJob {
    private readonly job: CronJob;

    constructor() {
        this.job = this.createJob();
    }

    private createJob(): CronJob {
        return new CronJob(this.frequency, this.command, null, true, process.env.DEFAULT_TIMEZONE);
    }

    protected abstract get frequency(): string | Date;

    protected abstract get command(): CronCommand;

    start(): void {
        return this.job.start();
    }
}
