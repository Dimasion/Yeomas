'use strict';

import Phone from '../phone';

describe('Phone View', function() {

  beforeEach(() => {
    this.phone = new Phone();
  });

  it('Should run a few assertions', () => {
    expect(this.phone);
  });

});
