// jquery_slide_test_03-2.js
(function($) {
  //  변수선언
  var topBtn  = $('.top_btn');
  var headBox = $('#headBox');
/* 
  크기값을 가져오는 메소드
    기본 높이값 파악           ->  선택자.height();
    padding값포함한 높이값     ->  선택자.innerHeight();
    border값을 포함한 높이값   ->  선택자.outerHeight();
    margin값을 포함한 높이값   ->  선택자.outerHeight(true);

   기본 가로값 파악            -> 선택자.width();
   padding값포함한 가로값      -> 선택자.innerWidth();
   border값을 포함한 가로값    -> 선택자.outerWidth();
   margin값을 포함한 가로값    -> 선택자.outerWidth(true);
*/


  // step1 화면스크롤(300px 이상 움직였을경우 ) top버튼이 나타나게 
  $(window).on('scroll', function(){
    var winTop = $(window).scrollTop();
    // console.log(winTop);
    // 300이상인지 파악
    // 삼항연산자 ->     (조건) ? 참인경우실행 : 거짓인경우에 실행;
    // (winTop > 300) ? topBtn.show() : topBtn.hide(); 
    if(winTop > 300){ topBtn.show(); }else{ topBtn.hide(); }
  });

  // headBox 떨어진 양계산
  var headOffset = headBox.offset().top;

  // step2 화면 스크롤시 header 상단에 고정
  $(window).on('scroll',function() {
    var winTop = $(window).scrollTop();
    if(winTop > headOffset){ headBox.addClass('fixed'); }else{ headBox.removeClass('fixed'); }
  });



})(jQuery);