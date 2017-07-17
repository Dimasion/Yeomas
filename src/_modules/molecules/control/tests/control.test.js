'use strict';

import Control from '../control';

describe('Control View', function() {

  beforeEach(() => {
    this.control = new Control();
  });

  it('Should run a few assertions', () => {
    expect(this.control);
  });

});
