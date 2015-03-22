var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'sitegate-admin'
    },
    port: 3040,
    db: 'mongodb://localhost/sitegate-admin-development',
    sessionSecret: 'sitegate-admin',
    sessionCollection: 'sessions',
    sitegate: {
      domain: 'https://account.sitegatedev.com:3000',
      clientId: 'AoMFA3Z1XvwtLj9558cC',
      clientSecret: 'X5iKRIPQICq0Hye2WqQX3GJWWR2AXD1nXwEfm6tq',
      callbackURL: 'https://localhost:3040/auth/sitegate/callback'
    },
	amqpURL: 'amqp://guest:guest@localhost:5672'
  },

  test: {
    root: rootPath,
    app: {
      name: 'sitegate-admin'
    },
    port: 3040,
    db: 'mongodb://localhost/sitegate-admin-test',
    sessionSecret: 'sitegate-admin',
    sessionCollection: 'sessions'
  },

  production: {
    root: rootPath,
    app: {
      name: 'sitegate-admin'
    },
    port: 3040,
    db: 'mongodb://localhost/sitegate-admin-production',
    sessionSecret: 'sitegate-admin',
    sessionCollection: 'sessions'
  }
};

module.exports = config[env];