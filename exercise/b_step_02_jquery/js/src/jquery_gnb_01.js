// jquery_gnb_01.js
(function($) {

// #headBox영역에 마우스 올라가면 gnb하위 메뉴가 나타나게 만들기
// 1. addClass/removeClass

var headBox = $('#headBox');

// headBox
//       .on('mouseenter',function(){ $(this).addClass('view'); })
//       .on('mouseleave',function(){ $(this).removeClass('view'); });

// 2. slideUp/slideDown을 이용
headBox.find('ol').hide();
headBox.on('mouseenter',function() {
          $(this).find('ol').slideDown();
        })
        .on('mouseleave',function() {
          $(this).find('ol').slideUp();
        });

headBox.find('#gnb')
       .children('ul')
       .children('li')
       .children('a').on('focus',function() {
         headBox.find('ol').slideDown();
        });

headBox.find('a').on('blur',function() {
          headBox.find('ol').slideUp();
        });


})(jQuery);