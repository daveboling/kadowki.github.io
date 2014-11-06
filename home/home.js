(function(){
  'use strict';
  var home = angular.module('dave');

  home.controller('HomeCtrl', ['$scope', function($scope){
    var slider = $('#slider');
    $scope.slider = function(){
      slider.slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 6000
      });
    };

    $scope.sliderNext = function(){
      slider.slickNext();
    };

    $scope.sliderPrev = function(){
      slider.slickPrev();
    };

    //run initial slider
    var waiter = setTimeout(function(){
     $scope.slider();
     clearTimeout(waiter);
    }, 500);


  }]);
})();
