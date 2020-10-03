import 'colors';
import { db } from '../database/db';
import { checkConn, generateSqlQueryFile } from '../utils';
import { hashPassword } from './auth';

const DEFAULT_PASSWORD = 'Abc1234!';

// Check connection to db
checkConn();

// Create a QueryFile globally, once per file:
const schema = generateSqlQueryFile('../db/schema.sql');
const mockData = generateSqlQueryFile('../db/mock-data.sql');
const views = generateSqlQueryFile('../db/views.sql');
const requiredData = generateSqlQueryFile('../db/required-data.sql');

const createTables = async () => {
    try {
        await db.tx(async (query) => await query.manyOrNone(schema));
        console.log(`Tables created...`.green.inverse);
        await db.tx(async (query) => await query.manyOrNone(views));
        console.log(`Views created...`.green.inverse);
        await db.tx(async (query) => await query.manyOrNone(requiredData));
        console.log(`Required data imported...`.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err.toString().red);
        process.exit();
    }
};

const importData = async () => {
    try {
        const hashedPassword = await hashPassword(DEFAULT_PASSWORD);
        await db.tx(async (query) => await query.manyOrNone(mockData, [hashedPassword]));
        console.log(`Mock Data Imported...`.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err.toString().red);
        process.exit();
    }
};

if (process.argv[2] === '-i') {
    createTables();
}
if (process.argv[2] === '-d') {
    importData();
}
