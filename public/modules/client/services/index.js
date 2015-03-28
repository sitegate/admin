'use strict';

module.exports = angular
  .module('sitegate-admin.client.services', ['ngResource'])
  .factory('ClientService', require('./client-service'));