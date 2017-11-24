console.log("linked!");

// $.ajax({url: "/spotify", success: function(result){
//     console.log(result)
// //   }})
// //

//create audio

$("#play").on("click", function(){

//post to apiroutes to run spotify stuff
$.post("http://localhost:8080/spotify", function(data){
  if(data==='done'){
    alert('success');
  }
});
//dynamically play audio onclick
var audio = $("<audio autoplay>");
audio.attr("src", "https://p.scdn.co/mp3-preview/87c7273f526b20ef61b13a64b453f5dd5f362ac7?cid=8c539bcca28c4bc5b89dcccdd09be68d.mp3");
$("#audioPlay").append(audio);
//console.log(guess);
console.log('clicked');

});




    //}// end of spotify function
