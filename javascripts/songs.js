"use strict";

//////Song Array

let SongList = [];
let counter = 0;




//////////////Print/Remove songs function

function printSongs(x){

	for (var key in x){
		var songData = ``;
		var currentSong = x[key];
		songData = `<section class='row' id="song-section"><h1 class='songName'>${currentSong.title}</h1><div class='col-md-4 artist'><span>by</span> ${currentSong.artist}</div><div class='col-md-4 album'><span>on</span> ${currentSong.album}</div><button type="button" id="${counter}" class="deleteSongButton btn btn-danger text-right">DELETE</button></section>`;
		$("#songInfo").append(songData);
		var songDataObj = {
			id: counter,
			title: currentSong.title,
			artist: currentSong.artist,
			album: currentSong.album
		};
		SongList.push(songDataObj);
		counter ++;
		removeSong();	
	}

}
function removeSong() {
	$(".deleteSongButton").click(function(){
		for (var i = 0; i < SongList.length; i++) {
			if (event.currentTarget.id == SongList[i].id) {
				SongList.splice(SongList.indexOf(SongList[i]), 1);
			}
		}
		var parent = event.currentTarget.parentNode;
		parent.remove();
	});
}


function returnCounter () {
	return counter;
}

function addCounter() {
	counter++;
}

function returnSongList () {
	return SongList;
}

module.exports = {printSongs, removeSong, SongList, returnSongList, returnCounter, addCounter};




















