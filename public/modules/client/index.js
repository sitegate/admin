'use strict';

module.exports =
  angular.module('sitegate-admin.client', [
    require('./services').name,
    require('./controllers').name,
    require('./config').name
  ]);
