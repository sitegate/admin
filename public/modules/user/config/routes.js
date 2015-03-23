'use strict';

module.exports = ['$stateProvider',
 function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '',
        templateUrl: 'user/views/users.html',
        controller: 'UsersController'
      })
      .state('edit', {
        url: 'user/edit/:userId',
        templateUrl: 'user/views/edit.html',
        controller: 'UserEditController'
      });
 }
];