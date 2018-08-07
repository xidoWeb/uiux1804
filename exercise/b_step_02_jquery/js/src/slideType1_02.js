// slideType1_02.js
(function($) {
  var bannerWrap = $('.banner_wrap');
  var banner = bannerWrap.children('div');
  // 가로값+마진값계산
  var divWidth = banner.outerWidth(true);
  var l = divWidth;

  console.log(divWidth);
  // 계산된값 이동
  bannerWrap.css({marginLeft:-divWidth});
  // 마지막요소 앞으로 배치
  banner.eq(-1).prependTo(bannerWrap);
  // 순서 재할당
  banner = bannerWrap.children('div');

  banner.eq(3).addClass('active');

  var nbtn = $('.nbtn');
  nbtn.on('click',function(e) {
    e.preventDefault();
     banner.eq(3).removeClass('active');
    bannerWrap.animate({marginLeft:-(l+divWidth)},function(){
      banner.eq(0).appendTo(bannerWrap);
      bannerWrap.css({marginLeft:-divWidth});
      banner = bannerWrap.children('div');
      banner.eq(3).addClass('active');
    });
  });

  var pbtn = $('.pbtn');
  pbtn.on('click',function(e) {
    e.preventDefault();
    banner.eq(3).removeClass('active');
    bannerWrap.animate({marginLeft:0},function(){
      banner.eq(-1).prependTo(bannerWrap);
      bannerWrap.css({marginLeft:-divWidth});
      banner = bannerWrap.children('div');
      banner.eq(3).addClass('active');
    });
  });


})(jQuery);

/*
var a = 10;
a에 10더 더하려면?

a = a + 10;  => a= 10+10 => 20
a += a;   => a = 20 + 20 => 40
a+=a;     => a = 40 + 40 => 80




*/