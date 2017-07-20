// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';
// ------------------------------
// Imports
// ------------------------------
import $ from 'jquery';
window.$ = $;
// import pages from './../_data/pages.json';
require('waypoints/lib/noframework.waypoints.js');
require('slick-carousel/slick/slick.js');
require('jquery-mask-plugin/dist/jquery.mask.js');
require('jquery-touchswipe/jquery.touchSwipe.js');
require('mediaCheck/js/mediaCheck');
// Modules

// Atoms
import Select from './../_modules/atoms/select/select';
import Range from './../_modules/atoms/range/range';
import Input from './../_modules/atoms/input/input';
import Hamburger from './../_modules/atoms/hamburger/hamburger';

// Molecules
import Search from './../_modules/molecules/search/search';
import Item from './../_modules/molecules/item/item';
import Up from './../_modules/molecules/up/up';
import Slider from './../_modules/molecules/slider/slider';
import Modal from './../_modules/molecules/modal/modal';

// Organisms
import Filter from './../_modules/organisms/filter/filter';
import Partners from './../_modules/organisms/partners/partners';
import Product from './../_modules/organisms/product/product';
import ProductContent from './../_modules/organisms/product-content/product-content';
// ------------------------------
// Additional functionality
// ------------------------------

// Crossbrowser plugin for icons
import svg4everybody from 'svg4everybody/dist/svg4everybody.legacy.js';
svg4everybody();

// Data pages
let currentPage = $('body').data('page');

// ------------------------------
// Initialization modules
// ------------------------------
// let product = new Product();
// document.addEventListener('DOMContentLoaded', product.drawMap);
$(() => {
  // Common scripts
  new Select();
  new Search();
  new Input();
  new Slider();
  new Modal();
  new Hamburger();
  new Item();
  new Up();
  if (currentPage === 'home') {
    new Partners();
  }
  if (currentPage === 'product') {
    new ProductContent();
  }
  new Filter();
  new Range();
});
