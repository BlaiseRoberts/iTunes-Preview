"use strict";

app.controller('ListCtrl', function ($scope, MusicFactory, AuthFactory) {

    // $scope.searchText = SearchTermData;
    let user = AuthFactory.getUser();

    MusicFactory.getMusicList(user).then(function(musicCollection){
        console.log(musicCollection);
        $scope.music = musicCollection;
    });

	$scope.musicDelete = function(id){
        console.log("delete this item", id);
        MusicFactory.deleteItem(id)
        .then(function(response){
            MusicFactory.getMusicList(user).then(function(musicCollection){
                $scope.music = musicCollection;
            });
        });
    };
});