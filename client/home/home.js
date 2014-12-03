/* global alertify */
(function(){
  'use strict';
  var home = angular.module('dave');

  home.controller('HomeCtrl', ['$scope', '$http', function($scope, $http){
    $scope.email = {name:'', email:'', body:'', phone:''};

    $scope.sendMail = function(){
      return $http.post('http://api.daviddboling.com/sendMail', $scope.email).then(function(res){
        $scope.email = {name:'', email:'', body:'', phone:''};
        alertify.log('Thank you for reaching out to me! Expect a response as soon as possible!');
      },function(res){
        alertify.error('Sorry, something went wrong! Please try again.');
      });
    };

  }]);
})();
