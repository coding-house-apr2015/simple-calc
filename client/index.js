'use strict';

$(document).ready(init);

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#display').click(clear);
  $('.operator').click(clickOperator);

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

function clear(){
  $('#display').text('0');
}

var number1;
function clickOperator(){
  var op = $(this).text();
  number1 = $('#display').text() * 1;
  // clickEqual();
  $('#display').text('0');
}
