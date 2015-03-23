'use strict';

module.exports = angular
  .module('sitegate-admin.user.config', ['ui.router', 'sitegate-admin.user.controllers'])
  .config(require('./routes'));