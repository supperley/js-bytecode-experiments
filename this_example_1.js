'use strict'

function Person() {
  this.name = 'Alice';
  this.greet = () => {
    console.log('obj this: ', this);
  }
  console.log('new Person this is: ', this)
}

const obj2 = {
    name: 'Alice',
    greet: () => {
        console.log('obj2 this: ', this);
    }
}

function bc_func() {
	let obj1 = new Person();
	obj1.greet()
	let func = obj1.greet;
	func();

	obj2.greet();
	let func2 = obj2.greet;
	func2();
}

bc_func()