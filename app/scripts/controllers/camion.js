'use strict';

/**
 * @ngdoc function
 * @name boletosApp.controller:CamionCtrl
 * @description
 * # CamionCtrl
 * Controller of the boletosApp
 */
angular.module('boletosApp')
  .controller('CamionCtrl', function ($scope) {
    jQuery('.gridster ul').gridster({
      'widget_margins': [10, 10],
      'widget_base_dimensions': [140, 140]
    });
  });
