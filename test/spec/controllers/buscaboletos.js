'use strict';

describe('Controller: BuscaboletosCtrl', function () {

  // load the controller's module
  beforeEach(module('boletosApp'));

  var BuscaboletosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuscaboletosCtrl = $controller('BuscaboletosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
