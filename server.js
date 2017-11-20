
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

 var path = require('path');

 var spotify = require("node-spotify-api");

 var PORT = process.env.PORT || 8080;
var bodyParser = require('body-parser')


 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }));

 // parse application/json
 app.use(bodyParser.json())

 require('./routing/apiroutes.js')(app);
 require('./routing/htmlroutes.js')(app);

 app.listen(PORT, function(){
   console.log("App listening on port: " + PORT);

 });
