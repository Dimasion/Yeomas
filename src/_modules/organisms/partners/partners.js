'use strict';
import { TimelineLite, Power4 } from 'gsap';
export default class Partners {
  constructor() {
    let self = this;

    this.partnersItems = '.o-partners__items';
    this.partnersItem = '.o-partners__item';
    this.tl = new TimelineLite();
    this.waypoint = new Waypoint({
      element: $(this.partnersItems).get(0),
      offset: '75%',
      handler: function(direction) {
        // alert('You have scrolled to a thing');
        self.tl.staggerTo(self.partnersItem, 1.5, { ease: Power4.easeInOut, y: 0, opacity: 1 }, 0.1);
        this.destroy();
      }
    });
    
    this.init();
  }

  init () {
    // Hide partners
    this.tl.set(this.partnersItem, { y: 150, opacity: 0 });
  }
}
