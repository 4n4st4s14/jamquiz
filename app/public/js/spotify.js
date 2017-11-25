console.log("linked!");

// $.ajax({url: "/spotify", success: function(result){
//     console.log(result)
// //   }})
// //

// Code for front-end JavaScript to "post" user entry for the song guess from our form and send it to the express server.
//When user submits info, jQuery will grab the song input field and send a post request to our API.
//gues button logic
  $(".submit").on("click", function(event)
  {
  event.preventDefault();

  //take userGuess form element input
  var guess = $('#song-guess').val().trim();
  //console.log(guess);
  $.post("http://localhost:8080/game", { guess : guess}, function(data){
    if(data==='done'){
      alert('success');
    }
  });


  //    // Create the HTML Well (Section) and Add the table content for each reserved table
      var oldGuessSpot = $("<div>");
      oldGuessSpot.text(guess);
      //tableSection.attr("id", "tableWell-" + i + 1);
     $("#guesses").append(oldGuessSpot);

    //clear form
    $("#song-guess").val("");

    matchFunc(guess);

});


//match callback function
function matchFunc(val){

  var currentGuess = val;
  console.log(val);
}

//create audio

$("#play").on("click", function(e){
e.preventDefault();
console.log('clicked');
//post to apiroutes to run spotify stuff
$.post("http://localhost:8080/spotify", function(data){

    console.log(data);
    var song = data[0];
    $("<audio></audio>").attr({
    'src': song +'.mp3',
    'volume':0.4,
    'autoplay':'autoplay'
}).appendTo("body");

});


});
//next button
var counter = 1;

$.post("http://localhost:8080/spotify", function(data){


function makeAudio(){
  console.log(data);
  var song = data[counter];
  $("<audio></audio>").attr({
  'src': song +'.mp3',
  'volume':0.4,
  'autoplay':'autoplay'
}).appendTo("body");

//counter++;
if(counter > 10){
  counter = 1;
} else {
  counter++
}
}


$("#next").on("click", function(e){
e.preventDefault();
console.log('clicked');

makeAudio();

});

});


//pause button
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
