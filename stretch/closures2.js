const wrapLog = function (callback, name) {
  if (name === 'area'){
    return function(x, y){
      console.log(callback(x, y));
    }
  }
  if (name === 'volume'){
    return function(x, y, z){
      console.log(callback(x, y, z));
    }
  }
};

const area = function (x, y) {
  return x * y;
};

const logArea = wrapLog(area, "area");
logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24


// examples of arguments:
// function func1(a, b, c) {
//   // return an object
//   console.log(typeof arguments);
//   console.log(arguments);
//   // return an array
//   var args = Array.prototype.slice.call(arguments);
//   console.log(args);
//   let args1 = [...arguments];
//   console.log(args1);
// }
// func1(1, 2, 3);


// examples of closures:
// function multiplier(factor) {
//   return number => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(5)); // log: 10

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// console.log(add5(2));  // 7
// console.log(add10(2)); // 12