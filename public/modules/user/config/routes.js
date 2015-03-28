'use strict';

module.exports = ['$stateProvider',
 function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/user',
        templateUrl: 'user/views/users.html',
        controller: 'UsersController'
      })
      .state('users.edit', {
        url: '/edit/:userId',
        views: {
          '@': {
            templateUrl: 'user/views/edit.html',
            controller: 'UserEditController'
          }
        }
      });
 }
];