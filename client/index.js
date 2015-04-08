'use strict';

$(document).ready(go);
function go(){


var number = '';
var newNumber = '';
var display = $('#display');

display.text('0');
$('.number').click(function(){
  number += $(this).text();
  display.text(number);
});

}
