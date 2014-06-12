'use strict';

/**
 * @ngdoc directive
 * @name paodgithubioApp.directive:card
 * @description
 * # card
 */
angular.module('paodgithubioApp')
  .directive('card', function () {
    return {
      templateUrl: 'views/directives/card.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the card directive');
      }
    };
  });
