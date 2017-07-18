'use strict';

import Person from '../person';

describe('Person View', function() {

  beforeEach(() => {
    this.person = new Person();
  });

  it('Should run a few assertions', () => {
    expect(this.person);
  });

});
