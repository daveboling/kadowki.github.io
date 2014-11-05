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
    window.onload = function(){
      var waiter = setTimeout(function(){
       $scope.slider(); 
       console.log('it loaded');
      }, 500);
    };

  }]);
})();
