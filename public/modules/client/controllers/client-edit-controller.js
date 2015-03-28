'use strict';

module.exports = ['$scope', '$stateParams', '$http', 'growl', 'ClientService',
  function ClientEditController($scope, $stateParams, $http, growl, ClientService) {
    $scope.client = ClientService.get({
      id: $stateParams.clientId
    });
    
    $scope.updateClient = function () {
    };
  }];