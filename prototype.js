// constructor function
function Person() {
  (this.name = "John"), (this.age = 23);
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// checking the prototype value
// console.log(person1.prototype);

// adding property to constructor function
Person.prototype.gender = "male";

// // prototype value of Person
console.log(Person.prototype);
console.log(Person);
console.log(Person.gender);
// inheriting the property from prototype

console.log(person1.gender);
console.log(person2.gender);

// changing the property value of prototype

Person.prototype = { gender: "female" };

console.log(person1.gender);
console.log(Person.gender);
const person3 = new Person();
console.log(person3.gender);

// person3.gender= "female" ;
// console.log(person3.gender);

// console.log(person1.age);

// // adding property
// Person.prototype.name = 'Peter';
// Person.prototype.height = 5;

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.gender);
// console.log(person1.height);

// console.log(person2.name);
// console.log(person1.age);
// console.log(person1.gender);
// console.log(person2.height);

// console.log(person3.name);
// console.log(person1.age);
// console.log(person1.gender);
// console.log(person3.height);

// // adding a method to the constructor function
// Person.prototype.greet = function() {
//     console.log('hello' + ' ' +  this.name);
// }

// person1.greet();
// person2.greet();
