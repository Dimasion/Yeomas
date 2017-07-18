'use strict';

export default class Modal {
  constructor() {
    this.modalSelector = '.js-modal';
    this.modalContent = '.m-modal__content';
    this.modalTrigger = '.js-modal-trigger';
    this.init();
  }
  init () {
    let self = this;
    $(this.modalSelector).on('click', () => this.closeModals());
    $(this.modalContent).on('click', (e) => e.stopPropagation());
    $(this.modalTrigger).on('click', function() {
      let modalName = $(this).data('modal');
      self.openModal(modalName);
      $(this).addClass('active');
    });
  }
  openModal (name) {
    $(this.modalSelector + '[data-modal="' + name + '"]').fadeIn('fast');
  }
  closeModals () {
    $(this.modalSelector).fadeOut('fast');
    $(this.modalTrigger).removeClass('active');
  }
}
