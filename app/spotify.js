
console.log("linked!");
var keyList = require("./keys.js")

var spotify = require("node-spotify-api");


// start api call

Spotify.search({ type: 'track', query: songName }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  var client = new spotify(keyList);

    var params= {screen_name: "Mildred_Bonk_", count: 20};

  var songs= data.tracks.items;
  var dataArr = [];

//loop through results and push to array

for (var i=0; i <songs.length; i++){
  dataArr.push({
    'Artist(s): ' : songs[i].artists.map(artistNames),
    'Song Name: ' : songs[i].name,
    'Link: ': songs[i].preview_url,
    'Album: ' : songs[i].album.name,

  })
}
console.log(dataArr);
//ogData(dataArr);
});
}// end of spotify function
