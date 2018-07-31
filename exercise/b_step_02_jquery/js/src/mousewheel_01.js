// mousewheel_01.js
(function($) {
  // mousewheel
  $('html').on('mousewheel DOMMouseScroll', function(e) {
    // {originalEvent:{  wheelDelta:-120   }   }
    var evt = e.originalEvent.wheelDelta;
    var delta = evt;
    // console.log(evt);

    if(delta < 0){
      console.log('마우스를 내렸습니다.');
    }else{
      console.log('마우스를 올렸습니다.');
    }


  });
})(jQuery);