//  jquery_event_01.js

(function($){
  var mouseArea = $('.mouse');
  var mouseBg = mouseArea.css('backgroundColor');
  var i = 0;
     
  // 마우스를 올렸을경우
  mouseArea
    .on('mouseenter',function(){
      $(this).css({'backgroundColor':'#dfdf77'});
    })
    .on('mouseleave',function(){
      $(this).css({'backgroundColor':mouseBg});
    })
    .on('mousedown',function(e){
      // console.log(e);
      // i+=1;
      var w = e.which; 
      //  e.which 에서 마우스 왼쪽 1
      // 가운데 휠클릭 2
      //  마우스 오른쪽은 3

      //  e.button 에서
      // 마우스왼쪽 0
      // 가운데 휠클릭 1
      // 마우스 오른쪽 2

      var m;
      /*
      if(w === 1){ m = '왼버튼';
      }else if(w === 2){ m = '가운데 버튼';
      }else if(w === 3){ m = '오른버튼';
      }else{m = '기타버튼';
      }
      */
      // 조건분기
      switch(w){
        case 1:
          m = '왼버튼'
        break;
        case 2:
          m = '가운데 버튼'
        break;
        case 3:
          m = '오른버튼'
        break;
        default:
          m = '기타버튼'
      }

      $(this).html('<p>마우스를 '+ m +'를 클릭하였습니다.</p>');
    })
    .on('mouseup',function(e){
      console.log(e.which);
      $(this).html('<p>마우스를 올렸습니다.</p>')
    });
// ---------------------------------------------------------

var mt = parseInt(   $('.move').css('marginTop')   );
var ml = parseInt(   $('.move').css('marginLeft')  );

// var mouseArea = $('.mouse');
mouseArea.on('mousemove',function(e){
      // console.log(e);
    // clientX : 브라우저의 document를(스크롤영역 무시) 기준으로 좌표체크
    // clientY

    // offsetX : 주어진 선택자의 영역을 기준으로 좌표 체크
    // offsetY

    // screenX : 모니터의 화면영역을 기준으로 좌표 체크
    // screenY

    // pageX : 브라우저의 document를 기준으로 좌표
    // pageY


      //간단 테스트
      var thisCh = $(this).children('.move');
      var thisY = e.offsetY/5;
      var thisX = e.offsetX/5;

      // console.log(ml);
      // console.log(ml+thisX);

      thisCh.css({marginLeft: ml-thisX , marginTop: mt-thisY });

    });




})(jQuery);

//  if switch for 