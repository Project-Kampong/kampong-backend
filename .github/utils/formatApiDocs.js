const fs = require('fs');
const path = require('path');

const apiJsonPath = path.resolve(__dirname, '..', '..', 'public', 'api-docs', 'kampong-api.json');

const rawData = fs.readFileSync(apiJsonPath);
const parsedRawData = JSON.parse(rawData);

const formattedData = parsedRawData.collection;
const parsedFormattedData = JSON.stringify(formattedData);
fs.writeFileSync(apiJsonPath, parsedFormattedData);

console.log(`Successfully written formatted data to ${apiJsonPath}`);
