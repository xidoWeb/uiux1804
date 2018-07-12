//  monfee_index_test.js

(function($) {
  // headBox 스크롤처리시 상단 고정
  // -----------------------------------------------
  var headBox = $('.head_box_wrap');
  var beforeTop = headBox.offset().top;

  $(window).on('scroll',function(e) {
    // console.log( $(window).scrollTop() );
    var nowTop = $(window).scrollTop() ;

    if(beforeTop <= nowTop){
      // headBox.css({position:'fixed', top:0, bottom:'auto'});
      headBox.addClass('fixed');
    }else{
      // headBox.removeAttr('style');
      headBox.removeClass('fixed');
    }
  });

  // -------------------------------------------------
  var win = $(window);
  var wh = win.outerHeight();
  var headChild = headBox.children('#headBox');
  var headNav   = headBox.find('ul').children('li');
  var headOl    = headBox.find('ol');
  var olLink    = headOl.find('a');
  var timed     = 500;
  headOl.hide();
   


  headNav.on('mouseenter',function(e) {
    // 스크롤의 위치를 파악    
    var st = win.scrollTop();
    if(wh/2 > st){ 
      headChild.addClass('top');
      headOl.addClass('top');
    }else{
      headChild.removeClass('top');
      headOl.removeClass('top');
    }
    headOl.stop().slideDown(timed);
    headChild.addClass('show');
  });

  headBox.on('mouseleave',function(e) {
    headOl.stop().slideUp(timed);
    headChild.removeClass('show');
  });

  headNav.children('a').on('focus',function(e) {
    // headOl.slideDown(timed);
    // headChild.addClass('show');

    headNav.trigger('mouseenter');
    // trigger라는 기능은 방아쇠 라는 의미로,
    // 미리 만들어진 이벤트기능을 수행하도록 처리
  });

  olLink.eq(-1).on('blur',function(e){
    // headOl.slideUp(timed);
    // headChild.removeClass('show');

    headBox.trigger('mouseleave');
  });



})(jQuery);