'use strict';

/**
 * @ngdoc function
 * @name boletosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the boletosApp
 */
angular.module('boletosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
