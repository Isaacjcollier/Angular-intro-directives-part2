(function() {
  'use strict';

  const app = angular.module('myApp', [])
  app
    .controller('AppController', AppController)
    .directive('todd', ToddDirective)

  AppController.$inject = []

  function AppController() {}

  ToddDirective.$inject = []

  function ToddDirective() {
    return {
      restrict: 'A',
      scope: {},
      controller: function($scope) {
        $scope.changeColor = function() {
          alert('Hii.')
        }
      },
      link: function(scope, element, attrs, ctrl, transcludeFn) {
        let oldColor = element.css('background-color') || 'white'
        element.on('mouseover', function() {
          element.css('background-color', attrs.backgroundColor )
        })
        element.on('mouseleave', function() {
          element.css('background-color', oldColor)
        })
      }
    }
  }
}());
