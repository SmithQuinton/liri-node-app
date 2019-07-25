var spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);


var Spotify = function() {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findMusic = function(film) {
        var URL = "http://www.omdbapi.com/?apikey=trilogy&plot=short&t=" + film;

        axios.get(URL).then(function(response) {
            var jsonData = response.data;

            var movieData = [
                "Title: " + jsonData.Title,
                "Release Year: " + jsonData.Year,
                "Rating: " + jsonData.imdbRating,
                "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
                "Country Produced In: " + jsonData.Country,
                "Movie Language: " + jsonData.Language,
                "Movie Plot:" + jsonData.Plot,
                "Actors: " + jsonData.Actors,
            ]
            fs.appendFile("log.txt", movieData + divider, function(err) {
                if (err) throw err;
                console.log(movieData);
              });
        })
    }
}



module.exports = Spotify;