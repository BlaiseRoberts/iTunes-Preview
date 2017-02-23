"use strict";

app.controller("EditSongCtrl", function($scope, $location, $routeParams, MusicFactory){
  $scope.title = "Edit Song Info";
  $scope.btnText = "Update";
  $scope.newMusic = {};

  // MusicFactory.getSingleItem($routeParams.itemId)
  // .then(function successCallback(response){
  //    console.log("getSingleItemresponse", response);
  //     $scope.newMusic = response;
  // });
    
  // $scope.addNewItem = function(){
  //   MusicFactory.updateItem($routeParams.itemId, $scope.newTask)
  //   .then(function successCallback(response) {
  //     console.log(response);
  //     $location.url("/music/list");
  //   });
  // };
});