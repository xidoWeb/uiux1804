// jquery_beginner_01.js

(function($){

  var jwrap = $('.jwrap');
  var jp    = jwrap.children('p');

  jwrap.css({'margin':'auto',
             'width':'600px',
             'height':'300px',
             'backgroundColor':'#fa0',
             'color':'#fff'});

  jp.css({'margin':'auto',
          'width':'70%',
          'height':'100px',
          'color':'#ff0',
          'fontSize':'2rem',
          'textAlign':'center',
          'backgroundColor':'#777'
        });

  jp.on('click', function(){
    $('.wrap>p').animate({'backgroundColor':'#f06', 'color':'#fff', 'fontWeight':'bold'});
  });


})(jQuery);
