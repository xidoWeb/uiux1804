// jquery_event_02.js

(function($) {
  var key = $('.key');
  var keyInput = key.children('input');
  var keySpan = key.find('span');

  keyInput.on('keyup',function(e){
    console.log(e.key, e.keyCode);
    // e.key
    keySpan.text(e.key);
  });


 // 이름()         -> 함수
 // 무언가.이름()  -> 메소드
 // 무언가.이름    -> 프로퍼티
//  ---------------------------------------
// 브라우저 스크롤
var viewTop = $('.view').offset().top; 
var viewLeft = $('.view').offset().left; 

$(window).on('scroll',function(){
  // console.log('스크롤 되고 있어~~~!!');

  // 브라우저에서 스크롤 처리될때 
  // 1. 선택자.scrollTop()   : 스크롤의 위치파악
  // 2. 선택자.offset().top   : 브라우저(document) 상단에서 얼만큼 떨어져 있는가?
  // 3. 선택자.offset().left  : 브라우저(document) 왼쪽에서 얼만큼 떨어져 있는가?

  var st = $(this).scrollTop();
  console.log('스크롤위치: ', st);

  if(st <= viewTop){
    // $('.view').removeClass('fixed');
    $('.view').css({position:'static',top:'auto'});
  }else{
    // $('.view').addClass('fixed');  
    $('.view').css({position:'fixed', top:'0', left:viewLeft});
  }
}); 


$(window).on('resize',function() {
  console.log('화면사이즈가 변했어요~~~~');
  var ww = $(this).width();
  var wh = $(this).height();
  console.log( '가로: ', ww, '세로: ', wh );
});



})(jQuery);