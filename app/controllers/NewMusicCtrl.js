"use strict";

app.controller('NewMusicCtrl', function ($scope, MusicFactory, $location, AuthFactory) {
    $scope.iTunesArtist = "";
    $scope.iTunesSongs = [];
     $scope.title = "Add New Music";
     $scope.btnText = "Add!!!";
     $scope.newMusic = {
        trackName: "",
        artistName: "",
        collectionName: "",
        uid: AuthFactory.getUser()
     };
	 



     $scope.searchiTunes = function(){
        MusicFactory.getiTunes($scope.iTunesArtist)
        .then(function(response){
            $scope.iTunesSongs = response.results;
        });
        
     };

     $scope.addiTunesSong = function(index){
        $scope.newiTunesSong = this.item;
        $scope.newiTunesSong.uid = AuthFactory.getUser();
        MusicFactory.postNewMusic($scope.newiTunesSong);
        $scope.iTunesSongs.splice(index, 1);
    };



	 $scope.addNewMusic = function(){
        MusicFactory.postNewMusic($scope.newMusic)
        .then(function(){
            $location.url("/music/list");
        });
        
    };
});