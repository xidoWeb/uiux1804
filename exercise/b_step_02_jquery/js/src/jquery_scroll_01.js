// jquery_scroll_01
(function($) {

  var topBtn = $('.top_btn');

  //브라우저 스크롤 기능
  $(window).on('scroll',function(e) {
    var thisTop = $(this).scrollTop();
    console.log(thisTop);

    if(thisTop < 500){
      topBtn.stop().fadeOut();
    }else{
      topBtn.stop().fadeIn();
    }


  });

})(jQuery);