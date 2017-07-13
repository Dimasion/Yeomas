'use strict';

import Item from '../item';

describe('Item View', function() {

  beforeEach(() => {
    this.item = new Item();
  });

  it('Should run a few assertions', () => {
    expect(this.item);
  });

});
