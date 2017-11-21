module.exports = function(app) {
  app.get('/keys', function(req, res) {
    res.send('jake');
  });

  app.get('/spotify', function(req, res) {
    var Spotify = require("node-spotify-api");

    // var keyList = require("keys.js")

    var spotify = new Spotify({
      id: '8c539bcca28c4bc5b89dcccdd09be68d',
      secret: '98e7a54c12364f48b022bf2de33c3cb9'
    });

    console.log(spotify);
    //start api call

    // Spotify.search({
    //   type: 'track',
    //   query: songName
    // }, function(err, data) {
    //   if (err) {
    //     return console.log('Error occurred: ' + err);
    //   }
    //   var client = new spotify(keyList);
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
}
