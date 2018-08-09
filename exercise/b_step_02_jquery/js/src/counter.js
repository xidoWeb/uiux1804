// couonter.js
(function($) {
  var c01 = $('.count_01');
  var c01Text = c01.children('p');
  var c01Btn = c01.children('button');

  var t = 0;
  c01Text.text(t);

  c01Btn.on('click',function(e) {
    e.preventDefault();
    t += 1;
    if(t >= 30){
      t=30; 
      c01Btn.text('100번 달성');
      c01Btn.delay(1000).fadeOut();
    }
    c01Text.text(t);
  });

// ----------------------------------
  var c02 = $('.count_02');
  var c02Text = c02.children('p');
  var c02Btn = c02.children('button');
  var t2 = c02Text.text(); // html문서의 숫자 복사
  var a = 0;
  c02Text.text(a);
  c02Btn.on('click',function(e) {
    e.preventDefault();
    setInterval(function(){
      a += 1;
      if(a >= t2){ a = t2; }
      c02Text.text(a);
    },1);
  });
// ----------------------------------
  var c03 = $('.count_03');
  var c03Text = c03.children('p');
  var t3 = c03Text.text();
  var a2 = 0;
  c03Text.text(a2);
  var c03Top = c03.offset().top;
  var wH = $(window).outerHeight();
  var myT = c03Top - (wH/2);

  c03Text.one('click',function() {
    setInterval(function(){
      (a2 >= t3) ? a2 = t3 : a2 += 1;
      c03Text.text(a2);
    },1);
  });

  $(window).on('scroll',function() {
    var st = $(this).scrollTop();
      if(st >= myT){
       c03Text.trigger('click');
      } // if     

  });
// ----------------------------------
  var c04 = $('.count_04');
  var c04Text = c04.children('p');
  var t4 = c04Text.text();
  var a3 = 0;
  c04Text.text(a3);
  // ======
  var c04Top = c04.offset().top;
  var myT2 = c04Top - (wH/2);

  var AniCount =function() {
    /* animate({color:'#fff'}, 1000, 'linear'); 
      animate({color:'#fff'}, 
              {duration:1000, 
               easing:'linear',
               step:function(처리되는것, 다양한 효과){}
               });
     $('p').animate({color:'#000'},1000);
    */

    $({count:a3}).animate({count:t4},
                        {duration:2000,easing:'linear',
                         step:function(now,fx){ c04Text.text( parseInt(now) ); },
                         complete:function(){ c04Text.text( t4 ); }
                        });
  };

  c04Text.one('click',function() {
    AniCount();
  });

  $(window).on('scroll',function() {
    var st = $(this).scrollTop();
      if(st >= myT2){
        c04Text.trigger('click');
      } // if     

  });

//End ==================================
})(jQuery);