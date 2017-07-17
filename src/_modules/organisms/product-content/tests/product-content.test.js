'use strict';

import ProductContent from '../product-content';

describe('ProductContent View', function() {

  beforeEach(() => {
    this.productContent = new ProductContent();
  });

  it('Should run a few assertions', () => {
    expect(this.productContent);
  });

});
