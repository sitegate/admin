'use strict';

var bo = require('bograch');
var config = require('../config/config');

var client = bo.client('amqp', {
  name: 'session',
  amqpURL: config.get('amqpUrl')
});

client.register([
  'queryByUserId'
]);

client.connect();

module.exports = client.methods;