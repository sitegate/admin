'use strict';

module.exports = ['$scope', '$stateParams', '$http', 'UserService',
  function UserEditController($scope, $stateParams, $http, UserService) {
    $scope.user = UserService.get({
      userId: $stateParams.userId
    });
    
    $scope.savePassword = function () {
      var data = { newPassword: $scope.user.newPassword };
      
      $http
        .put('/api/user/' + $stateParams.userId + '/password', data)
        .success(function (data, status, headers, config) {})
        .error(function (data, status, headers, config) {});
    };
  }];