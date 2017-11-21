module.exports = function (app) {
  app.get('/keys', function(req, res){
    res.json(spotifyData);
  });
