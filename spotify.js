var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var Spotifysearch = function(term) {
    spotify.search({ type: 'track', query: term }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
    //   console.log(data.tracks.items[0]);
    //   console.log("artist name: " + data.tracks.items[0].artists[0].name); 
      var songs = data.tracks.items[0];
      console.log("artist name: " + songs.artists[0].name);

      var songString =[
        "Artist: " + songs.artists[0].name,
        "Song Title: " + songs.name,
        "Preview Link: " + songs.preview_url,
        "Album Title: " + songs.album.name,
    ].join("\n\n");

    fs.appendFile("log.txt", songString, function (err) {
        if (err) throw err;
        console.log(songString)
    });
      });
}



module.exports = Spotifysearch;