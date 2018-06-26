// jquery_scroll_01
(function($) {

  var topBtn = $('.top_btn');

  //브라우저 스크롤 기능으로 top버튼 나타나게
  $(window).on('scroll',function(e) {
    var thisTop = $(this).scrollTop();
    console.log(thisTop);

    if(thisTop < 500){
      topBtn.stop().fadeOut();
    }else{
      topBtn.stop().fadeIn();
    }
  });

  // top버튼 클릭해서 상단으로 이동
  topBtn.on('click',function(e){
    e.preventDefault();
    // $(window).scrollTop(0);  // 한번에 움직이는 단점이 존재
    $('html, body').animate({scrollTop:0}, 500, 'easeInBounce');
  });




})(jQuery);



