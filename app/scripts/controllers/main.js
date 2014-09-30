'use strict';

/**
 * @ngdoc function
 * @name boletosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boletosApp
 */
angular.module('boletosApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
