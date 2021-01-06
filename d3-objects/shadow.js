const obj = {a:{b:2}};
const newObj = {...obj};
newObj.a.b = 4;
console.log(newObj, obj);

const obj1 = {a:2};
const newObj1 = {...obj1};
newObj1.a = 4;
console.log(newObj1, obj1);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }