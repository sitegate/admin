'use strict';

module.exports = ['$scope', '$stateParams', '$http', 'growl', 'UserService', 'ClientService',
  function UserEditController($scope, $stateParams, $http, growl, User, Client) {
    $scope.user = User.get({
      id: $stateParams.userId
    });
    
    $scope.clients = Client.query({
      creatorId: $stateParams.userId
    });

    $scope.updateUser = function () {
      User.update({
        id: $stateParams.userId
      }, $scope.user, function () {
        growl.success('Saved!', {
          ttl: 3000
        });
      });
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