'use strict';

$(document).ready(init);

function init() {
  $('.number').click(numClicked);
}

function numClicked() {
  var newNum = $(this).text();
  $('#display').text(newNum);
}
