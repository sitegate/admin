'use strict';

var bo = require('bograch');

var client = bo.client('amqp', {
  name: 'client'
});

client.register(['query', 'getById', 'update']);

module.exports = client.methods;