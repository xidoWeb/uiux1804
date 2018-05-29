// rwd_01.js
(function($) {
  // jquery

// 브라우저의 가로값을 파악
var $w = $(window).width();
console.log($w);

if($w <= 480){
  console.log('모바일 세로형 형태');
} 
else if ($w >= 481 && $w <= 768){
  console.log('모바일 가로형, 타블렛 세로형');
}
else if ($w >= 769 && $w <= 1366){
  console.log('타블렛 가로형, pc형');
}
else if ($w >= 1367) {
  console.log('pc full(확장) 형태');
}
// ------------------
// $(window).on('resize', function(){
//   location.reload();
// });


})(jQuery);