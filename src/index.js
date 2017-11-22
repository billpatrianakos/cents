// Server startup
// ==============
// Loads and starts the application

// Load dependencies
// -----------------
const express = require('express'),
      app     = express(),
      fs      = require('fs'),
      morgan  = require('morgan');


// Configure server settings
// -------------------------
if (process.env.NODE_ENV === 'development') {
  // Local dev environment settings
  app.use(morgan('combined'));    // Log to console in dev mode
} else {
  // Production and remote env settings
  app.set('trust proxy', true);   // Trust proxy in production
  app.use(morgan('combined', {    // Write logs to file
    stream: fs.createWriteStream(__dirname + '/log/app.log', { flags: 'a' }) 
  }));
}


// Auto-load all regular routes/controllers
// ----------------------------------------
require('./controllers')(app);

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
