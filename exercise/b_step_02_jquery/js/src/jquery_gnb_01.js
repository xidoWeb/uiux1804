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
headBox.on('mouseenter',function() {
          $(this).find('ol').stop().slideDown();
          navBg.stop().slideDown();
        })
        .on('mouseleave',function() {
          $(this).find('ol').stop().slideUp();
          navBg.stop().slideUp();
        });

headBox.find('#gnb')
       .children('ul')
       .children('li')
       .children('a').on('focus',function() {
         headBox.find('ol').stop().slideDown();
         navBg.stop().slideDown();
        });

headBox.find('ol').find('li').eq(-1)
       .find('a').on('blur',function() {
         headBox.find('ol').stop().slideUp();
         navBg.stop().slideUp();
       });




})(jQuery);