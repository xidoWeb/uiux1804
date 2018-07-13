// monfee_index_test_issue.js
(function($) {
  // issue banner영역에서 마지막위치에 첫배너를 복제하여 배치

  var isBan = $('.issue_banner');
  var isLiClone = isBan.find('li').eq(0).clone();
  isBan.children('ul').append(isLiClone);
  var isBanLen = isBan.find('li').length;
  // console.log(isBanLen);
  isBan.children('ul').css({width:isBanLen * 100 +'%'});


  // indicator 클릭시 배너 이동
  var issue = $('.issue_text');
  var issue_btn = issue.children('.btn');
  var indi = issue_btn.find('.indicator');
  var indiLi = indi.children('li');
  var i = 0;

  var issueBanner = function(i){
    // 배너의 갯수를 파악해서 최대갯수위치에 오면 처음으로 이동
    var  num = i * -100 + '%';    
    if(i < isBanLen-1){      
      isBan.children('ul').stop().animate({marginLeft:num});
    }else{
      i=0;
      isBan.children('ul').stop().animate({marginLeft:num},function(){
        $(this).css({marginLeft:0});
      });
    }
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
  };
  issueBanner(i);
// ---------------------------
  indiLi.on('click',function(e) {
    e.preventDefault();
    i = $(this).index();
    issueBanner(i);
  });
// ---------------------------
  // 일정시간마다 움직이는 자동 슬라이드 기능 (setInterval, clearInterval)
  var timed = 2000;
  var autoStart;
  var play  = issue.find('.play');
  var pause = issue.find('.pause');
  play.addClass('active');


  var StartSlide = function(){
       autoStart = setInterval(function(){
                  (i<isBanLen-1) ? i+=1 : i=1;
                  issueBanner(i);
                }, timed);  
     };
  var StopSlide = function() {clearInterval( autoStart ); };

  StartSlide();
//----------------------------
  // issue.off('mouseleave');
  var Go = function(e) {
      e.preventDefault(); 
      StopSlide();  
      StartSlide(); 
      play.addClass('active');  
      pause.removeClass('active'); 
    };

  var Stop = function(e) {
      e.preventDefault();  
      StopSlide(); 
      pause.addClass('active');  
      play.removeClass('active');
    };
  /*
  var status = false;

  issue.find('dl').on('mouseleave',function(e){
    var btnStatus = pause.hasClass('active');
    status = false;
    console.log(btnStatus);
    if(btnStatus){  Go(e)  }
  });
  issue.find('dl').off('.slide1').on('mouseenter.slide',function(e) {
    Stop(e);
    status = true;
  });

  play.off('.slide').on('click.slide1',function(e) {
    (status) ? Stop(e) : Go(e);
    // issue.on('mouseleave',function(){ Go(e) });
  });

  pause.on({'click': Stop});
  */

   issue.on({'mouseleave':Go, 'mouseenter':Stop});
   pause.on({'click': Stop});
   play.on({'click': Go});
// -------------------------
})(jQuery);


// var a;


// function Start(){
//   a = setInterval(function(){},2000);
// }
// Start();

// (click) => clearInterval( a );

// Start();