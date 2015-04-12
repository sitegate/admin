'use strict';

var bo = require('bograch');
var config = require('../config/config');

var client = bo.client('amqp', {
  name: 'client',
  amqpURL: config.get('amqpUrl')
});

client.register([
  'query',
  'getById',
  'update',
  'create',
  'getByPublicId'
]);

client.connect();

module.exports = client.methods;