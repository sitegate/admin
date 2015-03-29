'use strict';

var passport = require('passport');

exports.oauthCallback = function (strategy) {
  return function (req, res, next) {
    passport.authenticate(strategy, function (err, user, redirectURL) {
      if (err || !user || user.role !== 'admin') {
        return res.render('access-denied');
      }
      
      req.login(user, function (err) {
        if (err) {
          return res.render('access-denied');
        }

        return res.redirect('/');
      });
    })(req, res, next);
  };
};

exports.logout = function (req, res, next) {
};