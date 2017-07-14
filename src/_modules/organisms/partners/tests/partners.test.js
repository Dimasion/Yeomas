'use strict';

import Partners from '../partners';

describe('Partners View', function() {

  beforeEach(() => {
    this.partners = new Partners();
  });

  it('Should run a few assertions', () => {
    expect(this.partners);
  });

});
