console.log('js');


$(document).ready(start);

var totalClicks = 0;


function start(){
  $('#generateBtn').on('click', addDiv);
  $('#body').on('click','#swapBtn', swapColor);
  $('#body').on('click','#deleteBtn', deleteItem);

}//end start


function addDiv(){

  $('#body').append('<div class="red">');
  $('.red').last().append('<p>'+ totalClicks +'</p>');
  $('.red').last().append('<button id="swapBtn">Swap</button><button id="deleteBtn">Delete</button>');
  totalClicks = totalClicks +=1;

  console.log('total clicks: ' + totalClicks);
}//end addDiv


function swapColor(){
  console.log('swap color works');
  $(this).parent('div').toggleClass("red yellow");


}//end swapColor

function deleteItem() {
  console.log('delete this!');



}//end deleteItem
