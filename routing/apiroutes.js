module.exports = function(app) {
  app.get('/keys', function(req, res) {
    res.send('jake');
  });


  app.get('/spotify', function(req, res) {
    var Spotify = require("node-spotify-api");

var SpotifyWebApi = require('spotify-web-api-node');

    // var keyList = require("keys.js")

    var spotify = new Spotify({
      id: '8c539bcca28c4bc5b89dcccdd09be68d',
      secret: '98e7a54c12364f48b022bf2de33c3cb9'
    });

    var spotifyApi = new SpotifyWebApi({
  clientId : '8c539bcca28c4bc5b89dcccdd09be68d',
  clientSecret : '98e7a54c12364f48b022bf2de33c3cb9',
  //redirectUri : 'http://www.example.com/callback'
});

    console.log(spotify);
    //start api call
    SpotifyWebApi.searchPlaylists('workout')
      .then(function(data) {
        console.log('Found playlists are', data.body);
      }, function(err) {
        console.log('Something went wrong!', err);
      });
    // var artistNames = function(artist){
    //   return artist.name;
    // };
    // spotify.search({
    //   type: 'track',
    //   query: 'toxic'
    // }, function(err, data) {
    //   if (err) {
    //     return console.log('Error occurred: ' + err);
    //   }
    //
    //   var spotify = new Spotify({
    //     id: '8c539bcca28c4bc5b89dcccdd09be68d',
    //     secret: '98e7a54c12364f48b022bf2de33c3cb9'
    //   });
    //
    //   var params = {
    //     screen_name: "Mildred_Bonk_",
    //     count: 20
    //   };
    //
    //   var songs = data.tracks.items;
    //   var dataArr = [];
    //
    //   //loop through results and push to array
    //
    //   for (var i = 0; i < songs.length; i++) {
    //     dataArr.push({
    //       'Artist(s): ': songs[i].artists.map(artistNames),
    //       'Song Name: ': songs[i].name,
    //       'Link: ': songs[i].preview_url,
    //       'Album: ': songs[i].album.name,
    //
    //     })
    //   }
    // });
    res.json(spotify)
  })

// app.get('/game', function(req, res){
//   var guess = req.body;
//   console.log(guess);
// });

}
