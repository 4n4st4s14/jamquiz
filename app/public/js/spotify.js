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
<<<<<<< HEAD
//dynamically play audio onclick
// var audio = $("<audio autoplay>");
// audio.attr("src", "https://p.scdn.co/mp3-preview/87c7273f526b20ef61b13a64b453f5dd5f362ac7?cid=8c539bcca28c4bc5b89dcccdd09be68d.mp3");
// $("#audioPlay").append(audio);
// //console.log(guess);
// console.log('clicked');
=======


});
//next button
var counter = 0;

$.post("http://localhost:8080/spotify", function(data){
 counter= 0;

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
  counter = 0;
} else {
  counter++
}
}


$("#next").on("click", function(e){
e.preventDefault();
console.log('clicked');
>>>>>>> ea60158fe73b571e683dde025acecae4c540ec67

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
