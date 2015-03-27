'use strict';

module.exports = ['$scope', '$stateParams', '$http', 'growl', 'UserService',
  function UserEditController($scope, $stateParams, $http, growl, UserService) {
    $scope.user = UserService.get({
      id: $stateParams.userId
    });

    $scope.updateUser = function () {
      UserService.update({
        id: $stateParams.userId
      }, $scope.user);
    };

    $scope.savePassword = function () {
      var data = {
        newPassword: $scope.user.newPassword
      };

      $http
        .put('/api/user/' + $stateParams.userId + '/password', data)
        .success(function (data, status, headers, config) {
          growl.success('Password updated!', {
            ttl: 3000
          });
        })
        .error(function (data, status, headers, config) {});
    };
  }];