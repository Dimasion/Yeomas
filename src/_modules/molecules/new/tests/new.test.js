'use strict';

import New from '../new';

describe('New View', function() {

  beforeEach(() => {
    this.new = new New();
  });

  it('Should run a few assertions', () => {
    expect(this.new);
  });

});
