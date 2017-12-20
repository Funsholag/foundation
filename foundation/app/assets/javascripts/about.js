// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// var timeout;
// var $cards = $(".card");
// var size = $cards.length - 1;
//
// function highlight(count){
//   timeout = setTimeout(function(){
//     $cards.removeClass("orange");
//     $cards[count].classList.add("orange");
//
//     clearTimeout(timeout);
//     if(size === count){
//        highlight((count - size));
//     }else{
//       highlight(count + 1);
//     }
//
//   }, 1000);
// }


// $cards.off("click").on( "click", function() {
//   clearTimeout(timeout);
// });
//
// highlight(0)

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$('#myModal1').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
