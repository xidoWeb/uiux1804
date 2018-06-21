// slide_banner_02.js

(function($){

  // 좌/우 버튼을 변수화
 var slideBtn = $('.slide_btn');
 var prevBtn  = slideBtn.children('.prev_btn');
 var nextBtn  = slideBtn.children('.next_btn');

 // indicator버튼 변수화
 var indicator = $('.indicator');
 var indiLi    = indicator.children('li');

 // 광고배너영역 변수화
 var slideBanner = $('.banner_wrap');

 // 광고배너 갯수체크하기(-1)
 var bannerLength = slideBanner.children('div').length -1;
 // console.log(bannerLength);

 // 최초의 값 0 
 var i = 0;

  // nextBtn을 클릭시
  nextBtn.on('click',function(e){
    e.preventDefault();
    if(i < bannerLength){  i += 1;  } else {  i = 0; }
    SlideAni(i);
  });

  // prevBtn 클릭시
  prevBtn.on('click',function(e){
    e.preventDefault();
    if(i > 0){  i -= 1;  } else {  i = bannerLength; }
    SlideAni(i);
  });


  // indiLi 클릭
  indiLi.on('click',function(e){
    e.preventDefault();
    i = $(this).index();
    SlideAni(i);
  });


  function SlideAni(i){
    var result = i * -100 + '%';
    slideBanner.animate({marginLeft: result });
      // removeClass, addClass
    indiLi.removeClass('active');
    indiLi.eq(i).addClass('active');
  }


})(jQuery);