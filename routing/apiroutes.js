
var Spotify = require("node-spotify-api");
var request = require("request");
var bodyParser = require('body-parser');
//var cheerio = require('cheerio');
//console.log(userGuess.guess.userSongGuess);

module.exports = function(app) {
  app.get('/keys', function(req, res) {
    res.send('jake');
  });

//called when the play button is clicked(for now)
  app.post('/spotify', function(req, res) {
    var Spotify = require("node-spotify-api");
    var request = require("request");
    var bodyParser = require('body-parser');



    //function to parse artist name from spotify- requires external call
        var artistNames = function(artist){
          return artist.name;
        };
        //spotify function
    //our songs :)
    var songs = ['uptown funk', 'eye of the tiger', 'born to run', 'Alexander Hamilton', 'Get Lucky', 'show me love', 'Toxic', 'go your own way', 'call my maybe', 'i will always love you', 'call me', 'ebony and ivory', 'hot stuff'];

    var info;
    var previewUrl;
    var songTitle;
    var artist;
    //var dataArr = [];
    var urls = [];
    var uniqueUrls = [];
    var titles = [];
    //callback function, in order to make the data array accessible outside the //loop,
    //for loop getting info & audio of our songs from spotify

    let getAllData = function(songs, cb){

          var dataArr = [];
          for (var i=0; i<songs.length; i++){

            var spotify = new Spotify({
              id: '8c539bcca28c4bc5b89dcccdd09be68d',
              secret: '98e7a54c12364f48b022bf2de33c3cb9'
            });
    //search function looping through songs
        spotify.search({ type: 'track', query: songs[i], limit: 1 }, function(err, data) {
          if (err) {
            return console.log('Error occurred: ' + err);
          }

             info = data.tracks.items;
             previewUrl = info[0].preview_url;
             songTitle= info[0].name;
             artist = info[0].artists.map(artistNames);

            // console.log(previewUrl);
            // console.log(songTitle);
            // console.log(artist);

            // push data to array
              dataArr.push({
                "url": previewUrl,
                "title": songTitle,
                "artist": artist
              });
              // console.log("data array:  " + dataArr);
             //console.log(JSON.stringify(dataArr));
             //callback to parse dataArr
             cb(dataArr);

            });

            }

          }

          getAllData(songs,function(data){

            for(var i=0; i< songs.length; i++){
                  //console.log(data[i].url);

              urls.push(data[i].url);

              titles.push(data[i].title);


         };
         res.json(data);




  })
})

//post logs user guess from html form on back end
app.post('/game', function(req, res){
  var guess = req.body.guess;
  //console.log(guess);
});

}
