'use strict';

export default class Search {
  constructor() {
    this.sform = '.js-search';
    this.sformBtn = '.js-search-btn';
    this.init();
  }
  init () {
    $(this.sformBtn).on('click', this.submitForm);
  }

  submitForm () {
    console.log('here');
    $(this.sform).submit(function() {
      alert('seichas');
    });
  }
}
