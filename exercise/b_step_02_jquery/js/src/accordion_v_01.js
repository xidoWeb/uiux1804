// accordion_v_01.js

(function($) {
  // .accordion
  var accordion = $('.accordion');
  var title = accordion.find('dt');

  title.eq(0).nextAll().show();
  title.eq(0).animate({backgroundColor:'#047'});

  // dt 클릭시 형제 dd를 보이게 만들기
  title.on('click',function(e) {
    e.preventDefault();
    // step_01
    /*
    $(this).nextAll('dd').addClass('active');
    //  선택의 부모의 다른 dl의 자식 dd
    $(this).parent().siblings('dl').children('dd').removeClass('active');
    */

    // step_02
    /*
     title.removeClass('active');
     $(this).addClass('active');
    */

//  display:none  ->  hide()  fadeOut()  slideUp()
// display:block  -> show()  fadeIn()  slideDown()
    // step_03
    // title.nextAll().hide();
    /*
    $(this).parent().siblings('dl').children('dd').slideUp(500);
    $(this).nextAll().slideDown(500);
    */

    // step_04 열렸을경우 클릭시 다시 사라지게
    $(this).parent().siblings('dl').children('dd').slideUp(500);
    // 현재 선택하는 dt의 뒤의 dd가 열렸는가?
    var thisNext =  $(this).nextAll().css('display');
    console.log(thisNext);

    if(thisNext === 'block') {
      $(this).nextAll().slideUp(500);
    } else {
      $(this).nextAll().slideDown(500);
    }

    title.animate({backgroundColor:'#067'});
    $(this).animate({backgroundColor:'#047'});
  });
})(jQuery);