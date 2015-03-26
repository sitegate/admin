'use strict';

module.exports = ['$scope', '$stateParams', '$http', 'growl', 'UserService',
  function UserEditController($scope, $stateParams, $http, growl, UserService) {
    $scope.user = UserService.get({
      userId: $stateParams.userId
    });

    $scope.savePassword = function () {
      var data = {
        newPassword: $scope.user.newPassword
      };

      $http
        .put('/api/user/' + $stateParams.userId + '/password', data)
        .success(function (data, status, headers, config) {
          growl.success('Saved', {
            ttl: 3000
          });
        })
        .error(function (data, status, headers, config) {});
    };
  }];