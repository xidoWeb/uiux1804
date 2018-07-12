// monfee_index_test_adBox_slide.js
(function($) {
  var adBox = $('#adBox');
  var indi = adBox.find('.indicator');
  var indiLi = indi.children('li');
  var indiLiLength = indiLi.length;
  var slideBtn = adBox.find('.slide_btn');
  var prev = slideBtn.children('.prev_btn')[0];
  var next = slideBtn.children('.next_btn')[0];
  var banner = $('.slide_banner').children('ul');
  var i = 0; 
  var Que = function(a){
    indiLi.eq(a).addClass('select');
    indiLi.eq(a).siblings(indiLi).removeClass('select');
    var per = a * -100 + '%';
    banner.stop().animate({marginLeft:per});
  };
  Que(i);

  // indicator
  indiLi.on('click',function(e) { e.preventDefault();
    i = $(this).index();
    Que(i);
  });

  slideBtn.find('button').on('click',function(e) { e.preventDefault();
    var j = $(this)[0];
    if(j === prev && i > 0){ i-=1; } else if(j === next && i < indiLiLength - 1){ i+=1; }
    Que(i);
  });

  indiLi.find('a').on('focus',function(e) {
    $(window).scrollTop(0);
  });
  slideBtn.find('button').on('focus',function() {
    $(window).scrollTop(0);
  });

})(jQuery);