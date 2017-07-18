'use strict';
export default class Menu {
  constructor(name) {
    this.overlaySelector = '.js-menu-overlay';
    this.menuSelector = '.js-menu';
    this.closeSelector = '.js-menu-close';
    this.initMenu();
  }
  initMenu () {
    let self = this;
    $(this.menuSelector).swipe({
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        console.log(direction);
        direction === 'left'
          ? self.closeMenu()
          : self.openMenu();

      }
    });
    $(this.menuSelector).swipe('option', 'threshold', 20);
    $(this.closeSelector).on('click', () => this.closeMenu());
    $(this.overlaySelector).on('click', () => this.closeMenu());
  }

  openMenu () {
    $(this.menuSelector).addClass('visible');
    $(this.overlaySelector).addClass('visible');
  }
  closeMenu () {
    $(this.menuSelector).removeClass('visible');
    $(this.overlaySelector).removeClass('visible');
  }
}
