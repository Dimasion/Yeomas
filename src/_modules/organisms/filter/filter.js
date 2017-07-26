'use strict';
import RangeTabs from '../../molecules/range-tabs/range-tabs';
export default class Filter extends RangeTabs {
  constructor() {
    super();
    this.filterSelector = '.o-filter';
    this.closeTrigger = '.js-filter-close';
    this.openTrigger = '.js-filter-open';
    this.filterCurrency = '.js-filter-currency';
    this.filterMinClass = 'o-filter--min';
    this.filterSecondClass = 'o-filter--second';
    this.custommizationTabs = '.js-customization';
    
    this.initFilter();
  }

  initFilter () {
    this.changeCurrency();
    $(document).on('currencyChange', (event) => {
      this.changeCurrency();
    });

    $(document).on( 'onChangeSelect', ( event, value ) => {
      console.log(value);

      if (value === 'property') {
        $(this.filterSelector).addClass(this.filterMinClass);
        this.onOnlyFirstMode();
      }
      else if (value === 'second') {
        $(this.filterSelector).addClass(this.filterSecondClass);
      } else {
        $(this.filterSelector).removeClass(this.filterMinClass);
        $(this.filterSelector).removeClass(this.filterSecondClass);
        this.offOnlyFirstMode();


        $('select').each((i, item) => {
          if($(item).val() === 'second') {
            $(this.filterSelector).addClass(this.filterSecondClass);
          }
          if($(item).val() === 'property') {
            $(this.filterSelector).addClass(this.filterMinClass);
            this.onOnlyFirstMode();
          }
        });
      }
    });

    // ----------------------------
    // Events
    // ----------------------------
    $(this.openTrigger).on('click', () => this.openFilter());
    $(this.closeTrigger).on('click', () => this.closeFilter());
  }
  changeCurrency () {
    $(this.filterCurrency).parent(':hidden').find('input').attr('disabled', true);
    $(this.filterCurrency).parent(':visible').find('input').attr('disabled', false);
  }


  openFilter() {
    $(this.filterSelector).fadeIn('fast');
  }

  closeFilter() {
    $(this.filterSelector).fadeOut('fast');
  }
}
