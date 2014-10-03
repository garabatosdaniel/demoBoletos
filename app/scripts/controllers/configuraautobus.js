'use strict';

/**
 * @ngdoc function
 * @name boletosApp.controller:ConfiguraautobusCtrl
 * @description
 * # ConfiguraautobusCtrl
 * Controller of the boletosApp
 */
angular.module('boletosApp')
  .controller('ConfiguraautobusCtrl', function ($scope) {
 $scope.list1 = [];
 $scope.list2 = [];
 $scope.list3 = [];
 $scope.list4 = [];

  $scope.list5 = [
    { 'title': 'Asiento 1', 'drag': true, 'img':'images//sit.png'},
    { 'title': 'Asiento 2', 'drag': true, 'img':'images//sit.png'},
    { 'title': 'Asiento 3', 'drag': true, 'img':'images//sit.png'},
    { 'title': 'Asiento 4', 'drag': true, 'img':'images//sit.png'},
    { 'title': 'Asiento 5', 'drag': true, 'img':'images//sit.png' },
    { 'title': 'Asiento 6', 'drag': true, 'img':'images//sit.png' },
    { 'title': 'Asiento 7', 'drag': true, 'img':'images//sit.png' },
    { 'title': 'Asiento 8', 'drag': true, 'img':'images//sit.png' },
    { 'title': 'Asiento 9', 'drag': true, 'img':'images//sit.png' },
    { 'title': 'Asiento 10', 'drag': true, 'img':'images//sit.png' },
    { 'title': 'TV 1', 'drag': true },
    { 'title': 'TV 2', 'drag': true },
    { 'title': 'Sanitario', 'drag': true, 'img':'images//wc.png' }
  ];

  // Limit items to be dropped in list1
  $scope.optionsList1 = {
    accept: function(dragEl) {
      if ($scope.list1.length >= 10) {
        return false;
      } else {
        return true;
      }
    }
  };
  });
