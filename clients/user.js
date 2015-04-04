'use strict';

var bo = require('bograch');
var config = require('../config/config');

var client = bo.client('amqp', {
  name: 'user',
  amqpURL: config.get('amqpURL')
});

client.register([
  'getById',
  'update',
  'resetPasswordByEmail',
  'validateResetToken',
  'resetPassword',
  'sendVerificationEmail',
  'register',
  'saveOAuthUserProfile',
  'disconnectProvider',
  'trustClient',
  'changePassword',
  'verifyEmail',
  'getTrustedClients',
  'authenticate',
  'query'
]);

client.connect();

module.exports = client.methods;