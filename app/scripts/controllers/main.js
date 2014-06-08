'use strict';

/**
 * @ngdoc function
 * @name styleclassApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the styleclassApp
 */
angular.module('styleclassApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
