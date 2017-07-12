'use strict';
import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

export default class Range {
  constructor() {
    this.root = '.range';
    this.range = '.js-range';
    this.init();
  }

  init () {
    $(this.range).each((index, item) => {
      let max = $(item).data('max');
      let min = $(item).data('min');
      let vFrom = $(item).data('from');
      let vTo = $(item).data('to');
      let symbol = $(item).data('symbol');
      let input = $(item).closest(this.root).find('input');

      // Check values
      vFrom < min ? vFrom = min : '';
      vFrom > max ? vFrom = max : '';
      vTo > max ? vTo = max : '';
      vTo < min ? vTo = min : '';
      vFrom > vTo ? vFrom = vTo : '';
      vTo < vFrom ? vTo = vFrom : '';

      let slider = noUiSlider.create(item, {
        start: [vFrom, vTo],
        connect: true,
        tooltips: [wNumb({ 
          suffix: symbol,
          decimals: 0,
          thousand: '' 
        }), wNumb({
          suffix: symbol,
          decimals: 0,
          thousand: '' 
        })],
        range: {
          'min': min,
          'max': max
        }
      });
      $(input).val([vFrom, vTo]);
      slider.on('set', function(value) {
        $(input).val([Math.round(value[0]), Math.round(value[1])]);
      });

    });

  }

}
