"use strict";


app.controller("notectrl", function($scope, fbFactory){
    fbFactory.getNote()
    .then(function(data){
        console.log("data is", data);
        $scope.notes= data;
        console.log("$scope.notes", $scope.notes);
    });
});
