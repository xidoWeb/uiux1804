// d-day.js
(function($) {

  var today   = $('.today');
  var wantDay = $('.want_day');
  var dDay    = $('.d_day');

  var monArr = ['1월', '2월', '3월', '4월','5월','6월','7월','8월','9월','10월','11월','12월'];

  setInterval(function(){

    var date = new Date();
    var year = date.getFullYear();
    var month = monArr[ date.getMonth() ];
    var day = date.getDate();
    var hour = date.getHours();
    var min  =  date.getMinutes();
    var sec  =  date.getSeconds();
    var time = hour + ':' + min + ':' + sec;
    console.log(time);

    today.children('.y').text(year);
    today.children('.m').text(month);
    today.children('.d').text(day+'일');
    today.children('.t').text(time);

  //  ---------------------------------------------
    // var wantDate = new Date(2018, 7, 8);
    // var wantDate = new Date('Aug 8 2018');
    var wantDate = new Date('2018-8-31-18:00:00');
    var wantYear = wantDate.getFullYear();
    var wantMonth = monArr[ wantDate.getMonth() ];
    var wantDaing = wantDate.getDate();
    var wantH = wantDate.getHours();
    var wantM = wantDate.getMinutes();
    var wantS = wantDate.getSeconds();
    var wantT = wantH + ':' + wantM + ':'+ wantS;

    wantDay.children('.y').text(wantYear);
    wantDay.children('.m').text(wantMonth);
    wantDay.children('.d').text(wantDaing+'일');
    wantDay.children('.t').text(wantT);

  // -------------------------------------------------
    var s = 1000;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var mo = d * 30;
    var y = mo * 12;


    // 디데이
    // 오늘날짜에대한 숫자화: date.getTime();
    // 목표날짜에 대한 숫자화:wantTimed;
    var todayCount = date.getTime();
    var wantTimed  = wantDate.getTime();
    var dDate      = todayCount - wantTimed; 

    var dyear      =  Math.abs( parseInt(   dDate / y  )        );
    var dmon       =  Math.abs( parseInt( ( dDate % y  ) / mo ) ) ;
    var dday       =  Math.abs( parseInt( ( dDate % mo ) / d  ) );
    var dtimeH     =  Math.abs( parseInt( ( dDate % d  ) / h  ) );
    var dtimeM     =  Math.abs( parseInt( ( dDate % h  ) / m  ) );
    var dtimeS     =  Math.abs( parseInt( ( dDate % m  ) / s  ) );
    var dTimeed    =  dtimeH + ':' + dtimeM + ':' + dtimeS;

    dDay.children('.y').text(dyear+'년');
    dDay.children('.m').text(dmon+'개월');
    dDay.children('.d').text(dday+'일');
    dDay.children('.t').text(dTimeed);
  
  },1000);



  /*
   Math : 수학 연산을 토대로 만드는 개체
   Math.random() : 0~1사이의 값을 랜덤으로 표기
      console.log( parseInt( Math.random()*63+1 ) );
   Math.round() : 반올림
   Math.floor() : 버림
   Math.ceil()  : 올림
   Math.abs()  : 절대값
  */
  console.log(   )

})(jQuery);