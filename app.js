'use strict';

var config = require('./config/config');
var mongoose = require('mongoose');
var https = require('https');
var fs = require('fs');

if (config.get('env') === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
}

// Bootstrap db connection
var db = mongoose.connect(config.get('mongodbURL'), function (err) {
  if (err) {
    console.error('\x1b[31m', 'Could not connect to MongoDB!');
    console.log(err);
  }
});

// Bootstrap bograch config
require('./config/bograch');

var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

if (config.get('env') === 'development') {
  require('./config/setup-oauth');
}

//TODO: Change these for your own certificates.  This was generated
//through the commands:
//openssl genrsa -out privatekey.pem 1024
//openssl req -new -key privatekey.pem -out certrequest.csr
//openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
var options = {
  key: fs.readFileSync('certs/privatekey.pem'),
  cert: fs.readFileSync('certs/certificate.pem')
};

// Create our HTTPS server listening on port config.get('port').
https.createServer(options, app).listen(config.get('port'));