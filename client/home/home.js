(function(){
  'use strict';
  var home = angular.module('dave');

  home.controller('HomeCtrl', ['$scope', function($scope){

    $scope.slider = function(){
      $('#slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
    };

    //run initial slider
    $scope.slider();

  }]);
})();
