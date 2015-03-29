'use strict';

var convict = require('convict');

var config = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  app: {
    name: {
      default: 'SiteGate Admin'
    }
  },
  mongodbURL: {
    doc: 'MongoDB endpoint.',
    default: 'mongodb://localhost/sitegate-oauth-dev',
    env: 'MONGODB_URL'
  },
  amqpURL: {
    doc: 'AMQP endpoint.',
    default: 'amqp://guest:guest@localhost:5672',
    env: 'AMQP_URL'
  },
  port: {
    doc: 'The port to bind',
    format: 'port',
    default: 3040,
    env: 'PORT'
  },
  session: {
    secret: {
      doc: 'Session secret.',
      default: 'siteGateAdminApp',
      env: 'SESSION_SECRET'
    },
    collection: {
      doc: 'Session collection',
      default: 'sessions',
      env: 'SESSION_COLLECTION'
    }
  },
  sitegate: {
    domain: {
      doc: 'The domain of the SiteGate OAuth provider.',
      format: 'url',
      default: 'https://account.sitegatedev.com:3000',
      env: 'SITEGATE_DOMAIN'
    },
    clientID: {
      doc: 'SiteGate App ID',
      default: '',
      env: 'SITEGATE_ID'
    },
    clientSecret: {
      doc: 'SiteGate App secret.',
      default: '',
      env: 'SITEGATE_SECRET'
    },
    callbackURL: {
      doc: 'SiteGate callback URL.',
      default: 'https://localhost:3040/auth/sitegate/callback',
      env: 'SITEGATE_CALLBACK_URL'
    }
  }
});

// load environment dependent configuration
var env = config.get('env');
config.loadFile('./config/env/' + env + '.json');

// perform validation
config.validate();

module.exports = config;