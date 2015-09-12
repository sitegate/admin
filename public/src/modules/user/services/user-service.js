'use strict';

module.exports = ['$resource',
  function userService($resource) {
    return $resource('/api/user/:id', {}, {
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