'use strict';

var config = require('../../config/config');

exports.get = function (req, res, next) {
  res.render('index');
};