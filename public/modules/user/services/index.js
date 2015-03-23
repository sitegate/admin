'use strict';

module.exports = angular
  .module('sitegate-admin.user.services', ['ngResource'])
  .factory('UserService', require('./user-service'));