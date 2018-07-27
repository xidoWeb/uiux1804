// landing_01.js
(function($) {

  var con = $('#contentBox');
  var conH2 = con.find('h2');
  var conHOffsetT = conH2.offset().top;
  var winH = $(window).outerHeight(true);

  var ld_01 = $('.landing_01');
  var ld_01Oft = ld_01.offset().top;
  // console.log(conHOffsetT);
  var myH = winH/2;

  $(window).on('scroll',function() {
    var nowTop = $(window).scrollTop();

    if( nowTop >= conHOffsetT-myH ){
      conH2.addClass('ani');
      con.addClass('conR');
    }else{ conH2.removeClass('ani'); 
          con.addClass('conR');}
//  -------------------------------------------
    if( nowTop >= ld_01Oft ){
      ld_01.addClass('ani');
      ld_01.children('li').addClass('ani');
    }
    else{
      ld_01.removeClass('ani');
      ld_01.children('li').removeClass('ani');
      ld_01.children('li').removeClass('ani');
    }    

  });

})(jQuery);