const fs = require('fs');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');
const { checkConn } = require('./utils/dbHelper');
const apiRoutes = require('./routes/api-routes');
const { errorHandler } = require('./middleware');

dotenv.config({ path: 'config/config.env' });

// Init express
const app = express();

// Check connection to db
checkConn();

// Express json parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Set security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

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
app.use('/api', apiRoutes);

// Mount error handler
app.use(errorHandler);

// Set static folder
app.use(express.static('client/build'));
app.use(express.static(__dirname + '/public'));

const apiDocsPath = path.resolve(__dirname, 'public', 'api-docs.html');

app.get('/api-docs', (req, res) => {
    res.sendFile(apiDocsPath);
});

app.get('/about', (req, res) => {
    const aboutPath = path.resolve(__dirname, 'public', 'about', 'index.html');
    res.sendFile(aboutPath);
});

app.get('/story', (req, res) => {
    const storyPath = path.resolve(__dirname, 'public', 'about', 'story.html');
    res.sendFile(storyPath);
});

app.get('/team', (req, res) => {
    const teamPath = path.resolve(__dirname, 'public', 'about', 'team.html');
    res.sendFile(teamPath);
});

// Serve frontend homepage
app.get('*', (req, res) => {
    const homePath = path.resolve(__dirname, 'client', 'build', 'index.html');
    const pathToServe = fs.existsSync(homePath) ? homePath : apiDocsPath;
    res.sendFile(pathToServe);
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Unhandled Error: ${err.message}`.bgRed);
    // Close server & exit process
    server.close(() => process.exit(1));
});
