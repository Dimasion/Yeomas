'use strict';

import Hamburger from '../hamburger';

describe('Hamburger View', function() {

  beforeEach(() => {
    this.hamburger = new Hamburger();
  });

  it('Should run a few assertions', () => {
    expect(this.hamburger);
  });

});
