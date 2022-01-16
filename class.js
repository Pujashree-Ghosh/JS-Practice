class Car {
    constructor(brand) {
    
      this.carname = brand;
    }
  }
let mycar = new Car("Audi")

console.log(mycar);
console.log( "I have bought an " + mycar.carname );


  class Bike {
    constructor(name, color) {
      this.n = name;
      this.c = color;
    }
  }

  
let mybike1 = new Bike("Pulser", "Black");
let mybike2 = new Bike("Royal Enfield", "Blue");

console.log(mybike1);
console.log(mybike2);

console.log( "I have a " + mybike1.n + " and a " + mybike2.n );