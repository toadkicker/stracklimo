/*eslint no-unused-expressions:0 */
'use strict';

import Startchange from '../startchange';

describe('Startchange View', function() {

  beforeEach(() => {
    this.startchange = new Startchange();
  });

  it('Should run a few assertions', () => {
    expect(this.startchange).to.exist;
  });

});
