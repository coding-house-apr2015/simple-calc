'use strict';

$(document).ready(init);

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#display').click(clickDisplay);
}

function clickNumber(){
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}

function clickDecimal(){
  var display = $('#display').text();
  var output = display.indexOf('.') !== -1 ? display : display += '.';
  $('#display').text(output);
}

function clickDisplay() {
  $('#display').text('0');
}
