var axios = require("axios");
var fs = require("fs");
var moment = require("moment");

var Bands = function() {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findShow = function(artist) {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function(response) {
            var jsonData = response.data[0];

            var showData = [
                "Date: " + moment(jsonData.datetime).format("MM/DD/YYYY"),
                "Venue: " + jsonData.venue.name,
                "City: " + jsonData.venue.city,
                "State: " + jsonData.venue.region,
                "Country: " + jsonData.venue.country,
            ]
            fs.appendFile("log.txt", showData + divider, function(err) {
                if (err) throw err;
                console.log(showData);
              });
        })
    }
}



module.exports = Bands;
