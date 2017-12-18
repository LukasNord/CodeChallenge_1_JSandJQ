console.log('js');


$(document).ready(start);

var totalClicks = 0;


function start(){
  $('#generateBtn').on('click', addDiv);


}//end start


function addDiv(){

  $('#body').append('<div class="generateRed">');
  $('.generateRed').last().append('<p>'+ totalClicks +'</p>');
  $('#body').last('div').append('<button id="swapBtn">Swap</button><button id="deleteBtn">Delete</button>');
  totalClicks = totalClicks +=1;

  console.log('total clicks: ' + totalClicks);
}//end addDiv
