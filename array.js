let fruits = ["Apple", "Banana"];

// console.log(fruits.length);
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length - 1]);

// fruits.push('Orange'); //adding item at the end
// fruits.push('watermelon');
// console.log(fruits);

// fruits.unshift('Strawberry'); //adding item at the beginning
// fruits.unshift('grapes');
// console.log(fruits);

fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

// fruits.forEach(item=>{
//     console.log(item);
// });

// fruits.pop(); //remove item from end
// console.log(fruits);

// fruits.shift(); //remove item from beginning
// console.log(fruits);

// let i=fruits.indexOf("Orange");
// console.log(i);
// let removed=fruits.splice(i);
// console.log(fruits);

// console.log(removed);

// let j=fruits.indexOf("Strawberry");

// let r=fruits.splice(j,2);
// console.log(fruits);

// console.log(r);

// fruits[4]="Orange";
// console.log(fruits);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// console.log(fruits[6]);

// fruits.length=3;
// console.log(Object.keys(fruits));
// console.log(fruits);

// let array1 = [1,2,3]
// let array2 = array1;
// array1[1] = 9;
// console.log(array2);
// array2[2] = 7;
// console.log(array1);
// let array3 = [...array1];
// console.log(array3);
// array3[0]=5;
// console.log(array1);
// console.log(array3);

// let arr4= array3.slice();
// console.log(arr4);

// let arr5= Array.from(array1);
// console.log(arr5);

// const a=[1,2,3,4,5,6,7];
// const b=a.filter(item=>item>5);
// console.log(b);
// console.log(a);

// const c=[1,2,3,4,5,6,7];
// const d=c.map(item=>item + 5);
// console.log(d);
// console.log(c);

// const aa=[1,2,4,7,5];
// const result=aa.some(item=>item>2);
// console.log(result);

//
//
// const groupedproduct = m.reduce(
//   (item, prop) =>
//     item.set(prop.rating, [...(item.get(prop.rating) || []), prop.title]),
//   new Map()
// );
// console.log(groupedproduct);
