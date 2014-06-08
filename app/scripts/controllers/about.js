'use strict';

/**
 * @ngdoc function
 * @name styleclassApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the styleclassApp
 */
angular.module('styleclassApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
