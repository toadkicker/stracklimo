/*eslint no-unused-expressions:0 */
'use strict';

import Appstorelinks from '../appstorelinks';

describe('Appstorelinks View', function() {

  beforeEach(() => {
    this.appstorelinks = new Appstorelinks();
  });

  it('Should run a few assertions', () => {
    expect(this.appstorelinks).to.exist;
  });

});
