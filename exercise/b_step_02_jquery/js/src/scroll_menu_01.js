// scroll_menu_01.js
(function($) {
  
  var sideMenu  = $('#sideMenu');
  var sideLi    = sideMenu.find('li');
  var scrollBox = $('.scroll_menu');
  
  var timed     = 1000;
  $('html,body').animate({scrollTop:0},timen/10);
  sideLi.eq(0).addClass('select');

  // sideLi클릭시  
  sideLi.on('click',function(e) {
    e.preventDefault();
  // 순서값을 파악해서,
  var i = $(this).index();
  // 해당위치의 값을 파악(offset().top )
  var ot = scrollBox.eq(i).offset().top;
  // 스크롤이 이동
  $('html, body').animate({scrollTop:ot},timed/2);

  // side메뉴 변경
  sideLi.eq(i).addClass('select');
  sideLi.eq(i).siblings(i).removeClass('select');
  });


})(jQuery);