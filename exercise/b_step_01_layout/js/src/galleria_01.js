// galleria_01.js

(function($) {
  // .indicator_selector_btn 자식 li
  var indiSel = $('.indicator_selector_btn');
  var indiLi = indiSel.children('li');

  // .ad_banner 자식 div
  var adBanner = $('.ad_banner');
  var adDiv = adBanner.children('div');

  // 몇번째라고 지칭 eq(2)
  // 몇번째인지 확인 index()


  // indiLi를 클릭하면
  indiLi.click(function(){
    // 1. indiLi에 클래스 이름('acive')을 첨부
    // indiLi.addClass('active');

    // 1-1. indiLi중 선택한 것( $(this) )에 이름('acive')을 첨부
    // $(this).addClass('active');

    // 2. indiLi에 클래스이름('acive')을 빼기
    // indiLi.removeClass('active');

    // 3. indiLi에 부여된 클래스이름('active')을 일단 빼고,
    //    동시에 선택한 것에만 ('active')를 적용
    indiLi.removeClass('active');
    $(this).addClass('active');
  });

})(jQuery);