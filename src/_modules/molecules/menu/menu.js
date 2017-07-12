'use strict';
export default class Menu {
  constructor(name) {
    this.name = name || 'Menu';
    this.count = 0;
  }

  sayName () {
    alert(this.name);
  }

  increment () {
    this.count++;
    console.log(this.count);
  }
}
