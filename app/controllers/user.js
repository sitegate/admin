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
  User.getById(req.params.userId, {
    fields: ['username', 'email', 'emailVerified']
  }, function (err, user) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(user);
  });
};

exports.putPassword = function (req, res, next) {
  User.changePassword({
    userId: req.params.userId,
    newPassword: req.body.newPassword,
    forceNewPassword: true
  }, function (err) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json({});
  });
};