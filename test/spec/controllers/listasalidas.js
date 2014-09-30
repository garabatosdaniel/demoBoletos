'use strict';

describe('Controller: ListasalidasCtrl', function () {

  // load the controller's module
  beforeEach(module('boletosApp'));

  var ListasalidasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListasalidasCtrl = $controller('ListasalidasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
