console.log("this is loaded");


// credentials are optional
var spotifyApi = new SpotifyWebApi({
  client_id : '8c539bcca28c4bc5b89dcccdd09be68d',
  client_secret : '98e7a54c12364f48b022bf2de33c3cb9',
  redirect_uri : 'http://localhost:8080/index.html'
});

module.exports =  spotifyApi;
