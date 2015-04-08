'use strict';

$(document).ready(init);

var displayStr = '0';
var displayNum = 0;

function init(){
  $('.number').click(updateDisplay);
  $('#display').click(clear);
}

// function clear(){
//   //var currentFontSize = $('#display').css('font-size');
//   // if (currentFontSize !== '50px'){
//   //   $('#display').css('font-size', '50px');
//   // }
//   displayStr = '0';
//   displayNum = 0;
//   $('#display').text(displayStr);
// }

function updateDisplay(){
  var btnValue = $(this).text().trim();
  if (btnValue === '.') {
    displayStr += btnValue;
  }
  else if (displayNum === 0){
    displayStr = btnValue;
  }
  else {
    displayStr += btnValue;
  }

  displayNum =  parseFloat(displayStr);
  $('#display').text(displayStr);
}
