/*eslint no-unused-expressions:0 */
'use strict';

import Footer from '../footer';

describe('Footer View', function() {

  beforeEach(() => {
    this.footer = new Footer();
  });

  it('Should run a few assertions', () => {
    expect(this.footer).to.exist;
  });

});
