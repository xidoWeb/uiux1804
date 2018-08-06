// fadeSlide_02.js
(function($) {
  var bWrap     = $('.banner_wrap');
  var banner    = bWrap.children('div');
  var bannerLen = banner.length;
  var btn = $('.btn').children('button');

  var ReZindex = function() {
    banner    = bWrap.children('div');
    var i = 1;
    for(; i <= bannerLen; i+=1){
      var j = i * 10;
      banner.eq(bannerLen-i).css({zIndex:j});
    }
    banner.stop().fadeIn();
  };
  ReZindex();

// 이전/다음 버튼 클릭시 내용보이기처리
  btn.on('click',function(e) {
    e.preventDefault();
    var next = $(this)[0] === $('.next_btn')[0];

    if(next){

    }else{

    }
  });

})(jQuery);