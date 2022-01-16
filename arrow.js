// Traditional Anonymous Function

var x = function (a) {
    return a + 100;
};
console.log(x(4));

// Arrow Function Break Down

var y = (a) => {
    return a + 100;
}
console.log(y(50));


//or

var z=(a) => a + 100;
console.log(z(80));

//or

var p=a => a + 100;
console.log(p(55));


//arrow functions as methods

var obj = { 
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i);
  }
}

obj.b();
obj.c(); 
