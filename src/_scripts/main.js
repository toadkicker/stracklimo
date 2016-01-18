// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import jQuery from 'jquery';
import 'bootstrap';
import Link from '../_modules/link/link';
import Header from '../_modules/header/header';
import Footer from '../_modules/footer/footer';

jQuery(() => {
  new Link(); // Activate Link modules logic
  new Header(); // Activate Header modules logic
  new Footer(); // Activate Footer modules logic

  //parallax
  jQuery(document).ready(function(){
    var scroll_start = 0;
    var startchange = jQuery('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
      jQuery(document).scroll(function() {
        scroll_start = jQuery(this).scrollTop();
        if(scroll_start > offset.top) {
          jQuery(".navbar-default").css('background-color', '#ffffff');
        } else {
          jQuery('.navbar-default').css('background-color', 'transparent');
        }
      });
    }
  });
});
