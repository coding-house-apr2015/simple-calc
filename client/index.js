'use strict';

$(document).ready(init);

function init(){
  $('.number').click(clickNumber);
}

function clickNumber(){
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}
