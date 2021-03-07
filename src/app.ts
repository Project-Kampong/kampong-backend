import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import helmet from 'helmet';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import hpp from 'hpp';
import cors from 'cors';
import { apiRouter } from './routes';
import { errorHandler } from './middleware';

export const app = express();

// Express json parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Multipart/formdata file uploader
app.use(fileUpload());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Set express to populate req.ip from req headers 1 hop before proxy (ie. client's public ip)
// see: https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);

// Rate limiting
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 200,
    message: { success: false, error: 'Request limit exceeded, please try again later.' },
});

app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api', apiRouter);

// Mount error handler
app.use(errorHandler);

// Set static folder
app.use(express.static(path.resolve(__dirname, '../public')));

// Serve frontend homepage
app.get('*', (req, res) => {
    const apiDocsPath = path.resolve(__dirname, '../public/api-docs/index.html');
    res.sendFile(apiDocsPath);
});
