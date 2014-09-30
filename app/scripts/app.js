'use strict';

/**
 * @ngdoc overview
 * @name boletosApp
 * @description
 * # boletosApp
 *
 * Main module of the application.
 */
angular
  .module('boletosApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/listaSalidas', {
        templateUrl: 'views/listasalidas.html',
        controller: 'ListasalidasCtrl'
      })
      .when('/listaSalidas', {
        templateUrl: 'views/listasalidas.html',
        controller: 'ListasalidasCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
