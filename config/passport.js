/* jshint node:true */
'use strict';

var passport = require('passport');
var SiteGateStrategy = require('passport-sitegate');
var config = require('./config');

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
      User.findOne({
        sitegateId: profile.id
      }, function (err, user) {
        if (err) {
          return done(err, null);
        }
        if (!user) {
          user = new User();
          user.sitegateId = profile.id;
          user.username = profile.username;
          user.email = profile.email;
          user.accessToken = accessToken;
          user.refreshToken = refreshToken;

          user.save(function (err, user) {
            if (err) {
              return done(err, null);
            }
            return done(null, user);
          });
          return;
        }
        return done(err, user);
      });
    }
  ));
};