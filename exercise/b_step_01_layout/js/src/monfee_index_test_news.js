// monfee_index_test_news.js

(function($) {

/** 반복기능을 사용하기 위해 알아야할 몇가지
  * for(최초; 조건; 증감){}    // forEach/each()
  * 배열 = [];
  * 객체 = {속성: 속성값};
  * JSON방식 = 배열형식과, 객체형식의 결합체
*/
  
var addr = "../img/test1/img/new_menu/";
var img  = ['menu_01.png','menu_02.png','menu_03.png','menu_04.png','menu_05.png','menu_06.png','menu_07.png'];


// $('.new_01').find('.news_img').css({backgroundImage:'url('+ addr + img[0] +')'});
// $('.new_02').find('.news_img').css({backgroundImage:'url('+ addr + img[1] +')'});
// $('.new_03').find('.news_img').css({backgroundImage:'url('+ addr + img[2] +')'});
// $('.new_04').find('.news_img').css({backgroundImage:'url('+ addr + img[3] +')'});


var best = $('#bestNews');
var bestUl = best.find('ul');
 //html복제해서 처리하는 방법
var i=0; 
for(; i < img.length; i+=1){
  var bestLi = bestUl.find('li').eq(0).clone();
  bestUl.append(bestLi);
  bestUl.children('li').eq(i).find('.news_img').css({backgroundImage:'url('+ addr + img[i] +')'});
}
  bestUl.children('li').eq(img.length).remove();



/* // 생성해서 처리한다면???
var i = 0;
for(; i<img.length; i+=1){
  bestUl.append('<li>  <a href="#">  <div class="news_img"></div>  <dl>  <dt>???</dt>  <dd>=======</dd>  </dl>  </a>  </li>');
  bestUl.children('li').eq(i).find('.news_img').css({backgroundImage:'url('+ addr + img[i] +')'});
}
bestUl.append('<li></li>');
bestUl.find('li').eq(-1).css({backgroundImage:'url('+ addr+ 'default_menu.png' +')', backgroundRepeat:'no-repeat'});
*/


})(jQuery);