'use strict';

var User = require('../../clients/user');

exports.getAll = function (req, res, next) {
  User.getAll({
    count: req.query.count,
    fields: ['username', 'email', 'role']
  }, function (err, users) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(users);
  });
};

exports.get = function (req, res, next) {
  User.getById(req.params.id, {
    fields: ['username', 'email', 'emailVerified', 'role']
  }, function (err, user) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(user);
  });
};

exports.put = function (req, res, next) {
  User.update(req.params.id, {
    username: req.body.username,
    email: req.body.email,
    emailVerified: req.body.emailVerified,
    role: req.body.role
  }, function (err, user) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json({});
  });
};

exports.putPassword = function (req, res, next) {
  User.changePassword({
    userId: req.params.id,
    newPassword: req.body.newPassword,
    forceNewPassword: true
  }, function (err) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json({});
  });
};