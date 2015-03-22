'use strict';

var home = require('../controllers/home');
var auth = require('../controllers/auth');
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

  app.route('/auth/sitegate')
    .get(passport.authenticate('sitegate'));

  app.route('/auth/sitegate/callback')
    .get(auth.oauthCallback('sitegate'));
};