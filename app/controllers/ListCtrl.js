"use strict";

app.controller('ListCtrl', function ($scope, MusicFactory, AuthFactory, FilterFactory) {
    $scope.selectedArtist = "";
    $scope.selectedAlbum = "";
    $scope.filterText = FilterFactory;
    let user = AuthFactory.getUser();

    $scope.filterSongs = (item)=>{
        return item.title.match($scope.filterText.filter) || item.artist.match($scope.filterText.filter) || item.album.match($scope.filterText.filter);
    };

    


    MusicFactory.getMusicList(user).then(function(musicCollection){
        console.log(musicCollection);
        $scope.music = musicCollection;
    });

	$scope.songDelete = function(id){
        console.log("delete this item", id);
        MusicFactory.deleteMusic(id)
        .then(function(response){
            MusicFactory.getMusicList(user).then(function(musicCollection){
                $scope.music = musicCollection;
            });
        });
    };
});