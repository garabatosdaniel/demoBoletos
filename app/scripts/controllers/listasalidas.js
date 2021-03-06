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
    {departure:'21:10', arrival:'07:30',destino:'Tampico', escalas:'Villahermosa - Veracruz', disponibles:5, total:40, puerta: 'B2'},
    {departure:'21:20', arrival:'04:30',destino:'Veracruz', escalas:'Villahermosa',disponibles:3, total:40, puerta: 'A2'},
    {departure:'21:40', arrival:'05:30', destino:'Villahermosa', escalas: 'Express', disponibles:5, total:40, puerta: '10'},
    {departure:'22:35', arrival:'05:30', destino:'Veracruz', escalas: 'Express', disponibles:1, total:20, puerta: 'A1'},
    {departure:'23:00', arrival:'05:30', destino:'Tampico', escalas: 'Villahermosa - Veracruz - Xalapa', disponibles:5, total:10, puerta: 'A5'},
    {departure:'23:25', arrival:'05:30', destino:'Veracruz', escalas: 'Express', disponibles:4, total:50, puerta: 'B0'}

    ];
    var updateClock = function(){
      $scope.clock = new Date();
    }
    updateClock();

    setInterval(function(){
      $scope.$apply(updateClock);
    },1000);
  });
