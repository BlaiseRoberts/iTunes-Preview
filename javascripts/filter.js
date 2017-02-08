"use strict";

let Songs = require('./songs.js');

function filterSongs () {
	var selectedArtist = $("#artist-selector option:selected").val();
	console.log(selectedArtist);
	var selectedAlbum = $("#album-selector option:selected").val();
	$(".artist").parent().hide();
	if (selectedArtist === "") {
		$(".album:contains("+selectedAlbum+")").parent().show();
	} else  if (selectedAlbum === "") {
		$(".artist:contains("+selectedArtist+")").parent().show();
	} else {
		$(".album:contains("+selectedAlbum+")").parent().show();
		$(".artist:contains("+selectedArtist+")").parent().show();

	}
	
	
}



module.exports = {filterSongs};
