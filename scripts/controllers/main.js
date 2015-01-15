'use strict';

/**
 * @ngdoc function
 * @name lab2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lab2App
 */
angular.module('lab2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
