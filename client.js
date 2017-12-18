console.log('js');


$(document).ready(start);

function start(){
  $('#generateBtn').on('click', addDiv);


}//end start


function addDiv(){
  console.log('clicked generate');
  $('#body').append('<div>');


}//end addDiv
