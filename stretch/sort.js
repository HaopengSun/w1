// Sorting an array in numerical order
const array1 = [10, 2, 5, 1, 9];
console.log(array1.sort((a,b) => a - b ));

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const resutl = students
  .sort((a, b) => (a.name > b.name) ? 1 
  : ((b.name > a.name) ? -1 
  : (b.age - a.age)));

console.log(resutl);