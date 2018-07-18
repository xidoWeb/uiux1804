// rwd_gnb_01.js
(function($) {
  var winW = $(window).outerWidth();

  if(winW < 1366){
    var gnbBtn = $('.gnb_btn');
    var gnb = $('#gnb');
    gnbBtn.on('click',function(e) {
    gnb.stop().slideToggle();
    });
  }



  //  --------------------
  // var winW = $(window).outerWidth();

  $(window).on('resize',function(e) {
    var nowW = $(window).outerWidth();
    if(winW !== nowW){
      location.reload();
    }
  });



})(jQuery);