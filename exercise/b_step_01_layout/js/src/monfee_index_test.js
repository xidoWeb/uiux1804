//  monfee_index_test.js

(function($) {
  // headBox 스크롤처리시 상단 고정
  var headBox = $('.head_box_wrap');
  var beforeTop = headBox.offset().top;

  $(window).on('scroll',function(e) {
    console.log( $(window).scrollTop() );
    var nowTop = $(window).scrollTop() ;

    if(beforeTop <= nowTop){
      // headBox.css({position:'fixed', top:0, bottom:'auto'});
      headBox.addClass('fixed');
    }else{
      // headBox.removeAttr('style');
      headBox.removeClass('fixed');
    }
  });

})(jQuery);