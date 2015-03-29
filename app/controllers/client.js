'use strict';

var Client = require('../../clients/client');

exports.query = function (req, res, next) {
  Client.query({
    creatorId: req.query.creatorId,
    count: req.query.count || 20,
    fields: ['name', 'homepageUrl']
  }, function (err, clients) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(clients);
  });
};

exports.get = function (req, res, next) {
  Client.getById(req.params.id, {
    fields: ['name', 'publicId', 'secret', 'description',
             'homepageUrl', 'authCallbackUrl', 'trusted', 'userId']
  }, function (err, client) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json(client);
  });
};

exports.put = function (req, res, next) {
  Client.update(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    homepageUrl: req.body.homepageUrl,
    authCallbackUrl: req.body.authCallbackUrl,
    trusted: req.body.trusted
  }, function (err) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json({});
  });
};