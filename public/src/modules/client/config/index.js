'use strict';

module.exports = angular
  .module('sitegate-admin.client.config', ['ui.router', 'sitegate-admin.client.controllers'])
  .config(require('./routes'));