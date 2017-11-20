var path = require('path');

//A GET Route to /survey which should display the survey page.
module.exports = function(app){
  app.get('/game', function(req, res){
    res.sendFile(path.join(__dirname + '/../game.html'));
  });

//A default, catch-all route that leads to home.html which displays the home page.
  app.use(function(req, res){
    res.sendFile(path.join(__dirname + '/../index.html'));
  });

}
