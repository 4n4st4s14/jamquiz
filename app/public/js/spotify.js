console.log("linked!");

// $.ajax({url: "/spotify", success: function(result){
//     console.log(result)
// //   }})
// //

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
