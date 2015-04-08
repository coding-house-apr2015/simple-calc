'use strict';

$(document).ready(init);

function init() {
  $('.number').click(numClicked);
}

function numClicked() {
  var newNum = $(this).text();
  var oldNum = $('#display').text();
  if (oldNum==='0') {
    $('#display').text(newNum);
  } else {
    $('#display').text(oldNum+newNum);
  }
}
