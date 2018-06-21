// accordion_v_01.js

(function($) {
  // .accordion
  var accordion = $('.accordion');
  var title = accordion.find('dt');

  var timed = 500;
  var beforeColor ='#067';
  var afterColor = '#047';
  
  title.eq(0).nextAll().show();
  title.eq(0).animate({backgroundColor:beforeColor});

  // dt 클릭시 형제 dd를 보이게 만들기
  title.on('click',function(e) {
    e.preventDefault();
    var mydt = $(this);
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
    mydt.parent().siblings('dl').children('dd').slideUp(timed);
    // 현재 선택하는 dt의 뒤의 dd가 열렸는가?
    var thisNext =  mydt.nextAll().css('display');
    console.log(thisNext);

    if(thisNext === 'block') {
      mydt.nextAll().slideUp(timed);
    } else {
      mydt.nextAll().slideDown(timed);
    }

    title.animate({backgroundColor:afterColor});
    mydt.animate({backgroundColor:beforeColor});
  });
})(jQuery);