// fadeSlide_01.js
(function($) {

  var bWrap     = $('.banner_wrap');
  var banner    = bWrap.children('div');
  var bannerLen = banner.length;
  var btn = $('.btn').children('button');

  // 순서의 배치를 조정하자!
  // 뒤에오는 요소가 뒤로배치
  // 버튼을 클릭할때마다 반복해서 z-index값을 재할당 처리
  // 자주 사용하는 기능이므로, 함수처리하자!
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

  // 오른쪽 버튼을 클릭시 바로뒤의 내용이 나타나게 만들기
  // 사라진 배너영역은 맨뒤로 배치


  btn.on('click',function(e) {
    e.preventDefault();
    var next = $(this)[0] === $('.next_btn')[0];

    if(next){
      banner.eq(0).stop().fadeOut(function(){
        $(this).appendTo(bWrap);
        ReZindex();
      });
    }else{
      banner.eq(-1).stop().fadeOut(function(){
        $(this).prependTo(bWrap);
        ReZindex();
      });
    }
  });
})(jQuery);