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
// Modules

// Atoms
import Select from './../_modules/atoms/select/select';
import Range from './../_modules/atoms/range/range';
import Input from './../_modules/atoms/input/input';

// Molecules
import Menu from './../_modules/molecules/menu/menu';
import Search from './../_modules/molecules/search/search';
import Item from './../_modules/molecules/item/item';
import Up from './../_modules/molecules/up/up';
import Slider from './../_modules/molecules/slider/slider';
import Modal from './../_modules/molecules/modal/modal';

// Organisms
import Filter from './../_modules/organisms/filter/filter';
import Partners from './../_modules/organisms/partners/partners';
import Product from './../_modules/organisms/product/product';
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
  new Item();
  new Up();
  if (currentPage === 'home') {
    new Partners();
  }
  new Filter();
  new Range();
});
