'use strict';

$(document).ready(init);

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#display').click(clear);
  $('.operator').click(op);
  $('#equal').click(calc);
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

var number;
var operator;

function op(){
  number = $('#display').text();
  operator = $(this).text();
  $('#display').text('0');
}

function calc(){
  var result;
  switch(operator) {
    case '+':
      result = (parseFloat((number * 1) + ($('#display').text() * 1))).toString();
      break;
    case '-':
      result = (parseFloat((number * 1) - ($('#display').text() * 1))).toString();
      break;
    case '×':
      result = (parseFloat((number * 1) * ($('#display').text() * 1))).toString();
      break;
    case '÷':
      result = (parseFloat((number * 1) / ($('#display').text() * 1))).toString();
  }
  $('#display').text(result);
}
