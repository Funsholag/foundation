// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$('#myModal1').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

// Remember that you are using bootstrap, so the following might be incorrect
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.materialboxed');
//   var instances = M.Materialbox.init(elems, options);
// });

// Or with jQuery

// Remember that you are using bootstrap, so the following might be incorrect
// $(document).ready(function(){
//   $('.materialboxed').materialbox();
// });
//
// $(document).ready(function(){
//   $('.materialbox').materialbox();
// });
