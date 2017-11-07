// Route Loader
// ============
// Loads all routes in a folder dynamically

// Load dependencies
// -----------------
const fs        = require('fs'),
      path      = require('path'),
      _         = require('lodash'),
      excluded  = ['index.js'];

module.exports = function(app) {
  fs.readdirSync(__dirname + '/').forEach((file) => {
    let fileName = path.parse(file).name,
        fileExt  = path.parse(file).ext,
        filePath = __dirname + '/' + file;

    fs.stat(filePath, (err, stat) => {
      if (err) {
        console.log(err);
      } else if (!stat.isDirectory() && !_.includes(excluded, file)) {
        app.use('/' + fileName, require(filePath));
      }
    });
  });
};
