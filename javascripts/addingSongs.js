"use strict";

let Songs = require('./songs.js');


function handleAddingSong () {
		//Add inputs into the Song List
		var newSongTitle = $("#newSongName").val();
		var newArtist = $("#newArtist").val();
		var newAlbum = $("#newAlbum").val();
		var newSongData = ``;
		newSongData += `<section class='row' id="song-section"><h1 class='songName'>${newSongTitle}</h1><div class='col-md-4'>Artist:  ${newArtist}</div><div class='col-md-4'>Album:  ${newAlbum}</div><button type="button" id="${Songs.returnCounter()}" class="deleteSongButton btn btn-danger">DELETE</button></section>`;
		$("#songInfo").append(newSongData);
		var songDataObj = {
			id: Songs.returnCounter(),
			title: newSongTitle,
			artist: newArtist,
			album: newAlbum
		};
		Songs.SongList.push(songDataObj);
		Songs.removeSong();
		Songs.addCounter();
		//Clear Inputs
		$("#newSongName").val("");
		$("#newArtist").val("");
		$("#newAlbum").val("");
		alert("Your song has been added to the list, click on 'View Music' to see results!");
	}

module.exports = {handleAddingSong};