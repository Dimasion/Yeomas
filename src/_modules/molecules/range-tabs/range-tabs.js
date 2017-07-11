'use strict';

export default class RangeTabs {
  constructor() {
    this.rootSelector = '.m-range-tabs',
    this.tabSelector = '.m-range-tabs__tab';
    this.tabActiveClass = 'm-range-tabs__tab--active';
    this.contentSelector = '.m-range-tabs__content';
  }

  init () {
    let self = this;

    $(this.tabSelector).on('click', function() {
      self.showContent(this);
    });

    // Hide contents
    this.hideContents(this.tabSelector);
    // Show active
    this.showActiveContent(self);
  }

  showActiveContent (vm) {
    $('.' + vm.tabActiveClass).each(function(index, item) {
      let activeTab = $(item).data('tab');
      let content = $(item)
        .closest(vm.rootSelector)
        .find(vm.contentSelector + '[data-tab=' + activeTab + ']');
      $(content).show();
    });
  }

  showContent(btn) {
    let btnData = $(btn).data('tab');
    let content = $(btn)
      .closest(this.rootSelector)
      .find(this.contentSelector + '[data-tab=' + btnData + ']');
    this.hideContents(btn);
    this.cleanActive(btn);
    $(btn).addClass(this.tabActiveClass);
    $(content).fadeIn();
  }

  cleanActive (btn) {
    let buttons = $(btn).closest(this.rootSelector).find(this.tabSelector);
    $(buttons).removeClass(this.tabActiveClass);
  }
  
  hideContents(btn) {
    let contents = $(btn).closest(this.rootSelector).find(this.contentSelector);
    $(contents).hide();
  }
}
