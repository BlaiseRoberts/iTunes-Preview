"use strict";

let Songs = require('./songs.js');

function filterArtist () {
	var selectedArtist = $("#artist-selector option:selected").val();
	$(".artist").parent().hide();
	$(".artist:contains("+selectedArtist+")").parent().show();
}

function unfilterSongs () {
	$(".artist").parent().show();
}

module.exports = {filterArtist, unfilterSongs};
