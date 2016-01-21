'use strict';
import $ from 'jQuery';
import page from 'page';

export default class Header {
  constructor() {
    this.name = 'header';
    this.menu = $('#menu').find('.item');
    //this.menu.each(function(index, item) {
    //  function route () {
    //    var url = item.href.split('/'),
    //        href = url[url.length - 1];
    //    var tmpl = '';
    //    $.ajax('/' + href).done(function (resp) {
    //      tmpl = resp;
    //      document.querySelector('#main').innerHTML = tmpl;
    //    });
    //  }
    //  page(item.href, route);
    //});

    //$(this.menu).on('click', function (event) {
    //  event.preventDefault();
    //  //display loading page widget at 0%
    //  //fetch template
    //  //replace #main area
    //  //initialize modules
    //  //end progress on loading page widget
    //  var goto = event.target.href.split('/')[event.target.href.split('/').length - 1];
    //
    //  console.log('%s was clicked', event.target.innerHTML);
    //  window.location.href = event.target.href;
    //});

    console.log('%s module', this.name);
  }
}
