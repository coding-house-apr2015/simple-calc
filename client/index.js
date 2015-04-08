'use strict';

$(document).ready(init);

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(decimalHandler);
}

function clickNumber(){
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}

function decimalHandler() {
  var display = $('#display').text();
  var output = (display.search(/[.]/) < 0) ? display + '.' : display;
  $('#display').text(output);
}
