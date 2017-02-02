"use strict";
$(document).ready(function() {

	//////////////Printing from JSON file.


	$.ajax({
			url:"songs.json"
		}).done(printSongs);

	//Adding another JSON file

	$("#moreButton").click(function(){
		$.ajax({
			url:"songs2.json"
		}).done(printSongs);
	});


	//////////////Print/Remove songs function

	function printSongs(x){
		for (var key in x){
			var songData = ``;
			var currentSong = x[key];
			songData = `<section class='row' id="song-section"><h1 class='songName'>${currentSong.title}</h1><div class='col-md-4'>Artist:  ${currentSong.artist}</div><div class='col-md-4'>Album:  ${currentSong.album}</div><button type="button" class="deleteSongButton btn btn-danger">DELETE</button></section>`;
			$("#songInfo").append(songData);
			removeSong();
		}
	}
	function removeSong() {
		$(".deleteSongButton").click(function(){
			event.currentTarget.parentNode.remove();
		});
	}

	//////////////////Hiding and Showing DOM Elements


	//Inital Hide
	$("#add-music-view").hide();

	//add event listeners
	$("#link-music-list").click(function () {
		$("#list-music-view").show();
		$("#add-music-view").hide();
	});

	$("#link-add-music").click(function () {
		$("#add-music-view").show();
		$("#list-music-view").hide();
	});


	///////////Adding Inputs to my Array

	//Selecting elements
	$("#addButton").click(handleAddingSong);

	function handleAddingSong () {
		//Add inputs into the Song List
		var newSongTitle = $("#newSongName").val();
		var newArtist = $("#newArtist").val();
		var newAlbum = $("#newAlbum").val();
		console.log(newSongTitle);
		console.log(newArtist);
		console.log(newAlbum);
		var newSongData = ``;
		newSongData += `<section class='row' id="song-section"><h1 class='songName'>${newSongTitle}</h1><div class='col-md-4'>Artist:  ${newArtist}</div><div class='col-md-4'>Album:  ${newAlbum}</div><button type="button" class="deleteSongButton btn btn-danger">DELETE</button></section>`;
		$("#songInfo").append(newSongData);
		removeSong();

		//Clear Inputs
		$("#newSongName").val("");
		$("#newArtist").val("");
		$("#newAlbum").val("");
		alert("Your song has been added to the list, click on 'View Music' to see results!");
	}
});

















