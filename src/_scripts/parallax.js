/**
 * Created by toadkicker on 1/18/16.
 */
(function ($) {
  $(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    //$('body').removeClass('out').addClass('in');

    //make it shrink
    if (startchange.length){
      $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
      });
    }
  });
})(jQuery);

