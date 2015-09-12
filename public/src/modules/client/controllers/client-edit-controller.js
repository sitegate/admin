'use strict';

module.exports = ['$scope', '$stateParams', '$http', 'growl', 'ClientService', 'UserService',
  function ClientEditController($scope, $stateParams, $http, growl, ClientService, User) {
    ClientService.get({
      id: $stateParams.clientId
    }, function (client) {
      $scope.client = client;
      $scope.owner = User.get({
        id: client.userId
      });
    });
    
    $scope.updateClient = function () {
      ClientService.update({
        id: $stateParams.clientId
      }, $scope.client, function () {
        growl.success('Saved!', {
          ttl: 3000
        });
      });
    };
  }];