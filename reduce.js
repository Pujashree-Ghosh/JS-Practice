// const e=[1,2,3,4,5,6,7];
// const f=e.reduce((total, value)=> total + value, 0);
// console.log(f);

const student = [
  { name: "Pujashree", Age: 27 },
  { name: "Jharna", Age: 25 },
  { name: "Lina", Age: 20 },
  { name: "Pujashree", Age: 30 },
  { name: "Lina", Age: 26 },
  { name: "Ananya", Age: 27 },
  { name: "Lina", Age: 18 },
];
const grp = student.reduce((grpdstdnt, stdnt) => {
  const n = stdnt.name;
  const a = stdnt.Age;
  console.log(grpdstdnt[n]);
  // if (grpdstdnt[n] == null) grpdstdnt[n] = [a];
  return grpdstdnt;
}, {});
console.log(grp);
