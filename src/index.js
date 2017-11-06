// Server startup
// ==============
// Loads and starts the application

// Load dependencies
// -----------------
const express = require('express'),
      app     = express();

  app.get('/', (req, res, next) => {
    res.send('Hello world');
  });

var server = app.listen(process.env.port || 3000, () => {
  console.log(`Server is listening on ${server.address().port}`);
});
