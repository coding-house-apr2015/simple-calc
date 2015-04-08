'use strict';

$(document).ready(init);

function init() {
  $('.number').click(clickNumber);
}

function clickNumber() {
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}

/*
$('button').click(function() {
  if($(this).hasClass('number')) {
    displayNumber($(this).text());
  }
  else if($(this).hasClass('operator')) {
    handleOperator($(this).text());
  }
});

$('#decimal').click(function() {
  // decimal handling
});

$('#equal').click(function() {
  // perform operation
});

$('#display').click(function() {
  // clear display
});

function displayNumber(newNumber) {
  var number = $('#display').text();
  number = (number === '0') ? '' : number;
  number = number.concat(newNumber);
  $('#display').text(number);
}

function handleOperator(operator) {
  // handle operator
}
*/
