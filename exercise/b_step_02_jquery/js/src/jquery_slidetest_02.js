// jquery_slidetest_02.js
(function($) {
  var slide     = $('.slide_banner');
  var indicator = slide.children('.indicator');
  var indiLi    = indicator.children('li');
  var product   = $('.product');
  var productLi   = product.children('li');
  var timed     = 500;

  // step1
  // indicator 기능으로 슬라이딩 처리하기

/*
  //  tabIndex의 경우 1차 처리
  var TabIndex = function(tabi){
    productLi.eq(tabi).children('a').attr({tabIndex:0});
    productLi.eq(tabi).siblings('li').children('a').attr({tabIndex:-1});
  };
  TabIndex(0);


  // indicator 클릭
  indiLi.on('click',function(e) {
    e.preventDefault();
    var _this = $(this);
    
    // banner 이동
    var thisI = _this.index();
    var i     = thisI * -100 + '%';

    product.stop().animate({marginLeft:i}, timed);

    // indicator 처리
    _this.siblings('li').removeClass('active');
    _this.addClass('active');

    TabIndex(thisI);
  });
*/

  // step2
  // 좌우 버튼 클릭으로 슬라이딩 처리하기
  var slideBtn = $('.slide_btn');
  var nextBtn = slideBtn.children('.next_btn');
  var prevBtn = slideBtn.children('.prev_btn');

  // 오른버튼 클릭
  var num = 0;
  var productLength = productLi.length;
/*
  nextBtn.on('click',function(e){
    e.preventDefault();
    if(num < productLength-1){
      num +=1;
    }

    var i = num * -100 +"%";
    product.stop().animate({marginLeft:i});
  });

  // 왼쪽버튼
  prevBtn.on('click',function(e){
    e.preventDefault();
    if(num > 0){
      num -=1;
    }

    var i = num * -100 +"%";
    product.stop().animate({marginLeft:i});
  });
*/
/*
  // tabindex기능 다시한번익히기
  var Ti = function(ti){
    productLi.eq(ti).children('a').attr({tabindex:0});
    productLi.eq(ti).siblings('li').children('a').attr({tabindex:-1});
  };
  Ti(0);
  // console.log(nextBtn[0]);
  slideBtn.children('button').on('click',function(e){
    var _this = $(this)[0];
    if( _this === nextBtn[0] && num < productLength-1){
    // 선택된 버튼이 nextBtn이고, 전체 갯수보다 하나작은수(4)이면 ~
      // 변수 num에 1씩 더해라.
      num += 1;
    } else if(_this === prevBtn[0] && num > 0) {
    // 선택된 버튼이 prebBtn이고, 0보다 큰수이면 ~
      // 변수 num에 1씩 빼라.
      num -= 1;
    }
    // console.log(num);
    var i = num * -100 +"%";
    product.stop().animate({marginLeft:i});
    Ti(num);
  });
*/

// step3 좌우 슬라이드버튼과, indicator 기능 합치기
  // tabindex
  var Tab = function(i){
    productLi.eq(i).find('a').attr({tabindex:0});
    productLi.eq(i).siblings('li').find('a').attr({tabindex:-1});

    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
    var n = i * -100 + '%' ;
    product.stop().animate({marginLeft:n});
  };
  Tab(num);

  // indicator
  indiLi.on('click',function(e) {
    e.preventDefault();
    var _t = $(this);
    num = _t.index();
    Tab(num);
  });

  slideBtn.children('button').on('click',function(e) {
    e.preventDefault();
    var _t = $(this)[0];
    if(  (_t === nextBtn[0])  &&  (num < productLength-1)  ){ num += 1;
    }else if(  (_t === prevBtn[0])  &&  (num > 0)  ){ num -= 1; }
    Tab(num);
  });
})(jQuery);