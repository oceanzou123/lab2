'use strict';

/**
 * @ngdoc function
 * @name lab2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the lab2App
 */
angular.module('lab2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
