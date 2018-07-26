// loadJson_01.js

(function() {
  $('.type1').load("../js/source/name.json",function(data) {
    console.log(data);
  });
})(jQuery);