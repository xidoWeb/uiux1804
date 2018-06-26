// jquery_scroll_01
(function($) {

  var topBtn = $('.top_btn');

  //브라우저 스크롤 기능으로 top버튼 나타나게
  $(window).on('scroll',function(e) {
    var thisTop = $(this).scrollTop();
    console.log(thisTop);

    if(thisTop < 500){
      topBtn.stop().fadeOut();
    }else{
      topBtn.stop().fadeIn();
    }
  });

  // top버튼 클릭해서 상단으로 이동
  topBtn.on('click',function(e){
    e.preventDefault();
    // $(window).scrollTop(0);  // 한번에 움직이는 단점이 존재
    $('html, body').animate({scrollTop:0}, 500);
  });


// navigation 영역 클릭시 위치 이동
var headBox = $('#headBox');
var headUl = headBox.children('ul');
var headList = headUl.children('li');

// li를 클릭해서 
headList.on('click',function(e) {
  // li내부 a가 가지는 기본 이벤트(이동) 제거
  e.preventDefault();

// 검증(선택된 요소자식(a)의 속성(href) 값 파악)
  //console.log( $(this).children('a').attr('href') );

// 검증된 속성값을 선택자로 변경
  var thisLink =    $(this).children('a').attr('href');
  // 선택자의 위치가 상단에서 얼만큼 떨어져있는지 파악
  var thisOffset = $(thisLink).offset().top;
  // console.log(thisOffset);

  $('html, body').animate({scrollTop:thisOffset}, 500);
});

})(jQuery);
