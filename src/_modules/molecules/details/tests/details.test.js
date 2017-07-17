'use strict';

import Details from '../details';

describe('Details View', function() {

  beforeEach(() => {
    this.details = new Details();
  });

  it('Should run a few assertions', () => {
    expect(this.details);
  });

});
