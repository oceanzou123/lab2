'use strict';

describe('Controller: ContractCtrl', function () {

  // load the controller's module
  beforeEach(module('lab2App'));

  var ContractCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContractCtrl = $controller('ContractCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
