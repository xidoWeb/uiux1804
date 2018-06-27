// jquery_slidetest_02.js
(function($) {
  var slide     = $('.slide_banner');
  // step1
  // indicator 기능으로 슬라이딩 처리하기

  var indicator = slide.children('.indicator');
  var indiLi    = indicator.children('li');
  var product   = $('.product');
  var productLi   = product.children('li');
  var timed     = 500;

  //  tabIndex의 경우 1차 처리
  var TabIndex = function(tabi){
    productLi.eq(tabi).children('a').attr({tabIndex:0});
    productLi.eq(tabi).siblings('li').children('a').attr({tabIndex:-1});
  };
  TabIndex(0);


// indicator 클릭
  indiLi.on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    
    // banner 이동
    var thisI = _this.index();
    var i     = thisI * -100 + '%';

    product.stop().animate({marginLeft:i}, timed);

    // indicator 처리
    _this.siblings('li').removeClass('active');
    _this.addClass('active');

    TabIndex(thisI);
  });

})(jQuery);