"use strict";

app.controller('NewMusicCtrl', function ($scope, MusicFactory, $location, AuthFactory) {
     $scope.title = "Add New Music";
     $scope.btnText = "Add!!!";
     $scope.newMusic = {
        title: "",
        artist: "",
        album: "",
        uid: AuthFactory.getUser()
     };
	 

	 $scope.addNewMusic = function(){
        MusicFactory.postNewMusic($scope.newMusic)
        .then(function(){
            $location.url("/music/list");
        });
        
    };
});