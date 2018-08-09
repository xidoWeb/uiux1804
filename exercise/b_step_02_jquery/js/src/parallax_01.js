// parallax_01.js
(function($) {
  var bg01 = $('.bg01');
  var bg01heading = bg01.children('h2');

  var bg01H = bg01.innerHeight();
  var nowT=0, per, myP;

  var myScroll = function() {
    per = nowT / bg01H * 100;
    (per >= 100) ? per = 100: per = per;
    myP = 'center' +' '+ per;
    bg01.css({backgroundPosition:myP+'%'});
    bg01heading.stop(true, false).animate({
      transform:'translateY('+ -per*10 +'px)',
      fontSize:per/10+'rem',
      lineHeight:per/5},300);
  };

  myScroll();

  $(window).on('scroll',function() {
    nowT = $(this).scrollTop();
    myScroll();
  });

})(jQuery);