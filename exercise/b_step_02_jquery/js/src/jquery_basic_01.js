// jquery_basic_01.js

(function($) {
  // h1
  $('h1').css({backgroundColor:"#faa", color:'#036'});

  var h1padding = $('h1').css('padding');
  // console.log( parseInt(h1padding) );
  $('h1').css({'padding': parseInt(h1padding)*2 +'px' });


  var pBg = $('p').css('backgroundColor');
  var pColor = $('p').css('color');

  $('p')
    .on('mouseenter',function(){
      $(this).stop().animate({backgroundColor:'#765', color:'#fff'}, 800, 'easeInSine');
    })
    .on('mouseleave',function(){
      $(this).stop().animate({backgroundColor:pBg, color:pColor}, 800, 'easeInSine');
    });

    // ------
   var imgFr = $('.img_place').find('img');
   var imgFrOriginSrc = imgFr.attr('src');
   var imgFrOriginAlt = imgFr.attr('alt');

   imgFr.on('click',function(){
      $(this).attr({src:'../img/img_02.jpg'});
   });
   $('h1').on('click',function() {
      imgFr.attr({src:'../img/img_03.jpg'});
   });

})(jQuery);