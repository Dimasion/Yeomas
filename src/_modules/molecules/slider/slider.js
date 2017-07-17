'use strict';

export default class Slider {
  constructor() {
    this.sliderSelector = '.js-slider';
    this.prevSelector = '.js-slider-prev';
    this.nextSelector = '.js-slider-next';

    this.slider = $(this.sliderSelector).slick({
      margin: 30,
      dots: true,
      arrows: false
    });
    this.init();
  }
  init () {
    let self = this;
    // Initialize events
    $(this.nextSelector).on('click', function() {
      self.sliderNext();
    });
    $(this.prevSelector).on('click', function() {
      self.sliderPrev();
    });
  }

  sliderNext () {
    $(this.slider).slick('slickNext');
  }
  sliderPrev () {
    $(this.slider).slick('slickPrev');
  }
}
