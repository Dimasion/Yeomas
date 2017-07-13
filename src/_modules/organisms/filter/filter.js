'use strict';
import RangeTabs from '../../molecules/range-tabs/range-tabs';
export default class Filter extends RangeTabs {
  constructor() {
    super();
    this.filterSelector = '.o-filter';
    this.filterCurrency = '.js-filter-currency';
    this.filterMinClass = 'o-filter--min';
    this.custommizationTabs = '.js-customization';
    
    this.initFilter();
    this.minValues = ['property'];
  }

  initFilter () {
    this.changeCurrency();
    $(document).on('currencyChange', (event) => {
      this.changeCurrency();
    });
    $(document).on( 'onChangeSelectType', ( event, value ) => {
      let some = this.minValues.some((item) => {
        return item === value;
      });

      if (some) {
        $(this.filterSelector).addClass(this.filterMinClass);
        this.onOnlyFirstMode();
      }
      else {
        $(this.filterSelector).removeClass(this.filterMinClass);
        this.offOnlyFirstMode();
      }
    });
  }
  changeCurrency () {
    $(this.filterCurrency).parent(':hidden').find('input').attr('disabled', true);
    $(this.filterCurrency).parent(':visible').find('input').attr('disabled', false);
  }
}
