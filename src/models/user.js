// User
// ====
// Describes a User object

'use strict';

const Bookshelf = require('./database');

const User = Bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});

module.exports = Bookshelf.model('User', User);
