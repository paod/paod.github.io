'use strict';

/**
 * @ngdoc overview
 * @name paodgithubioApp
 * @description
 * # paodgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('paodgithubioApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'
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
      .otherwise({
        redirectTo: '/'
      });
  });
