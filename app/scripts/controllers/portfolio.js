'use strict';

angular.module('paodgithubioApp')
  .controller('PortfolioCtrl', function ($scope, $http) {
    $scope.projects = [];
    $http.get('../json/projects.js').success(function(data) {
      $scope.projects = data;
    });
  });
