"use strict";

app.controller('VideoCtrl', function ($scope, MusicFactory) {
    $scope.iTunesArtist = "";
    $scope.iTunesSongs = [];
    $scope.title = "Preview Music Videos!!!";
    
     $scope.searchiTunes = function(){
        MusicFactory.getiTunesVideo($scope.iTunesArtist)
        .then(function(response){
            $scope.iTunesSongs = response.results;
        });
        
     };

     


});