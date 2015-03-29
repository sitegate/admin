/* jshint node:true */
'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var helmet = require('helmet');
var passport = require('passport');
var MongoStore = require('connect-mongo')(session);
var glob = require('glob');
var compress = require('compression');
var config = require('./config');
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = function (db) {
  // Initialize express app
  var app = express();

  // Globbing model files
  var models = glob.sync(rootPath + '/app/models/**/*.js');
  models.forEach(function (model) {
    require(model);
  });

  app.set('views', rootPath + '/app/views');
  app.set('view engine', 'jade');
  
  // app.use(favicon(rootPath + '/public/img/favicon.ico'));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride());

  // CookieParser should be above session
  app.use(cookieParser());

  // Express MongoDB session storage
  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.get('session.secret'),
    store: new MongoStore({
      mongooseConnection: db.connection,
      collection: config.get('session.collection')
    })
  }));

  // use passport session
  app.use(passport.initialize());
  app.use(passport.session());

  // Use helmet to secure Express headers
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());
  app.use(helmet.ienoopen());
  app.disable('x-powered-by');

  app.use(compress());
  app.use(express.static(rootPath + '/public'));

  var routes = glob.sync(rootPath + '/app/routes/*.js');
  routes.forEach(function (route) {
    require(route)(app);
  });

  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        title: 'error'
      });
    });
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {},
      title: 'error'
    });
  });

  return app;
};