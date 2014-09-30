'use strict';

/**
 * @ngdoc function
 * @name boletosApp.controller:ListasalidasCtrl
 * @description
 * # ListasalidasCtrl
 * Controller of the boletosApp
 */
angular.module('boletosApp')
  .controller('ListasalidasCtrl', function ($scope) {
    $scope.salidas = [{hora:'21:30', destino:'Tampico', disponibles:5, total:40}
    ]
  });
