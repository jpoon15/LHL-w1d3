var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  for (var values in library.playlists) {
  console.log(library.playlists[values].id + ": " + library.playlists[values].name + " - " + library.playlists[values].tracks.length + " tracks");
  }
}
printPlaylists()

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var names in library.tracks) {
  console.log(library.tracks[names].id + ": " + library.tracks[names].name + " by " + library.tracks[names].artist + " (" + library.tracks[names].album + ")");
  }
}
printTracks()


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var trackNumber = library.playlists[playlistId].tracks;
   console.log(library.playlists[playlistId].id + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks");
   for (var i = 0; i < trackNumber.length ; i++) {
    console.log(library.tracks[trackNumber[i]].id + ": " + library.tracks[trackNumber[i]].name + " by " + library.tracks[trackNumber[i]].artist + " (" + library.tracks[trackNumber[i]].album + ")");
   }
  }
printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId)
  console.log(library.playlists[playlistId].tracks)
}

// addTrackToPlaylist("t04", "p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
// adds a track to the library

var addTrack = function (name, artist, album) {
/*
To create a new object, identify the location you want to create it
then follow save format
*/

var newId= [uid()]

library.tracks[newId] = { id: newId,
                          name: name,
                          artist: artist,
                          album: album }

}
addTrack("Charlie Brown", "Coldplay", "XY")
console.log(library.tracks);

// adds a playlist to the library

var addPlaylist = function (name) {

var newId = [uid()]

library.playlists[newId] = { id: newId,
                            name: name }
}

addPlaylist("Charlie Brown")
console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}