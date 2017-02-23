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
	let postNewMusic = (newItem)=>{
		return $q((resolve, reject) =>{
			$http.post(`${FBCreds.databaseURL}/songs.json`,
				JSON.stringify(newItem))
			.then((ObjectFromFirebase)=>{
				resolve(ObjectFromFirebase);
			});
		});
	};
	let deleteMusic = (itemID) =>{
		console.log("delete in factory", itemID);
		return $q((resolve)=>{
			$http.delete(`${FBCreds.databaseURL}/songs/${itemID}.json`)
			.then((response)=>{
				resolve(response);
			});
		});
	};


	return {
		getMusicList,
		postNewMusic,
		deleteMusic
	};
});