'use strict';

describe('Controller: CompraboletosCtrl', function () {

  // load the controller's module
  beforeEach(module('boletosApp'));

  var CompraboletosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompraboletosCtrl = $controller('CompraboletosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
