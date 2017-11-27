console.log("linked!");

// Code for front-end JavaScript to "post" user entry for the song guess from our form and send it to the express server.
//When user submits info, jQuery will grab the song input field and send a post request to our API.
//gues button logic
  $(".submit").on("click", function(event)
  {
  event.preventDefault();

  //take userGuess form element input
  var guess = $('#song-guess').val().trim();
  //console.log(guess);
console.log($('#answer').text());
//check if matches
  if(guess == $("#answer").text() && guess !== ""){
    console.log("match!")
  }


  $.post("http://localhost:8080/game", { guess : guess }, function(data){
    if(data==='done'){
      alert('success');
    }
  });


     // Use existing guess fields to float down existing guesses
     // they clear from a different location (currently play button onclick)
     var guess1 = $("#guess1").text();
     var guess2 = $("#guess2").text();


     $("#guess1").text(guess);
     $("#guess2").text(guess1);
     $("#guess3").text(guess2);

    //  var oldGuessSpot = $("<div>");
    //  oldGuessSpot.text(guess);
     //$("#guesses").append(oldGuessSpot);

    //clear form
    $("#song-guess").val("");
//callback to compare to song data
    matchFunc(guess);

});


//match callback function
//I want to compare the guess from the user with the song title from spotify

function matchFunc(val){

    $.post("http://localhost:8080/spotify", function(data){

      //logs successfully here
      //console.log(data)
    });

//logs as undefined
//console.log(data);
//gets val from onclick function
  var currentGuess = val;
  //console.log(val);

};

//create audio when user clicks play button

$("#play").on("click", function(e){
e.preventDefault();
console.log('clicked');
//post to apiroutes to run spotify stuff
$.post("http://localhost:8080/spotify", function(data){

    //console.log(data);
    //var song = data[0];
    $("<audio></audio>").attr({
    'src': data.url +'.mp3',
    'volume':0.4,
    'autoplay':'autoplay'
}).appendTo("body");

$("#answer").append(data.title);
});

// to clear the three guessing fields when next song plays
$("#guess1").empty();
$("#guess2").empty();
$("#guess3").empty();

});

//next button
var counter = 0;

$.post("http://localhost:8080/spotify", function(data){
  //console.log(data);


 counter = 0;
//function to increment url index location without duplicates
function makeAudio(data){
    //res.json(uniqueArray(urls));
//console.log(data.url);
//  var song = data[counter];
  //console.log(song.url);
  $("<audio></audio>").attr({
  'src': data.url +'.mp3',
  'volume':0.4,
  'autoplay':'autoplay'
}).appendTo("body");

$("#answer").append(data.title);
//counter++;
if(counter > 10){
  counter = 0;
} else {
  counter++
}
}

$("#next").on("click", function(e){
e.preventDefault();
console.log('clicked');
$("<audio></audio>").remove();
makeAudio(data);




});

});


//pause button- messy temporary solution
$("#pause").on("click", function(e){
e.preventDefault();
console.log('clicked');

 var thissong = $('audio');
 thissong.get(0).pause();
 thissong.get(1).pause();
 thissong.get(2).pause();
 thissong.get(3).pause();
 thissong.get(4).pause();
 thissong.get(5).pause();
 thissong.get(6).pause();
 thissong.get(7).pause();
 thissong.get(8).pause();
 thissong.get(9).pause();
 thissong.get(10).pause();
 thissong.get(11).pause();
 thissong.get(12).pause();
});
