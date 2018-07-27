// loadJson_01.js

(function() {
  $.getJSON("../js/source/name.json",function(data) {
    var a = data;
    console.log(a);

    var ty = $('.type1');
    for(var i=0; i< a.length; i+=1){
      ty.append('<li></li>');
      ty.children('li').eq(i).text( a[i].name + ':' + a[i].gender);
    }


    // $.each(a, function(i,v){
    //   console.log(i,v);
    // });
  });
})(jQuery);