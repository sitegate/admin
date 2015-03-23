'use strict';

var bo = require('bograch');

var client = bo.client('amqp', {
  name: 'user'
});

client.register([
  'getById', 'update', 'resetPasswordByEmail',
  'validateResetToken', 'resetPassword',
  'sendVerificationEmail', 'register',
  'saveOAuthUserProfile', 'disconnectProvider',
  'trustClient', 'changePassword', 'verifyEmail',
  'getTrustedClients', 'authenticate', 'getAll'
]);

module.exports = client.methods;