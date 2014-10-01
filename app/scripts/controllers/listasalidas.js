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
    $scope.salidas = [
    {departure:'21:10', arrival:'07:30',destino:'Tampico', escalas:'Villahermosa - Veracruz', disponibles:5, total:40, puerta: 'B100'},
    {departure:'21:20', arrival:'04:30',destino:'Veracruz', escalas:'Villahermosa',disponibles:3, total:40, puerta: 'A2'},
    {departure:'21:30', arrival:'05:30', destino:'Tampico', escalas: '', disponibles:5, total:40, puerta: '10'}
    ]
  });
