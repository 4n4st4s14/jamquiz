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

});

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

});


});




    //}// end of spotify function
