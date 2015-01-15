'use strict';

/**
 * @ngdoc overview
 * @name lab2App
 * @description
 * # lab2App
 *
 * Main module of the application.
 */
angular
  .module('lab2App', [
    'ngAnimate',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contract', {
        templateUrl: 'views/contract.html',
        controller: 'ContractCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
