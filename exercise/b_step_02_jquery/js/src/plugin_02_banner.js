// plugin_02_banner.js
(function($) {
  // 광고 배너에 관련된 플러그인을 만들기
  // step_01: 클릭시 처리되는 기능 플러그인으로
  
  $.fn.banner01 = function() {
    var btn = this.children('.btn');
    var bannerWrap = this.children('.banner_wrap');

    btn.find('button').on('click',function(evt) {
      evt.preventDefault();
      var lbtn = $(this)[0] == $('.prev_btn')[0];
      var rbtn = $(this)[0] == $('.next_btn')[0];
      var banner = bannerWrap.children('ul');

      if(lbtn){
        banner.animate({marginLeft:0},function() {
          banner.css({marginLeft:-100 +'%'});
          banner.find('li').eq(-1).prependTo(banner);
        });
      }else if(rbtn){
        banner.animate({marginLeft:-200+'%'},function() {
          banner.css({marginLeft:-100 +'%'});
          banner.find('li').eq(0).appendTo(banner);
        });
      }
    });
  };
})(jQuery);