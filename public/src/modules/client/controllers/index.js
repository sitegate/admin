'use strict';

module.exports = angular
  .module('sitegate-admin.client.controllers', [
    'sitegate-admin.client.services',
    'sitegate-admin.user.services',
    'ui.router',
    'validation',
    'validation.rule',
    'angular-growl'
  ])
  .controller('ClientsController', require('./clients-controller'))
  .controller('ClientEditController', require('./client-edit-controller'));