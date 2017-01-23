// var songs = [];
// var titles = [];
// var artists = [];
// var albums = [];



// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// // Added songs to beginning and end of the array
// songs.push("Countdown > by Beyoncé on the album 4");
// songs.unshift("Self Control > by Frank Ocean on the album Blonde")



// //Creating a function at add array to DOM
// function printArrayToDOM () {
// 	// Find and replace worng characters in the array
// 	for (var i = 0; i < songs.length; i++) {
// 		songs[i] = songs[i].replace(">","-");
// 		songs[i] = songs[i].replace("*","");
// 		songs[i] = songs[i].replace("@","");
// 		songs[i] = songs[i].replace("(","");
// 		songs[i] = songs[i].replace("!","");
// 		// console.log(songs[i]);

// 		//make titles array
// 		var newTitle = songs[i].split(" - by",2);
// 		titles = newTitle[0];
// 		// console.log(titles)
// 		var newArray = newTitle[1];
// 		// console.log(newArray)

// 		//make artists array
// 		var newArtist = newArray.split(" on the album ",2);
// 		artist = newArtist[0];

// 		// console.log(artist)

// 		album = newArtist [1];
// 		// console.log(album)


// 	//print to DOM

// 		var songInfo = document.getElementById("songInfo")

// 		songInfo.innerHTML += "<section class='row'><h1 class='songName'>" + titles + "</h1><div class='col-md-4'>Artist:  " + artist + "</div><div class='col-md-4'>Album:  " + album + "</div>";
// 	}

// }
// printArrayToDOM()


//////////////Printing from JSON file.

var firstRequest = new XMLHttpRequest();
var secondRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", requestComplete)
firstRequest.addEventListener("error", requestError)
secondRequest.addEventListener("load", requestComplete)
secondRequest.addEventListener("error", requestError)


function requestError(e){
	console.log("Error loading data!")
};
function requestComplete(e){
	var jsonSongs = JSON.parse(event.target.responseText);
	printSongs(jsonSongs);
};


//Print songs function

function printSongs(x){
	var songInfo = document.getElementById("songInfo");
	for (key in x){
		var songData = ``;
		var currentSong = x[key];
		songData += `<section class='row' id="song-section"><h1 class='songName'>${currentSong.title}</h1><div class='col-md-4'>Artist:  ${currentSong.artist}</div><div class='col-md-4'>Album:  ${currentSong.album}</div><button type="button" class="deleteSongButton btn btn-danger">DELETE</button></section>`;
		songInfo.innerHTML += songData;
	}
	var deleteSongButtons = document.getElementsByClassName("deleteSongButton");

	for (var i = 0; i < deleteSongButtons.length; i++) {
		deleteSongButtons.item(i).addEventListener("click", handleRemoveSong)
	};

	function handleRemoveSong(e){
		this.parentNode.remove();
	};
};


//Open and Send HttpRequest

firstRequest.open("GET", "songs.json");
firstRequest.send();

////Adding another JSON file

var moreButton = document.getElementById("moreButton")
moreButton.addEventListener("click", handleSecondRequest)

function handleSecondRequest(e){
	secondRequest.open("GET", "songs2.json")
	secondRequest.send();
}











//Hiding and Showing DOM Elements

//select DOM elements
var listMusicView = document.getElementById("list-music-view")
var addMusicView = document.getElementById("add-music-view")
var linkMusicList = document.getElementById("link-music-list")
var linkAddMusic =  document.getElementById("link-add-music")

//add event listeners
linkMusicList.addEventListener("click", handleListView)
linkAddMusic.addEventListener("click", handleAddMusic)

//Functions
function handleListView (e) {
	listMusicView.classList.remove("hidden")
	listMusicView.classList.add("visible")
	addMusicView.classList.add("hidden")
}

function handleAddMusic (e) {
	addMusicView.classList.remove("hidden")
	addMusicView.classList.add("visible")
	listMusicView.classList.add("hidden")
}






//Adding Inputs to my Array

// //Selecting elements
// var addButton = document.getElementById("addButton")

// addButton.addEventListener("click", handleAddingToArray)

// function handleAddingToArray (e) {
// 	//Add inputs into the Array
// 	var newSongTitle = document.getElementById("newSongName").value
// 	var newArtist = document.getElementById("newArtist").value
// 	var newAlbum = document.getElementById("newAlbum").value
// 	var newArrayItem = newSongTitle + " > by " + newArtist + " on the album " + newAlbum
// 	songs.unshift(newArrayItem)
// 	//Clear DOM and reprint
// 	songInfo.innerHTML = ""
// 	printArrayToDOM()
// 	//Clear Inputs
// 	document.getElementById("newSongName").value = ""
// 	document.getElementById("newArtist").value = ""
// 	document.getElementById("newAlbum").value = ""
// 	alert("Your song has been added to the list, click on 'View Music' to see results!")
// }


















