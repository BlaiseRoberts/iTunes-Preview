"use strict";

app.factory('MusicFactory', function (FBCreds, $q, $http) {
	let getMusicList = (user) => {
		let musicList = [];
		return $q((resolve, reject)=>{
			$http.get(`${FBCreds.databaseURL}/songs.json?orderBy="uid"&equalTo="${user}"`).then((musicObj)=>{
				let musicCollection = musicObj.data;
				Object.keys(musicCollection).forEach((key)=>{
					musicCollection[key].id = key;
					musicList.push(musicCollection[key]);
				});
				resolve(musicList);
			})
			.catch((error)=>{
				reject(error);
			});
		});
	};
	let postNewMusic = (newSong)=>{
		return $q((resolve, reject) =>{
			$http.post(`${FBCreds.databaseURL}/songs.json`,
				angular.toJson(newSong))
			.then((ObjectFromFirebase)=>{
				resolve(ObjectFromFirebase);
			});
		});
	};
	let deleteMusic = (songID) =>{
		return $q((resolve)=>{
			$http.delete(`${FBCreds.databaseURL}/songs/${songID}.json`)
			.then((response)=>{
				resolve(response);
			});
		});
	};
	let updateSong = (songID, editedSong) =>{
		return $q((resolve)=>{
			$http.patch(`${FBCreds.databaseURL}/songs/${songID}.json`,
				angular.toJson(editedSong))
			.then((response)=>{
				resolve(response);
			});
		});
	};
	let getSingleSong = (songID) => {
		return $q((resolve, reject)=>{
			$http.get(`${FBCreds.databaseURL}/songs/${songID}.json`).then((musicObj)=>{
				resolve(musicObj.data);
			})
			.catch((error)=>{
				reject(error);
			});
		});
	};
	let getiTunes = (artist) => {
		return $q((resolve, reject)=>{
			$http.get(`https://itunes-proxy.herokuapp.com/api/itunes/?term=${artist}&media=music&limit=25`).then((musicObj)=>{
				resolve(musicObj.data);
			})
			.catch((error)=>{
				reject(error);
			});
		});
	};
	let getiTunesVideo = (artist) => {
		return $q((resolve, reject)=>{
			$http.get(`https://itunes-proxy.herokuapp.com/api/itunes/?term=${artist}&media=musicVideo&limit=10`).then((musicObj)=>{
				resolve(musicObj.data);
			})
			.catch((error)=>{
				reject(error);
			});
		});
	};



	return {
		getMusicList,
		postNewMusic,
		deleteMusic,
		updateSong,
		getSingleSong,
		getiTunes,
		getiTunesVideo
	};
});