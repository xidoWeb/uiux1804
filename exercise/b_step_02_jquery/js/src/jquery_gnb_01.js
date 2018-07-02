// jquery_gnb_01.js


// #headBox영역에 마우스 올라가면 gnb하위 메뉴가 나타나게 만들기

var headBox = $('#headBox');
headBox
.on('mouseenter',function(){
  $(this).addClass('view');
})
.on('mouseleave',function(){
  $(this).removeClass('view');
})