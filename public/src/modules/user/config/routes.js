'use strict';

module.exports = ['$stateProvider',
 function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/user',
        template: require('../views/users.html'),
        controller: 'UsersController'
      })
      .state('users.edit', {
        url: '/edit/:userId',
        views: {
          '@': {
            template: require('../views/edit.html'),
            controller: 'UserEditController'
          }
        }
      });
 }
];
