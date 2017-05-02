"use strict";

app.controller('ListCtrl', function ($scope, MusicFactory, AuthFactory, FilterFactory) {
    $scope.selectedArtist = "";
    $scope.selectedAlbum = "";
    $scope.filterText = FilterFactory;
    let user = AuthFactory.getUser();

    $scope.filterSongs = (item)=>{
        return item.trackName.match($scope.filterText.filter) || item.artistName.match($scope.filterText.filter) || item.collectionName.match($scope.filterText.filter);
    };

    


    MusicFactory.getMusicList(user).then(function(musicCollection){
        $scope.music = musicCollection;
    });

	$scope.songDelete = function(id){
        MusicFactory.deleteMusic(id)
        .then(function(response){
            MusicFactory.getMusicList(user).then(function(musicCollection){
                $scope.music = musicCollection;
            });
        });
    };
});