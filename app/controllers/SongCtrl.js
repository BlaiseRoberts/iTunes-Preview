"use strict";

app.controller('SongCtrl', function ($scope, $routeParams, MusicFactory, AuthFactory, $window) {
	$scope.items = [];
	let user = AuthFactory.getUser();

	MusicFactory.getMusicList(user)
	.then(function(musicCollection){
		$scope.music = musicCollection;
		$scope.selectedSong = $scope.music.filter(function(item){
			return item.id === $routeParams.itemId;
		})[0];
	});

	$scope.goToEdit = ()=>{
		console.log("you clicked edit");
		$window.location.href = `#!/music/${$scope.selectedSong.id}/edit`;
	};
});