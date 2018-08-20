// plugin_02_banner.js
(function($) {
  // 광고 배너에 관련된 플러그인을 만들기
  // step_01: 클릭시 처리되는 기능 플러그인으로
  /*
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
  */

  // step_02: html요소를 생성하여 플러그인으로 처리
  $.fn.banner02 = function(imgArr,url) {
    // 02: 광고 배너의 갯수를 늘려보기(01기능 이해후에 실행)

    var len = imgArr.length;
    var bannerList ='';
    var j;

    for(var i=1; i<=len; i++){
      // if(i < 10){ j = '0'+i; }else{ j = i; }
      (i < 10) ? j = '0'+i : j = i;
      var insertBanner = '<li class="banner_'+ j +'">광고배너 플러그인 만들기</li>';
      bannerList += insertBanner;
    }
    // console.log(bannerList);
  // -----------------------------
    var appendHtml ='\
      <div class="btn">\
        <button type="button" class="prev_btn"><span>이전보기</span></button>\
        <button type="button" class="next_btn"><span>다음보기</span></button>\
      </div>\
      <div class="banner_wrap">\
        <ul>'+ bannerList +'</ul>\
      </div>';
    this.append(appendHtml);

    // ----------------------------------------
    for(var k=1; k<=len; k++){
      (k < 10) ? j = '0'+k : j = k;
      $('.banner_'+j).css({backgroundImage:'url('+url+imgArr[k-1]+')'});
    }
    // ----------------------------------------
    // 01: 버튼 클릭시 동작
    var btn = this.children('.btn');
    var bannerWrap = this.children('.banner_wrap');
    bannerWrap.children('ul').css({width:len * 100 +'%'});
    bannerWrap.find('li').css({width:100/len +'%'});
    // bannerWrap.find('li').eq(-1)prependTo();

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