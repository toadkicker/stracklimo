/**
 * Created by toadkicker on 1/18/16.
 */
(function ($) {
  $(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
      $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
          $(".navbar .item").css('color', 'black');
          $(".navbar").css('background-color', 'rgba(0,0,0,0.3)');

        } else {
          $(".navbar .item").css('color', 'white');
          $('.navbar').css('background-color', 'rgba(0,0,0,0.8)');
        }
      });
    }
  });
})(jQuery);

