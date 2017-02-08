"use strict";

function showMusic () {
	$("#list-music-view").show();
	$("#add-music-view").hide();
}

function addMusic () {
	$("#add-music-view").show();
	$("#list-music-view").hide();
}

module.exports = {showMusic, addMusic};