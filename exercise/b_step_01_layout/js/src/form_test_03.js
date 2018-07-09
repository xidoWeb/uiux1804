// form_test_03.js
(function($) {
  // .show_btn 클릭해서, form영역을 보이고/사라지게 만들기

var btn = $('.show_btn');
var form = $('#member');

btn.on('click',function(e){
  e.preventDefault();


  form.stop().slideToggle(500, function(){
    var formView = $(this).css('display');
    if(formView === 'none'){
      btn.find('button').text('열기');
      btn.find('button').addClass('close');
    }else{
      btn.find('button').text('닫기');
      btn.find('button').removeClass('close');
    }
  });
});


})(jQuery);