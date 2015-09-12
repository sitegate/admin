'use strict';

module.exports = ['$scope', 'UserService',
  function UsersController($scope, UserService) {
    $scope.users = UserService.query({
      count: 20
    });
  }];