'use strict';

$(document).ready(init);

var memory = 0;
var operation = '';

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#display').click(clear);
  $('.operator').click(clickOperator);
  $('#equal').click(calculate);
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

function clickOperator(){
  memory = parseFloat($('#display').text());
  operation = $(this).text();
  $('#display').text('0');
}

function calculate(){
  var display = $('#display').text();
  // debugger;
  switch (operation){
    case '': break;
    case '+': memory += parseFloat(display); $('#display').text(memory); break;
    case '-': memory -= parseFloat(display); $('#display').text(memory); break;
    case '×': memory *= parseFloat(display); $('#display').text(memory); break;
    case '÷': memory /= parseFloat(display); $('#display').text(memory); break;
  }
  operation = '';
}
