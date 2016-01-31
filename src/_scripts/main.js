// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import jQuery from 'jquery';
import 'bootstrap';
import 'parallax';
import Link from '../_modules/link/link';
import Header from '../_modules/header/header';
import Navbar from '../_modules/navbar/navbar';
import Carousel from '../_modules/carousel/carousel';
import Footer from '../_modules/footer/footer';

jQuery(() => {
  new Link(); // Activate Link modules logic
  new Header(); // Activate Header modules logic
  new Footer(); // Activate Footer modules logic
});
