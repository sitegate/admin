'use strict';

var home = require('../controllers/home');
var auth = require('../controllers/auth');
var user = require('../controllers/user');
var client = require('../controllers/client');
var passport = require('passport');

module.exports = function (app) {
  app.use(function (req, res, next) {
    if (req.originalUrl.indexOf('/auth/sitegate') !== -1 || req.isAuthenticated()) {
      return next();
    }
    res.redirect('/auth/sitegate');
  });
  
  app.route('/')
    .get(home.get);
  
  app.route('/logout')
    .get(auth.logout);
  
  //
  // User
  //
  app.route('/api/user')
    .get(user.getAll);
  
  app.route('/api/user/:id')
    .get(user.get)
    .put(user.put);
  
  app.route('/api/user/:id/password')
    .put(user.putPassword);
  
  //
  // Client
  //
  app.route('/api/client')
    .get(client.getAll);
  
  app.route('/api/client/:id')
    .get(client.get)
    .put(client.put);

  
  app.route('/auth/sitegate')
    .get(passport.authenticate('sitegate'));

  app.route('/auth/sitegate/callback')
    .get(auth.oauthCallback('sitegate'));
};