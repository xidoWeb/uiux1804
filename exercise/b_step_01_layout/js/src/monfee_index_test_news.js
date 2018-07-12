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
var newsLink = ['news01.html', 'news02.html','news03.html','news04.html','news05.html','news06.html','news07.html'];
var newsTitle = ['title1', 'title2', 'titl3', 'titl4', 'title5', 'titl6', 'titl7'];

var news = [
            {img:"menu_01.png", link:"news01.html",  title:"news title1", data:"news lorem ........."},
            {img:"menu_02.png", link:"news02.html",  title:"news title2", data:"news lorem ........."},
            {img:"menu_03.png", link:"news03.html",  title:"news title3", data:"news lorem ........."},
            {img:"menu_04.png", link:"news04.html",  title:"news title4", data:"news lorem ........."},
            {img:"menu_05.png", link:"news05.html",  title:"news title5", data:"news lorem ........."},
            {img:"menu_06.png", link:"news06.html",  title:"news title6", data:"news lorem ........."},
            {img:"menu_07.png", link:"news07.html",  title:"news title7", data:"news lorem ........."}
            ];
// $('.new_01').find('.news_img').css({backgroundImage:'url('+ addr + img[0] +')'});
// $('.new_02').find('.news_img').css({backgroundImage:'url('+ addr + img[1] +')'});
// $('.new_03').find('.news_img').css({backgroundImage:'url('+ addr + img[2] +')'});
// $('.new_04').find('.news_img').css({backgroundImage:'url('+ addr + img[3] +')'});


var best = $('#bestNews');
var bestUl = best.find('ul');
 //html복제해서 처리하는 방법
var i=0; 
for(; i < news.length; i+=1){
  var bestLi = bestUl.find('li').eq(0).clone();
  bestUl.append(bestLi);
  var li = bestUl.children('li').eq(i);
  li.find('.news_img').css({backgroundImage:'url('+ addr + news[i].img +')'});
  li.find('a').attr({ href:news[i].link , target:'_blank', "class":'more', "data-myattr":'myname'});
  li.find('dt').text(news[i].title);
  li.find('dd').text(news[i].data);
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