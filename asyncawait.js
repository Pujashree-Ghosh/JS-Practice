// async function f() {
//     console.log("async await");
//     return 1;
//   }
//   f().then(alert);
//   var a=f();
//   console.log(a);

// async function f() {
//     console.log("async await");
//     return Promise.resolve(1);        
//   }
//   f().then(alert);
//   var a=f();
//   console.log(a);


async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise done!"), 2000)
    });
  
    let result = await promise; 
    console.log(result);
    console.log("fulfilled");
  }
  
  f();
console.log("pending");