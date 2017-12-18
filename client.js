console.log('js');


$(document).ready(start);

var totalClicks = 0;


function start(){
  $('#generateBtn').on('click', addDiv);


}//end start


function addDiv(){

  $('#body').append('<div>');
  $('#body').last('div').append('<p>'+ totalClicks +'</p>');
  totalClicks = totalClicks +=1;

  console.log('total clicks: ' + totalClicks);
}//end addDiv


function updateClicks(){
  $('#body')



}
