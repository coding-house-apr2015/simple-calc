'use strict';

$(document).ready(init);

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
}

function clickNumber(){
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}

function clickDecimal() {
  var display = $('#display').text();
  // debugger;
  if (!(display.indexOf('.') !== -1)) {
    display += '.';
    $('#display').text(display);
  }
}
