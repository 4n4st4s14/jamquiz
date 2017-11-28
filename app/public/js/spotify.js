
$("body").prepend('<audio id="winAudio"  src = "./audio/win.m4a" audio/>');
$("body").prepend('<audio id="loseAudio"  src = "./audio/loserChorusClip.mp3" audio/>');

console.log("linked!");

// Code for front-end JavaScript to "post" user entry for the song guess from our form and send it to the express server.
//When user submits info, jQuery will grab the song input field and send a post request to our API.
//gues button logic

//when user clicks submit
$(".submit").on("click", function(event) {
  event.preventDefault();

  //take userGuess form element input
  var guess = $('#song-guess').val().trim();
  //console.log(guess);
  //console.log($('#answer').text());

//posts the guess to the back end
  $.post("http://localhost:8080/game", {
    guess: guess
  }, function(data) {
    if (data === 'done') {
      alert('success');
    }
  });

  // Create the HTML divs and add the guess
     // Use existing guess fields to float down existing guesses
     // they clear from a different location (currently play button onclick)
     var guess1 = $("#guess1").text();
     var guess2 = $("#guess2").text();


     $("#guess1").text(guess);
     $("#guess2").text(guess1);
     $("#guess3").text(guess2);

  //clear form
  $("#song-guess").val("");

});

//variables for timer

var correct = 0;
var incorrect = 0;
var gameTimer;
var solutionTimer;
var time = 30;
var userPoints;
var total = 0;

//timer function
function countDown() {
//decrements time
  time--;
//displays time in html
  $("#timer").text(time);
  //if timer runs out with no correct guess, show message with answer
  if (time === 0) {
    $("#messageBoard").text("You lose. The correct answer was " + $("#answer").text());


      $("#loseAudio").get(0).play();


    //reset timer
    clearInterval(gameTimer);
    //incorrect++;


//if the user's guess is equal to the answer, and is not empty
  } else if ($('#song-guess').val().trim().toLowerCase() == $("#answer").text().toLowerCase() && $('#song-guess').val().trim() !== "") {



      $("#winAudio").get(0).play();

  //}


      console.log("match!", time)
      //log the time * ten to get points earned
      userPoints = time * 10;
      //add this value to the current value in the div

        total += parseInt(userPoints);

//PROBLEM: we need this value to add to itself after each round
  $("#pointsPossible").text(total);
      //if they match, pause the audio
      //reset the timer
      //reset time to 0
      //time = 31;
      //time = 31;
    //  $('#song-guess').html("");

       time = 0;

      clearInterval(gameTimer);
      $(".playingMusic")[0].pause();

  }

}
//counter to increment index location (for play and next button)
var counter = 0

//when user clicks play, hide the button
$("#startGame").on("click", function() {
  $(this).hide()
  console.log('clicked');


  //post to apiroutes to run spotify stuff
  $.post("http://localhost:8080/spotify", function(data) {

    //console.log(data);
    //var song = data[0];

    //create audio element from res.json and append to body
    $("<audio></audio>").attr({
      'src': data[counter].url + '.mp3',
      'volume': 0.4,
      'autoplay': 'autoplay',
      'class': 'playingMusic'
    }).appendTo("body");

    //create correct answer from res.json (hidden)
    $("#answer").text(data[counter].title);


    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${data[counter].title}&api_key=dc6zaTOxFJmzC&limit=3`;


  $.ajax({
      url: queryURL,
      method: "GET"
    }).done(data => {

      let img = data.data["0"].images.fixed_height.url
      $('.jumbotron').empty()
      $('.jumbotron').append(`
      <img src="${img}" alt="">
      `)


    });


     gameTimer = setInterval(function() {countDown()}, 1000);
  });

  // // begin the countdown timer function
			//gameTimer = setInterval(function() {countDown()}, 1000);
// to clear the three guessing fields when next song plays
$("#guess1").empty();
$("#guess2").empty();
$("#guess3").empty();

});

//next button
$.post("http://localhost:8080/spotify", function(data) {
  console.log("data", data);

//function to make audio at incrementing index locations
  function makeAudio() {

    //counter set to length of array of songs, increments with each click of
    //'next' button
    if (counter >= 4) {
      counter = 0;
    } else {
      counter++
    }

    //creates audio, incrementing the index within the res.json by using the
    //counter variable every time the user clicks 'next'
    $("<audio></audio>").attr({
      'src': data[counter].url + '.mp3',
      'volume': 0.4,
      'autoplay': 'autoplay',
      'class': 'playingMusic'
    }).appendTo("body");

    //sends correct title to front end to be compared to user guess
    $("#answer").append(data[counter].title);


    var queryURL = `https://api.giphy.com/v1/gifs/search?q=${data[counter].title}&api_key=dc6zaTOxFJmzC&limit=3`;


      $.ajax({
          url: queryURL,
          method: "GET"
        }).done(data => {

          let img = data.data["0"].images.fixed_height.url
          $('.jumbotron').empty()
          $('.jumbotron').append(`
          <img src="${img}" alt="">
          `)
        })


  }

//next button function
  $("#next").on("click", function() {


//clear mloser messageBoard
$("#messageBoard").empty();

//clear user guesses and current audio
    $("#answer").empty()
    $('#guess1').empty()
    $('#guess2').empty()
    $('#guess3').empty()
    $(".playingMusic").remove();

    //reset time to 30
    time = 30;

    //start game timer
    gameTimer = setInterval(function() {countDown()}, 1000);

    //call function to generate audio
    makeAudio();

  });

});


//pause / play button toggle
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
