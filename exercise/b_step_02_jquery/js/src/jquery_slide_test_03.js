// jquery_slide_test_03.js
(function($) {
  // 변수로 설정: 선택자, 시간, 기본 indicator 설정숫자
  // indicator
  var indicator = $('.indicator');
  var indiLi    = indicator.children('li');

  // slide button
  var slideBtn  = $('.slide_btn');
  var prevBtn   = slideBtn.children('.prev_btn')[0];
  var nextBtn   = slideBtn.children('.next_btn')[0];

  // banner
  var bannerWrap = $('.banner_wrap');
  var bannerLength = bannerWrap.children('div').length - 1;

  // time, index설정
  var timed     = 500; 
  var easing    = 'easeInOutBack';
  var num       = 0;

  // step3를 끌러올려서 처리
  var CommonFn = function (n){ 
    var move = n * -100 + '%';                          
    bannerWrap.animate({marginLeft:move}, timed, easing); 
    indiLi.eq(n).addClass('select');                    
    indiLi.eq(n).siblings('li').removeClass('select');  
  };

  // ================================================
  // spep1: indicator클릭시 배너 이동하게
  indiLi.on('click',function(e) {
    e.preventDefault();
  //  그것의 설정과 순서파악
    var it = $(this);
    num = it.index(); 

  /* // step3에 의해 정리
    // 선택한 그것에 class이름을 부여, 외에는 해제
    indiLi.eq(num).addClass('select');                                 // 하나로 합치기!
    indiLi.eq(num).siblings().removeClass('select');                   // 하나로 합치기!

    // 그것의 순서를 기억해서 해당 순서에 맞는 배너를 위치하게 
    var move = num * -100 + '%';                           // 하나로 합치기!
    bannerWrap.animate({marginLeft:move}, timed, easing);  // 하나로 합치기!
  */
    CommonFn(num);
  });

  // step2: slide_button 클릭하면 배너가 이동되게
  slideBtn.children('button').on('click',function(e) {
    // 1. 선택한 그것의 좌우 버튼 비교
    // 2. 각각의 버튼 클릭시 1씩 증감
    // 3. 증감의 범위를 제한
    // 4. indicator 연동

    var it = $(this)[0];
    if(it === prevBtn && num > 0){
      num -= 1;
      console.log('이전보기 버튼 클릭했어요');
    }else if(it === nextBtn && num < bannerLength){
      num += 1;
      console.log('다음보기 버튼 클릭했어요');
    }else{
      alert('그만눌러!!!');
    }
 /*  // step3에의해 변경
    var move = num * -100 + '%';                            // 하나로 합치기!
    bannerWrap.animate({marginLeft:move}, timed, easing);   // 하나로 합치기!

    // indiLi 의 순번에 맞는 곳에 class를 부여
    indiLi.eq(num).addClass('select');                      // 하나로 합치기!
    indiLi.eq(num).siblings('li').removeClass('select');    // 하나로 합치기!
*/
  CommonFn(num);
  });
  
//  ----------------------------------------------------------
  // step3 공통영역을 별도의 함수처리하여 동작하게 만들기
  
  // function CommonFn(n){ 
  //   var move = n * -100 + '%';                          
  //   bannerWrap.animate({marginLeft:move}, timed, easing); 
  //   indiLi.eq(n).addClass('select');                    
  //   indiLi.eq(n).siblings('li').removeClass('select');  
  // }
  // 단, 함수는 변수로생성(함수표현식)하여 처리할것을 권장
  // var CommonFn = function(){ };  형태로 사용하여 상단으로 옮김..


})(jQuery);