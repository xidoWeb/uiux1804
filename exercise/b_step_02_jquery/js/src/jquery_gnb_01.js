// jquery_gnb_01.js
(function($) {

// #headBox영역에 마우스 올라가면 gnb하위 메뉴가 나타나게 만들기
// 1. addClass/removeClass

var headBox = $('#headBox');

// headBox
//       .on('mouseenter',function(){ $(this).addClass('view'); })
//       .on('mouseleave',function(){ $(this).removeClass('view'); });

// 3. 배경영역 생성
var nav = $('#gnb');
nav.after('<div class="nav_bg"></div>');
var navBg = $('.nav_bg');
navBg.css({marginLeft:'-15px', position:'absolute', top:'6.25rem', width: 'inherit', height:'15rem',
          backgroundColor: 'rgba(0,255,100,0.5)', display:'none'});

// 2. slideUp/slideDown을 이용
headBox.find('ol').hide();

  var SlideShow = function(){
     headBox.find('ol').stop().slideDown();
     navBg.stop().slideDown();
  };

  var SlideHide = function(){
     headBox.find('ol').stop().slideUp();
     navBg.stop().slideUp();
  };

  headBox.on('mouseenter',function() { SlideShow(); })
         .on('mouseleave',function() { slideHide(); });

  var gnb = $('#gnb');
  var gnbUlA = gnb.children('ul').children('li').children('a');
  var gnbOlLastA = gnb.find('ol').find('li').eq(-1).find('a');

  gnbUl.on('focus',function() { SlideShow(); });
  gnbOlLastA.on('blur',function() { SlideHide(); });
  
})(jQuery);