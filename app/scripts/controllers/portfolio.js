'use strict';

angular.module('paodgithubioApp')
  .controller('PortfolioCtrl', function ($scope, $http) {
    /*
    $scope.projects = [];
    $http.get('json/projects.json').success(function(data) {
      $scope.projects = data;
    });
  */
  $scope.projects = [{
      'name': 'YouInstant',
      'description': 'YouTube client that fetches YouTube results instantly.',
      'demolink': 'http://youinstant.herokuapp.com/',
      'sampleimage': 'images/youinstant.png'
    },
    {
      'name': 'Seize The Diamond',
      'description': 'Cat n Mouse game where cat is a python, and mouse is a gem.',
      'sampleimage': 'images/seizethediamond.png'
    },
    {
      'name': 'MyadVenture',
      'description': 'Built out backend of a KickStarter platform for UCLA internal student entrepreneurs and investors.',
      'demolink': 'http://myad-venture.com/',
      'sampleimage': 'images/myadventure.png'
    }
  ];
});
