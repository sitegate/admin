'use strict';

module.exports = ['$resource',
  function ClientService($resource) {
    return $resource('/api/client/:id', {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: true
      },
      get: {
        method: 'GET'
      },
      update: {
        method:'PUT'
      }
    });
  }];