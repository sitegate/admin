'use strict';

var Client = require('../../clients/client');

exports.getAll = function (req, res, next) {
  Client.getAll({
    count: req.query.count,
    fields: ['name']
  }, function (err, clients) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(clients);
  });
};

exports.get = function (req, res, next) {
  Client.getById(req.params.id, {
    fields: ['name']
  }, function (err, client) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(client);
  });
};

exports.put = function (req, res, next) {
  Client.update(req.params.id, {
    name: req.body.name
  }, function (err) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json({});
  });
};