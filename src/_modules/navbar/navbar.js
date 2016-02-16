'use strict';

export default class Navbar {
  constructor() {
    this.name = 'navbar';
    console.log('%s module', this.name);
    this.shrink = function () {
      $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
          $('nav').addClass('shrink');
        } else {
          $('nav').removeClass('shrink');
        }
      });
    };
    this.toggleDropdown = function () {
      $(".dropdown").hover(
          function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
          },
          function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
          })
    };
    this.shrink();
    this.toggleDropdown();
  }
}
