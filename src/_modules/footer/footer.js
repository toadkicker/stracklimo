'use strict';

export default class Footer {
  constructor() {
    var today = new Date();
    var year = today.getFullYear();
    this.name = 'footer';
    this.year = year;
    console.log('%s module', this.name);
    this.yearEl = document.querySelector("#year");
    this.yearEl.innerHTML = " " + this.year;
  }
}
