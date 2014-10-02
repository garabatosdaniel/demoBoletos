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
    'ngTouch',
    'ui.date',
    'ui.select2'
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
      .when('/compraBoletos', {
        templateUrl: 'views/compraboletos.html',
        controller: 'CompraboletosCtrl'
      })
      .when('/camion', {
        templateUrl: 'views/camion.html',
        controller: 'CamionCtrl'
      })
      .when('/buscaBoletos', {
        templateUrl: 'views/buscaboletos.html',
        controller: 'BuscaboletosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
