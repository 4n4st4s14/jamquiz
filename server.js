
/**
 * This is an example of a basic node.js script that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow
 */
 var express = require('express'); // Express web server framework
 var app = express();
 var request = require('request');
 var cookieParser = require('cookie-parser');

 var querystring = require('querystring');
 var path = require('path');

 var spotify = require("node-spotify-api");



 // var request = require('request'); // "Request" library
 // var querystring = require('querystring');
 // var cookieParser = require('cookie-parser');

 var PORT = process.env.PORT || 8080;
 var bodyParser = require('body-parser')

 app.use(express.static('app/public'))
 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }));

 // parse application/json
 app.use(bodyParser.json())

 require('./routing/apiroutes.js')(app);
 require('./routing/htmlroutes.js')(app);


 app.listen(PORT, function(){
   console.log("App listening on port: " + PORT);

 });
