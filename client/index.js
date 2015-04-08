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
  console.log('decimal');
});

$('#equal').click(function() {
  console.log('equal');
});

function displayNumber(newNumber) {
  var number = $('#display').text();
  number = (number === '0') ? '' : number;
  number = number.concat(newNumber);
  $('#display').text(number);
}

function handleOperator(operator) {

}
