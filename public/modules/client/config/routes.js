'use strict';

module.exports = [
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('clients', {
        url: '/client',
        templateUrl: 'client/views/clients.html',
        controller: 'ClientsController'
      })
      .state('clients.edit', {
        url: '/edit/:clientId',
        views: {
          '@': {
            templateUrl: 'client/views/edit.html',
            controller: 'ClientEditController'
          }
        }
      });
  }
];