'use strict';

var createClient = require('./create-client');

module.exports = createClient('client', [
  'query',
  'getById',
  'update',
  'create',
  'getByPublicId'
]);
