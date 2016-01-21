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
          $(".navbar").css('background-color', 'rgba(0,0,0,1)');
        } else {
          $('.navbar').css('background-color', 'rgba(0,0,0,0.8)');
        }
      });
    }
  });
})(jQuery);

