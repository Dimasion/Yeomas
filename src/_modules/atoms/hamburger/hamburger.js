'use strict';
import Menu from '../../molecules/menu/menu';

export default class Hamburger extends Menu {
  constructor() {
    super();
    this.hamburgerSelector = '.js-hamburger';
    this.init();
  }

  init () {
    $(this.hamburgerSelector).on('click', () => {
      this.openMenu();
    });
  }
}
