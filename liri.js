require("dotenv").config();
var Bands = require("./bands.js");
var Movie = require("./movie.js");
var music = require("./spotify");
var keys = require("./keys.js");
var fs = require("fs");

var userInput = process.argv[2];
var term = process.argv.slice(3).join(" ")

var bands = new Bands();
var movie = new Movie();

// var spotify = new Spotify(keys.spotify);

function prompt(userInput, term) {
    if (userInput === "concert-this") {
        console.log("Searching for concert.");
        bands.findShow(term);
    } 
    if (userInput === "spotify-this-song"){
        if (!term) {
            term = "The Sign Ace of Base"
        }
        console.log("Searching Spotify for song.")
        music(term);
    }
    if (userInput === "movie-this") {
        if (!term) {
            term = "Mr. Nobody";
        }
        console.log("Searching for movie.");
        movie.findMovie(term);
    }
    
    if (userInput === "do-what-it-says") {
        fs.readFile("random.txt", "utf8", function(err, data) {
            if (err) {
                throw err;
            }
            data = data.split(", ");

            var userInput = data[0];
            var term = data.slice(1).join(" ");

            prompt(userInput, term);
    
        })
        
    }
    
}
prompt(userInput, term);

