console.log("this is loaded");


// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : '8c539bcca28c4bc5b89dcccdd09be68d',
  clientSecret : '98e7a54c12364f48b022bf2de33c3cb9',
  redirectUri : 'http://www.example.com/callback'
});

module.exports =  spotifyApi;
