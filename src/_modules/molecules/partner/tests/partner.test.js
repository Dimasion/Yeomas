'use strict';

import Partner from '../partner';

describe('Partner View', function() {

  beforeEach(() => {
    this.partner = new Partner();
  });

  it('Should run a few assertions', () => {
    expect(this.partner);
  });

});
