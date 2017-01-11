var songs = [];

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
	console.log(songs[i]);

}