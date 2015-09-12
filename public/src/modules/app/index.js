'use strict';

module.exports =
  angular.module('sitegate-admin', [
    'ui.bootstrap',
    'ui.router',
    'validation',
    'validation.rule',
    'angular-growl',
    'angular-loading-bar',
    //load extra external dependencies here, e.g.:
    //'ngAnimate',
    //useful directives, filters, services shared across the app
    require('../common').name,
    require('../user').name,
    require('../client').name,
    //load extra app modules here, e.g.:
    //require('./frontend').name,
    //require('./admin').name
  ])
  .config(['$validationProvider', function ($validationProvider) {
    $validationProvider.showSuccessMessage = false;
  }])
  .config(['$provide', '$httpProvider', function ($provide, $httpProvider) {
    $provide.factory('httpInterceptor', ['$q', 'growl', function ($q, growl) {
      return {
        response: function (response) {
          return response || $q.when(response);
        },
        responseError: function (rejection) {
          if (rejection.status === 400 || rejection.status === 500) {
            growl.error(rejection.data.message, {
              ttl: 10000
            });
          }
          return $q.reject(rejection);
        }
      };
        }]);
    $httpProvider.interceptors.push('httpInterceptor');
  }])
  .config(['growlProvider', function (growlProvider) {
    growlProvider.globalPosition('bottom-right');
  }]);
