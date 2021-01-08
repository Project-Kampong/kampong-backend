import http from 'http';
import dotenv from 'dotenv';
import 'colors';
import { get } from 'lodash';
import { app } from './app';
import { checkConn } from './utils';
import { dbBackupJob, shuffleFeaturedListings } from './jobs';
import { initSocketIoServer } from './socketIo';

dotenv.config({ path: 'config/config.env' });

const httpServer = http.createServer(app);

// Initialize socketIo server and its services
initSocketIoServer(httpServer);

// Check connection to db
checkConn();

// Run jobs (only in production)
if (process.env.NODE_ENV === 'production') {
    dbBackupJob.start();
    shuffleFeaturedListings.start();
}

const PORT = parseInt(process.env.PORT) || 5000;

httpServer.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error, _promise: Promise<any>) => {
    console.log(`Unhandled Error: ${get(err, 'message')}`.bgRed);
    // Write diagnostic report
    process.report.writeReport(err);
    // Close httpServer & exit process
    httpServer.close(() => process.exit(1));
});
