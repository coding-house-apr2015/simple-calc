'use strict';

$(document).ready(init);

var displayNum;
var operatorStr;

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#display').click(clickDisplay);
  $('.operator').click(clickOperator);
  $('#equal').click(clickEqual);
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

function clickOperator() {
  operatorStr = $(this).text();
  displayNum = $('#display').text();
  clickDisplay();
  // debugger;
}

function clickEqual() {
  var answer;
  var currentNum = $('#display').text();

  switch (operatorStr) {
    case '+':
      answer = parseFloat(displayNum) + parseFloat(currentNum);
      $('#display').text(answer);
  }
}
