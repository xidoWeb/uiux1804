// slideType1_01.js
(function($) {
  var bannerWrap = $('.banner_wrap');
  var banner = bannerWrap.children('div');

  banner.eq(-1).prependTo(bannerWrap);
  banner = bannerWrap.children('div');
  bannerWrap.css({marginLeft:-100+'%'});

  var pbtn = $('.pbtn');
  var nbtn = $('.nbtn');
  var timed = 600;
  var easing = 'easeInBounce';

  pbtn.on('click',function(e) {
    e.preventDefault();
    bannerWrap.stop().animate({marginLeft:0}, timed, function(){
      banner.eq(-1).prependTo(bannerWrap);
      bannerWrap.css({marginLeft:-100+'%'});
      banner = bannerWrap.children('div');
    });
  });

  nbtn.on('click',function(e) {
    e.preventDefault();
    bannerWrap.stop().animate({marginLeft:-200+'%'}, timed, function(){
      banner.eq(0).appendTo(bannerWrap);
      bannerWrap.css({marginLeft:-100+'%'});
      banner = bannerWrap.children('div');
    });
  });

  setInterval(function(){
    nbtn.trigger('click');
  },2000);



})(jQuery);