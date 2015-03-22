'use strict';

module.exports =
  angular.module('sitegate-admin.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);
