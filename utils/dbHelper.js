// Helper to remove undefined values in JSON object
// Used for parsing request body in insert and update of db entries
exports.cleanseData = async data => {
  Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);
};
