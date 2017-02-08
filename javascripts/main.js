"use strict";
$(document).ready(function() {

	//////////////Printing from JSON file.
	let Songs = require("./songs.js");

	$.ajax({
			url:"songs.json"
		}).done(Songs.printSongs);

	//Adding another JSON file

	$("#moreButton").click(function(){
		$.ajax({
			url:"songs2.json"
		}).done(Songs.printSongs);
	});


	//////////////////Hiding and Showing DOM Elements

	let hideShow = require('./hideShow.js');

	//Inital Hide
	$("#add-music-view").hide();

	//add event listeners
	$("#link-music-list").click(hideShow.showMusic);

	$("#link-add-music").click(hideShow.addMusic);


	///////////Adding Inputs to my Array

	let AddingSong = require('./addingSongs.js');

	//Selecting elements
	$("#addButton").click(AddingSong.handleAddingSong);


	////////////Filtering

	let Filter = require('./filter.js');

	$("#filter-button").click(Filter.filterArtist);
	$("#unfilter-button").click(Filter.unfilterSongs);







});
