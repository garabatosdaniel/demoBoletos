'use strict';

/**
 * @ngdoc function
 * @name boletosApp.controller:CompraboletosCtrl
 * @description
 * # CompraboletosCtrl
 * Controller of the boletosApp
 */
angular.module('boletosApp')
  .controller('CompraboletosCtrl', function ($scope) {
    $scope.showResult = false;
    $scope.estates = [{'id':2,'name':'Aguascalientes'},{'id':3,'name':'Baja California'},{'id':4,'name':'Baja California Sur'},{'id':5,'name':'Campeche'},{'id':50,'name':'Categoria Nacional'},{'id':8,'name':'Chiapas'},{'id':9,'name':'Chihuahua'},{'id':6,'name':'Coahuila de Zaragoza'},{'id':7,'name':'Colima'},{'id':1,'name':'Distrito Federal'},{'id':10,'name':'Durango'},{'id':11,'name':'Guanajuato'},{'id':12,'name':'Guerrero'},{'id':13,'name':'Hidalgo'},{'id':14,'name':'Jalisco'},{'id':16,'name':'Michoacán de Ocampo'},{'id':17,'name':'Morelos'},{'id':15,'name':'México'},{'id':18,'name':'Nayarit'},{'id':19,'name':'Nuevo León'},{'id':20,'name':'Oaxaca'},{'id':21,'name':'Puebla'},{'id':22,'name':'Querétaro'},{'id':23,'name':'Quintana Roo'},{'id':24,'name':'San Luis Potosí'},{'id':25,'name':'Sinaloa'},{'id':26,'name':'Sonora'},{'id':27,'name':'Tabasco'},{'id':28,'name':'Tamaulipas'},{'id':29,'name':'Tlaxcala'},{'id':30,'name':'Veracruz de Ignacio de la Llave'},{'id':31,'name':'Yucatán'},{'id':32,'name':'Zacatecas'}];
    $scope.serchResult = [
      {horario:'19:30', terminalSalida:'Ciudad del Carmen', terminalLlegada:'Villahermosa', precio: '$ 350.00', tiempoEstidmado:'2:20', disponibles:'10'},
      {horario:'20:00', terminalSalida:'Villahermosa', terminalLlegada:'Tampico', precio: '$ 700.00', tiempoEstidmado:'7:00', disponibles:'18'},
      {horario:'21:30', terminalSalida:'Veracruz', terminalLlegada:'Tampico', precio: '$ 450.00', tiempoEstidmado:'4:50', disponibles:'0'},
      {horario:'20:30', terminalSalida:'Ciudad del Carmen', terminalLlegada:'Veracruz', precio: '$ 400.00', tiempoEstidmado:'8:00', disponibles:'15'},
      {horario:'20:00', terminalSalida:'Ciudad del Carmen', terminalLlegada:'Veracruz', precio: '$ 450.00', tiempoEstidmado:'8:00', disponibles:'3'}

    ];
    $scope.buscaBoletos = function(){
      $scope.showResult = true;
    };
  });
