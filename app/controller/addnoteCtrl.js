"use strict";
app.controller('AddNoteCtrl', function($scope, $location, $routeParams, fbFactory) {
  
  $scope.task = {
    isCompleted: false
  };

  $scope.submitTask = function() {
    console.log("scope note is", $scope.task);
    // stuff goes here
    fbFactory.addTask($scope.task)
    .then(function(data){
        console.log("data", data);
        $location.path("/");
       //DataFactory.getTaskList();
    });
  };

});
