//  loading_01.js
(function($) {

// $(누군가에).load("어떤것을 담은 후", function(){});
// $(window).on('load', function(){}); 브라우저가 로딩이 완료되면

$(window).on('load',function(e){
  console.log(e);
   $('.loading').fadeOut(300, function(){
    $(this).remove();
   });
});

  var video = $('.video').children('video');
  var btn = $('.btn').children('button');

  /* 재생: play()
     정지: pause()
     최초의상태로: get(0)  */

  btn.on('click', function(e) {
    e.preventDefault();
    var whatBtn = $(this)[0];
    if(whatBtn == $('.pause_btn')[0] ){
      // 일시정지 버튼을 클릭했을때
      video[0].pause();
    }else{
      // 재생버튼을 클릭했을때
      video[0].play();
    }

    $(this).hide();
    $(this).siblings('button').show();
    $(this).siblings('button').focus();
  });


$(window).on('scroll',function() {
  var scroll = $(this).scrollTop();
  if( scroll >= video.outerHeight() ){
    video[0].pause();
  }else{
     video[0].play();
   }
});


})(jQuery);