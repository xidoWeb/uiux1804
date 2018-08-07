// fadeSlide_02.js
(function($) {
  var bWrap     = $('.banner_wrap');
  var banner    = bWrap.children('div');
  var bannerLen = banner.length-1;
  var btn = $('.btn').children('button');
  var indi = $('.indicator');
  var indiLi = indi.find('li');
  var j=0;

  var ReZindex = function() {
    var i = 0;
    for(; i <= bannerLen; i+=1){
      var j = i * 10 + 10;
      banner.eq(bannerLen-i).css({zIndex:j});
    }
  };
  ReZindex();
   
  var IndiActive = function(j) {
    indiLi.eq(j).addClass('active');
    indiLi.eq(j).siblings('li').removeClass('active');
    banner.eq(j).fadeIn();
    banner.eq(j).nextAll().fadeIn();
    banner.eq(j).prevAll().fadeOut();
  };
  IndiActive(j);
 
// indiLi클릭시 fade배너 위치가 나타나거나 사라지게
indiLi.on('click',function(e) {
  e.preventDefault();
  j = $(this).index();
  IndiActive(j);
});


 
// 이전/다음 버튼 클릭시 내용보이기처리
  btn.on('click',function(e) {
    e.preventDefault();
    var next = $(this)[0] === $('.next_btn')[0];
    if(next){  
      ( j >= bannerLen ) ? j = 0 :  j+=1;   
    }else{
      (j <= 0) ?  j=bannerLen : j-=1;
    }
    IndiActive(j);
  });


})(jQuery);