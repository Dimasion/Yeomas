'use strict';
import * as Vibrant from 'node-vibrant';

export default class Item {
  constructor() {
    this.image = '.js-bg-color';
    this.init();
  }

  init () {
    $(this.image).each((index, item) => {
      Vibrant.from($(item).data('path-from-js')).getPalette()
        .then((palette) => { 
          $('canvas').remove();
          let vibrant = palette.Vibrant;
          vibrant !== null
            ? $(item).css('background-color', 'rgba(' + vibrant.getRgb() + ', 0.5')
            : $(item).css('background-color', '#fff');
        });
    });
  }
}
