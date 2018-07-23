// gallery_01.js
(function($) {
  var galBox = $('.gall_box');
  var galLink = galBox.children('a');
  var list = $('.list');
  var listImg = list.find('li');
/*
  // step_01 이미지가져오기
  listImg.on('click',function(e) {
    e.preventDefault();
    var img = $(this).find('img');
    var imgSrc = img.attr('data-src');

    galBox.css({backgroundImage:'url('+ imgSrc +')',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'});
  });
  // data속성사용시 html문서에 많은 내용을 작성해야하는 불편함이 발생
*/

/*
  // step_02 js를 통해 목록을 만들어서 사용하기
  var addr = '../img/gallery/';
  var link = ['j01_big','j02_big','j03_big','j04_big','j05_big'];
  var href = ['naver.com', 'daum.net', 'google.com', 'greenart.co.kr', 'xidoweb.com'];

  listImg.on('click',function(e) {
    e.preventDefault();
    var i = $(this).index();
    galBox.css({backgroundImage:'url('+ addr + link[i] +'.jpg)',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'});
    galBox.find('a').attr({href:'http://'+href[i]});

  });
*/

 var addr = '../img/gallery/';
 var myImg = [
      {thum:'j01.jpg', img:'j01_big.jpg', href:'naver.com',     narr:'이미지_01 설명'},
      {thum:'j02.jpg', img:'j02_big.jpg', href:'google.com',    narr:'이미지_02 설명'},
      {thum:'j03.jpg', img:'j03_big.jpg', href:'daum.net',      narr:'이미지_03 설명'},
      {thum:'j04.jpg', img:'j04_big.jpg', href:'w3schools.com', narr:'이미지_04 설명'},
      {thum:'j05.jpg', img:'j05_big.jpg', href:'nodejs.org',    narr:'이미지_05 설명'}
  ];

  // 함수기능처리
  var ImgSet = function(i){
    galBox.css({backgroundImage:'url('+ addr + myImg[i].img +')',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover'});
    galLink.attr({href:'http://' + myImg[i].href, 
                  target:'_blank',
                  title:myImg[i].narr});
    galLink.text(myImg[i].narr);
  };

  // ---- 
  for(var j = 0; j < myImg.length; j+=1){
    listImg.eq(j).children('a').css({backgroundImage:'url(' + addr + myImg[j].thum+ ')',
                                     backgroundRepeat:'no-repeat', 
                                     backgroundSize:'cover',
                                     transition:'all 400ms'});
  } // forEnd

  listImg.children('a').on('mouseenter focus',  function(){
    $(this).css({transform:'scale(1.2)'});
  });
  listImg.children('a').on('mouseleave blur',  function(){
    $(this).css({transform:'scale(1)'});
  });
  // ----

  ImgSet(0);

  listImg.on('click',function(e) {
    e.preventDefault();
    var i = $(this).index();
    ImgSet(i);
  });


})(jQuery);