'use strict';
console.log('apollo -> online');
$(document).ready(init);

function init(){
  $('.number').click(function(){
    $('#display').append($(this).text());
  });

}
