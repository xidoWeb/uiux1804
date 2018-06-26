// jquery_slide_test_01.js
(function($) {
  $('.product').wrap('<div class="product_wrap"></div>');
  $('.product_wrap').css({width:'100%', height:'100%', overflow:'hidden'});

  var product = $('.product');
  var thisIndex = 0;

  // 접근성 고려1
  // product영역에서 일부 키보드 탭이 반응하지 않도록 처리!
  product.find('a').attr({tabIndex:-1});
  product.children('li').eq(thisIndex).children('a').attr({tabIndex:0});

  // indicator클릭시 해당 버튼 색칠
  var indi = $('.indicator').children('li');
  indi.on('click',function(e) {
    e.preventDefault();

    var _this = $(this);
    _this.addClass('active');
    _this.siblings('li').removeClass('active');

    thisIndex = _this.index();
    var i = thisIndex * -100 + '%';
    product.stop().animate({marginLeft:i});

    product.find('a').attr({tabIndex:-1});
    product.children('li').eq(thisIndex).children('a').attr({tabIndex:0});
  });

})(jQuery);