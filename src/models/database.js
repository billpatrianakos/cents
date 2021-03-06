// Database
// ========
// Database connection script

'use strict';

const knex      = require('knex')(require(__dirname + '/../../knexfile')[process.env.NODE_ENV]),
      bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
