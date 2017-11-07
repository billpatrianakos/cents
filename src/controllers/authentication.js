// Authentication Controller
// =========================
// Routes for logging into the app

var express                  = require('express'),
    AuthenticationController = express.Router();

AuthenticationController.route('/')
  // GET /
  // -----
  // Show a login and signup page
  .get((req, res, next) => {
    res.send('AuthenticationController!');
  })

module.exports = AuthenticationController;
