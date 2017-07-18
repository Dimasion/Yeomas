'use strict';

export default class Input {
  constructor() {
    this.phoneSelectors = '[data-input-type="phone"]';
    this.init();
  }
  init () {
    $(this.phoneSelectors).mask('+38 (000) 000 00 00');
  }
}
