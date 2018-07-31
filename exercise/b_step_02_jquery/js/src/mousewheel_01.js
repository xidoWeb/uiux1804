// mousewheel_01.js
(function($) {
  // 화면로딩시 스크롤위치 처음으로 가도록 처리
  $(window).animate({scrollTop:0},300);
  $('html,body').animate({scrollTop:0},300);

  // 각각의 반복수행하는기능(화면상의 위치해야하는 요소선택)
  var box     = $('.box');
  var boxLen  = box.length;
  var boxList = [];
  var j=0;
 //step_01 일일이 넣기
  // boxList[0] = box.eq(0).offset().top;
  // boxList[1] = box.eq(1).offset().top;
  // boxList[2] = box.eq(2).offset().top;

 //step_02 for문을 이용하기
  // for(var i=0; i < box.length; i+=1){
  //   boxList[i] = box.eq(i).offset().top;
  // }

 //step_03 각각 알아서
 // 반복으로 배치해야하는 기능 반복문으로 등록
   $.each(box,function(index,value) {
     boxList[index] = $(this).offset().top;
   });
   // console.log(boxList); 

 // 마우스 휠기능 처리시 동작(firefox에서는 DOMMouseScroll이벤트로 수행해야함)

  //터치마우스,트랙패드,휠의빠른속더구현으로인해 동작하는 기능을 막기위한 기능 부여
  var go = true; 
  $('html').on('mousewheel DOMMouseScroll', function(e) {
    // {originalEvent:{  wheelDelta:-120   }   }
    //크롬, 사파리, IE등의 휠이벤트 처리값 파악하기
    var evt = e.originalEvent.wheelDelta;
    var delta = evt;
    // console.log(evt);

    // 이벤트처리값의 양수/음수의 판단여부로 동작
    // 단, 반복수행되는 터치마우스의 기능을 한번의 동작으로 처리하기위해 강제로 조건문을 막도록 처리(변수 go기능)
    if(delta < 0 && go){
      go = false;
      (j >= boxLen-1) ? j = boxLen-1 : j+=1;
      console.log('마우스를 내렸습니다.', j);
    }else if(delta > 0 && go){
      go = false;
      (j <= 0) ? j = 0 : j-=1;
      console.log('마우스를 올렸습니다.', j);
    }
    $('html').animate({ scrollTop:boxList[j] },function() {
      go = true;
    });
  });
})(jQuery);