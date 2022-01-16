
// call method-function borrowing

//1st way


// var obj = {
//     firstname: "Pujashree",
//     lastname: "Ghosh",
//     city: "Berhampore",
 
//     fullname: function(){
//         console.log( this.firstname + " " +  this.lastname);
//     }
// }
// obj.fullname();

// let obj1={
//     firstname: "Debolina",
//     lastname: "Ghosh"
// }

// obj.fullname.call(obj1);


//2nd way

var obj = {
    firstname: "Jharna",
    lastname: "Pradhan",
    city: "Jamshedpur"
}
let fname= function(state, country ){
    console.log( this.firstname + " " +  this.lastname + " from " + this.city + " of " + state + " , " + country);
}
fname.call(obj, "Jharkhand", "India");

// let obj1={
//     firstname: "Ananya",
//     lastname: "Ghosh"   //this will throw undefined as city is a property here 
// }

let obj1={
    firstname: "Ananya",
    lastname: "Ghosh",
    city: "kolkata"
}

fname.call(obj1, "West Bengal");

//Apply method 

fname.apply(obj1,["West Bengal","India"]);

//bind method (to bind the method by keeping a copy for later use)

let printobj=fname.bind(obj, "West Bengal","India");

console.log(printobj);
printobj();
