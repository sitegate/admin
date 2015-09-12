'use strict';

var createClient = require('./create-client');

module.exports = createClient('user', [
  'getById',
  'getByUsername',
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
