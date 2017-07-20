'use strict';
import { media } from '../../../_scripts/vars';

export default class ProductContent {
  constructor() {
    this.asideHeadSelector = '.js-aside-head';
    this.productHeadSelector = '.js-product-head';
    this.init(this);
  }
  init (self) {
    let headHtml = $(this.asideHeadSelector).html();

    mediaCheck({
      media: media.desktop,
      entry: function() {
        self.moveToTopHtml(headHtml);
      },
      exit: function() {
        self.moveToAsideHtml(headHtml);
      }
    });
  }

  moveToTopHtml (html) {
    $(this.asideHeadSelector).empty();
    $(this.productHeadSelector).html(html);
  }
  moveToAsideHtml (html) {
    $(this.productHeadSelector).empty();
    $(this.asideHeadSelector).html(html);
  }
}
