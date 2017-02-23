"use strict";

app.controller('SongCtrl', function ($scope, $routeParams, MusicFactory, AuthFactory) {
	$scope.items = [];
	let user = AuthFactory.getUser();

	MusicFactory.getMusicList(user)
	.then(function(musicCollection){
		$scope.music = musicCollection;
		$scope.selectedSong = $scope.music.filter(function(item){
			return item.id === $routeParams.itemId;
		})[0];
	});
});