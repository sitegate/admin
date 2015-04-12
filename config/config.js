'use strict';

var util = require('util');
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
  amqp: {
    login: {
      doc: 'AMQP login.',
      default: 'guest'
    },
    password: {
      doc: 'AMQP password.',
      default: 'guest'
    },
    address: {
      doc: 'AMQP address.',
      default: 'localhost',
      env: 'RABBITMQ_PORT_5672_TCP_ADDR'
    },
    port: {
      doc: 'AMQP port.',
      format: 'port',
      default: '5672',
      env: 'RABBITMQ_PORT_5672_TCP_PORT'
    }
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
config.loadFile(__dirname + '/env/' + env + '.json');

// Adding the calculated values
config.load({
  amqpUrl: util.format('amqp://%s:%s@%s:%s',
                         config.get('amqp.login'),
                         config.get('amqp.password'),
                         config.get('amqp.address'),
                         config.get('amqp.port'))
});

// perform validation
config.validate();

module.exports = config;