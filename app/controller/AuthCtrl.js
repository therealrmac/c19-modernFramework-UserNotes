"use strict";

app.controller("AuthCtrl", ['$location', '$scope', 'AuthFactory', function($location, $scope, AuthFactory) {
  $scope.auth = {};

  let logMeIn = function(loginStuff){
    //console.log("what is loginStuff", loginStuff);
  AuthFactory.authenticate(loginStuff).then(function(didLogin){
      $scope.login = {};
      $scope.register = {};
      $location.url("/note/list");
      console.log("user", didLogin, "logged in");
    });
  };


  $scope.registerUser = function(registerNewUser) {
    AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister) {
      logMeIn(registerNewUser);
    });
  };

  $scope.logoutUser = function(){
    AuthFactory.logout();
    $location.url('/auth');
    console.log("logged out");
  };

  $scope.loginUser = function(loginNewUser){
    logMeIn(loginNewUser);
  };
}]);
