const args = process.argv.slice(2);
function sum(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += Number(string[i]);
  }
  return sum;
}
console.log(sum(args));