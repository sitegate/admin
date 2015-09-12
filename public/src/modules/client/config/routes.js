'use strict';

module.exports = [
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('clients', {
        url: '/client',
        template: require('../views/clients.html'),
        controller: 'ClientsController'
      })
      .state('clients.edit', {
        url: '/edit/:clientId',
        views: {
          '@': {
            template: require('../views/edit.html'),
            controller: 'ClientEditController'
          }
        }
      });
  }
];
