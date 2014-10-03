'use strict';

describe('Controller: ConfiguraautobusCtrl', function () {

  // load the controller's module
  beforeEach(module('boletosApp'));

  var ConfiguraautobusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfiguraautobusCtrl = $controller('ConfiguraautobusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
