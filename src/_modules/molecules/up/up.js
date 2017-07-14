'use strict';

export default class Up {
  constructor() {
    this.upSelector = '.m-up';
    this.init();
  }
  init () {
    $(this.upSelector).on('click', () => {
      this.animateToTop();
    });
  }

  animateToTop () {
    $('html, body').animate({
      scrollTop: 0
    }, 700, 'swing');
  }
}
