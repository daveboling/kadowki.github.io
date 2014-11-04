(function(){
  'use strict';
  var index = angular.module('dave', ['ngRoute']);

  //Angular Routes
  index.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'home/home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);

  index.controller('IndexCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
    $scope.scrollTo = function(id){
       //Angular Scroll
       /*
         $location.hash(id);
         $anchorScroll();
       */

       //jQuery Smooth Scroll
       var $root = $('html, body');
       $root.animate({
         scrollTop: $('#' + id).offset().top
       }, 500);
    };
  }]);
})();
