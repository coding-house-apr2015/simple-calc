'use strict';
console.log('apollo -> online');

$(document).ready(init);

function init(){
  $('.number').click(function(){
    display($(this).text());
  });
}

function display(newText){
  var current = $('#display').text();
  switch (current){
    case '0':
      $('#display').text(newText);
      break;
    case '.':
      $('#display').text(current + newText);
      break;
    default:
      $('#display').text(current + newText);
  }
}
