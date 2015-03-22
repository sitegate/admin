/* jshint node:true */
'use strict';

var passport = require('passport');
var SiteGateStrategy = require('passport-sitegate');
var config = require('./config');
var User = require('../clients/user');

module.exports = function () {
  passport.serializeUser(function (user, done) {
    done(null, {
      id: user.id,
      username: user.username,
      email: user.email
    });
  });

  // Deserialize sessions
  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(new SiteGateStrategy({
      providerOrigin: config.sitegate.domain,
      clientID: config.sitegate.clientId,
      clientSecret: config.sitegate.clientSecret,
      callbackURL: config.sitegate.callbackURL
    },
    function (accessToken, refreshToken, profile, done) {
      User.getById({
        id: profile.id
      }, done);
    }
  ));
};