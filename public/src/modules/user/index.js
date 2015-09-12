'use strict';

module.exports =
  angular.module('sitegate-admin.user', [
    require('./services').name,
    require('./controllers').name,
    require('./config').name
  ]);
