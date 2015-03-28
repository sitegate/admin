'use strict';

module.exports = ['$scope', 'ClientService',
  function ClientsController($scope, ClientService) {
    $scope.clients = ClientService.query({
      count: 20
    });
  }];