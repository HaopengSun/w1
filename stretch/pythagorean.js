const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(element => (element.x ** 2 + element.y ** 2) ** 0.5);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
