'use strict';

import Content from '../content';

describe('Content View', function() {

  beforeEach(() => {
    this.content = new Content();
  });

  it('Should run a few assertions', () => {
    expect(this.content);
  });

});
