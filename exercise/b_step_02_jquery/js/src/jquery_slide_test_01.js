// jquery_slide_test_01.js
(function($) {
  $('.product').wrap('<div class="product_wrap"></div>');
  $('.product_wrap').css({width:'100%', height:'100%'});


  var product = $('.product');

  // indicator클릭시 해당 버튼 색칠
  var indi = $('.indicator').children('li');
  indi.on('click',function(e) {
    e.preventDefault();

    var _this = $(this);
    _this.addClass('active');
    _this.siblings('li').removeClass('active');

    var thisIndex = _this.index();
    var i = thisIndex * -100 + '%';
    product.stop().animate({marginLeft:i});
  });



})(jQuery);