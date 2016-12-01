import {Component, ChangeDetectionStrategy} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'ecma-hello',
    template: require('./hello-world.component.html'),

})
export class HelloEcmaComponent{

    constuctor(){

    }

// let



 letTest() {
     
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

// const
 constTest() {
    const MY_FAV = 7;

// this will throw an error
//MY_FAV = 20; 
  
  console.log(MY_FAV);  // 1
}



// this

//  call apply


// classes

// Component is  class which act as a container


/*
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}*/


//inheritence


/*
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();
*/

// modules

// promises
/*
 msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
msgAfterTimeout("", "Foo", 100).then((msg) =>
    this.msgAfterTimeout(msg, "Bar", 200)
).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})
*/

// set and map

// destructure
destuctureTest(){
    
var list = [ 1, 2, 3 ]
var [ a, , b ] = list
[ b, a ] = [ a, b ]

}

// arrow functions

arrowFucTest(){

nums.forEach(v => {
   if (v % 5 === 0)
       fives.push(v)
})

}

// rest & spread operator

// string interpolation

// generators




}