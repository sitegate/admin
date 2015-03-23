'use strict';

module.exports = angular
  .module('sitegate-admin.user.controllers', [
    'sitegate-admin.user.services',
    'ui.router',
    'validation',
    'validation.rule'
  ])
  .controller('UsersController', require('./users-controller'))
  .controller('UserEditController', require('./user-edit-controller'));