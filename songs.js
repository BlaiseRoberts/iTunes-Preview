var songs = [];
var titles = [];
var artists = [];
var albums = [];



songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Added songs to beginning and end of the array
songs.push("Countdown > by Beyoncé on the album 4");
songs.unshift("Self Control > by Frank Ocean on the album Blonde")

// Find and replace worng characters in the array
for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(">","-");
	songs[i] = songs[i].replace("*","");
	songs[i] = songs[i].replace("@","");
	songs[i] = songs[i].replace("(","");
	songs[i] = songs[i].replace("!","");
	// console.log(songs[i]);

	//make titles array
	var newTitle = songs[i].split(" - by",2);
	titles = newTitle[0];
	// console.log(titles)
	var newArray = newTitle[1];
	// console.log(newArray)

	//make artists array
	var newArtist = newArray.split(" on the album ",2);
	artist = newArtist[0];

	// console.log(artist)

	album = newArtist [1];
	// console.log(album)


//print to DOM

	var songInfo = document.getElementById("songInfo")

	songInfo.innerHTML = songInfo.innerHTML + "<section class='row'><h1 class='songName'>" + titles + "</h1><div class='col-md-4'>Artist:  " + artist + "</div><div class='col-md-4'>Album:  " + album + "</div>";
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























