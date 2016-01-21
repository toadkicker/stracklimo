/*eslint no-unused-expressions:0 */
'use strict';

import Carousel from '../carousel';

describe('Carousel View', function() {

  beforeEach(() => {
    this.carousel = new Carousel();
  });

  it('Should run a few assertions', () => {
    expect(this.carousel).to.exist;
  });

});
