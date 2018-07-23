//  gallery_modal_02.js
(function($) {
  var mdBox = $('.modal_box');
  var mdBg  = $('.modal_bg');
  var list  = $('.list').children('li');
  mdBox.hide();
  mdBg.hide();

  var addr   = "../img/gallery/";
  var useImg = [
    {thum:'j01.jpg', big:'j01_big.jpg'},
    {thum:'j02.jpg', big:'j02_big.jpg'},
    {thum:'j03.jpg', big:'j03_big.jpg'},
    {thum:'j04.jpg', big:'j04_big.jpg'},
    {thum:'j05.jpg', big:'j05_big.jpg'},
    {thum:'j06.jpg', big:'j06_big.jpg'},
    {thum:'j07.jpg', big:'j07_big.jpg'},
    {thum:'j08.jpg', big:'j08_big.jpg'},
    {thum:'j09.jpg', big:'j09_big.jpg'},
    {thum:'j10.jpg', big:'j10_big.jpg'}
  ];


 // 일정한 순서가 있는 값의 경우는 반복문으로 처리할 수 있다.
 // for(var t=1; t<=10; t+=1){
 //   useImg[t].thum = 'j'+t+'.jpg';  
 //   useImg[t].big  = 'j'+t+'_big.jpg'; 
 //  }

 for(var i=0; i<list.length; i+=1){
  list.eq(i).children('a').css({backgroundImage:'url(' +  addr + useImg[i].thum + ')'});
 }

var close;

list.on('click', ['a'], function(e) {
  e.preventDefault();
  var thisI = $(this).index();
  mdBox.css({backgroundImage:'url('+ addr + useImg[thisI].big +')'});
  mdBox.prepend('<div class="close"><button type="button">닫기</button></div>');

  $('.close').css({position:'absolute', top:0, right:0,padding:'1rem', backgroundColor:'#fff'});

  mdBox.fadeIn();
  mdBg.fadeIn();

  close = $('.close'); 
});

mdBg.on('click',function() { 
  mdBox.fadeOut( function(){
    $(this).children('.close').remove();
  });
  mdBg.fadeOut();
}); 

close.on('click',function() { 
  mdBox.fadeOut( function(){  $(this).children('.close').remove(); });
  mdBg.fadeOut();
}); 


})(jQuery);