'use strict';
console.log('apollo -> online');

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
