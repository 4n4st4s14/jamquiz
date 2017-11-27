console.log("linked!");

// Code for front-end JavaScript to "post" user entry for the song guess from our form and send it to the express server.
//When user submits info, jQuery will grab the song input field and send a post request to our API.
//gues button logic
$(".submit").on("click", function(event) {
  event.preventDefault();

  //take userGuess form element input
  var guess = $('#song-guess').val().trim();
  //console.log(guess);
  console.log($('#answer').text());
  //check if matches
  if (guess == $("#answer").text() && guess !== "") {
    console.log("match!")
  }


  $.post("http://localhost:8080/game", {
    guess: guess
  }, function(data) {
    if (data === 'done') {
      alert('success');
    }
  });


  // Create the HTML div and add the guess
  var oldGuessSpot = $("<div>");
  oldGuessSpot.text(guess);

  $("#guesses").append(oldGuessSpot);

  //clear form
  $("#song-guess").val("");
  //callback to compare to song data
  //matchFunc(guess);

});


//match callback function
//I want to compare the guess from the user with the song title from spotify

// function matchFunc(val){
//
//     $.post("http://localhost:8080/spotify", function(data){
//
//       //logs successfully here
//       //console.log(data)
//     });
//
// //logs as undefined
// //console.log(data);
// //gets val from onclick function
//   var currentGuess = val;
//   //console.log(val);
//
// };

//create audio when user clicks play button
var counter = 0

$("#startGame").on("click", function() {
  $(this).hide()
  console.log('clicked');
  //post to apiroutes to run spotify stuff
  $.post("http://localhost:8080/spotify", function(data) {

    //console.log(data);
    //var song = data[0];
    $("<audio></audio>").attr({
      'src': data[counter].url + '.mp3',
      'volume': 0.4,
      'autoplay': 'autoplay',
      'class': 'playingMusic'
    }).appendTo("body");

    $("#answer").append(data[counter].title);
  });


});

//next button
$.post("http://localhost:8080/spotify", function(data) {
  console.log("data", data);
  function makeAudio() {
    if (counter >= 4) {
      counter = 0;
    } else {
      counter++
    }
    $("<audio></audio>").attr({
      'src': data[counter].url + '.mp3',
      'volume': 0.4,
      'autoplay': 'autoplay',
      'class': 'playingMusic'
    }).appendTo("body");

    $("#answer").append(data[counter].title);
  }

  $("#next").on("click", function() {
    $("#answer").empty()
    $(".playingMusic").remove();
    makeAudio();
  });

});


//pause button- messy temporary solution
$("#pause").on("click", function() {
  $(this).hide()
  $('#play').show()
  var thissong = $(".playingMusic");
  thissong[0].pause();
});

$("#play").on("click", function() {
  $(this).hide()
  $('#pause').show()
  var thissong = $(".playingMusic");
  thissong[0].play();
});
