'use strict';

module.exports = angular
  .module('sitegate-admin.user.controllers', [
    'sitegate-admin.user.services',
    'sitegate-admin.client.services',
    'ui.router',
    'validation',
    'validation.rule',
    'angular-growl'
  ])
  .controller('UsersController', require('./users-controller'))
  .controller('UserEditController', require('./user-edit-controller'));