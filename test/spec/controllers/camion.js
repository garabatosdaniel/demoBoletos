'use strict';

describe('Controller: CamionCtrl', function () {

  // load the controller's module
  beforeEach(module('boletosApp'));

  var CamionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CamionCtrl = $controller('CamionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
