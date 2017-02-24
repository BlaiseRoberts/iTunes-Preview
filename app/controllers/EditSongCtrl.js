"use strict";

app.controller("EditSongCtrl", function($scope, $location, $routeParams, MusicFactory){
  $scope.title = "Edit Song Info";
  $scope.btnText = "Update";
  $scope.newMusic = {};

  MusicFactory.getSingleSong($routeParams.songId)
  .then(function successCallback(response){
     console.log("getSingleItemresponse", response);
      $scope.newMusic = response;
  });
    
  $scope.addNewMusic = function(){
    MusicFactory.updateSong($routeParams.songId, $scope.newMusic)
    .then(function successCallback(response) {
      console.log(response);
      $location.url("/music/list");
      
    });
  };
});