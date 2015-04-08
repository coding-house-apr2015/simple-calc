'use strict';

$(document).ready(init);

var x;
var operator;

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#display').click(clear);
  $('.operator').click(storeData);
  $('#equal').click(crunchNumbers);
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

function storeData(){
  operator = $(this).text();
  x = parseFloat($('#display').text());
  clear();
}

function crunchNumbers(){
  var y = parseFloat($('#display').text());
  var result;
  switch (operator){
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '×':
      result = x * y;
      break;
    case '÷':
      result = x / y;
  }
  $('#display').text(result);
}
