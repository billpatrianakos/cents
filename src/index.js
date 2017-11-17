// Server startup
// ==============
// Loads and starts the application

// Load dependencies
// -----------------
const express = require('express'),
      app     = express(),
      fs      = require('fs'),
      morgan  = require('morgan');


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('combined')); // Log to console in dev mode
} else {
  app.set('trust proxy', true); // Trust proxy in production
  app.use(morgan('combined', { stream: fs.createWriteStream(__dirname + '/log/app.log', { flags: 'a' }) })); // Write logs to file
}

require('./controllers/index')(app);

// Test route
// ----------
app.get('/', (req, res, next) => {
  res.send('Hello world');
});


// Start the server
// ----------------
var server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening at http://${server.address().address}:${server.address().port}`);
});
