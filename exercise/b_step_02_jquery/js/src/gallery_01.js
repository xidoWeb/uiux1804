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
*/

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


})(jQuery);