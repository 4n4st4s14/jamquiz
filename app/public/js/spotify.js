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
    //alert('success');
    var thissong = $('audio');
         if (thissong.paused)
             thissong.get(0).play();
         else
             thissong.get(0).pause();

});


});
//next button




$.post("http://localhost:8080/spotify", function(data){
var counter=0;

function makeAudio(){
  console.log(data);
  var song = data[counter];
  $("<audio></audio>").attr({
  'src': song +'.mp3',
  'volume':0.4,
  'autoplay':'autoplay'
}).appendTo("body");

counter++;
}


$("#next").on("click", function(e){
e.preventDefault();
console.log('clicked');

makeAudio();

var thissong = $('audio');
         if (thissong.paused)
             thissong.get(0).play();
         else
             thissong.get(0).pause();
});

});


//start orig
 // $("#next").on("click", function(e){
 // e.preventDefault();
 // console.log('clicked');
 //
 // makeAudio();
//post to apiroutes to run spotify stuff
// $.post("http://localhost:8080/spotify", function(data){
//
// for(var i=1; i< data.length; i++)
//
// {
//     console.log(data);
//     var song = data[i];
//     $("<audio></audio>").attr({
//     'src': song +'.mp3',
//     'volume':0.4,
//     'autoplay':'autoplay'
// }).appendTo("body");
//     //alert('success');
//     var thissong = $('audio');
//          if (thissong.paused)
//              thissong.get(0).play();
//          else
//              thissong.get(0).pause();
//
// }
// });



//});
//end orig
//playpause function
// function playPause(){
//   // This next line will get the audio element
//         // that is adjacent to the link that was clicked.
//         var song = $(this).next('audio').get(0);
//         if (song.paused){
//           song.play();
//         }else{
//           song.pause();
//         }
// };
