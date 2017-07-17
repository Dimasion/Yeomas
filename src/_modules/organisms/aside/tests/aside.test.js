'use strict';

import Aside from '../aside';

describe('Aside View', function() {

  beforeEach(() => {
    this.aside = new Aside();
  });

  it('Should run a few assertions', () => {
    expect(this.aside);
  });

});
