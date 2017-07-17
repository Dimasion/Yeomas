'use strict';

import Socials from '../socials';

describe('Socials View', function() {

  beforeEach(() => {
    this.socials = new Socials();
  });

  it('Should run a few assertions', () => {
    expect(this.socials);
  });

});
