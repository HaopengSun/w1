function makeIdGenerator() {
  let id = 0;
  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}

// makeIdGenerator returns a function which is assigned to
// the variable nextId
// const nextId = makeIdGenerator();

// console.log(nextId()); // Logs: 1
// console.log(nextId()); // Logs: 2

const rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

// console.log('random rollDie:', rollDie());  // 1 (for example)

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let index = 0;

  return function() {
    let result = list[index];
    index += 1;
    return result;
  }
}

const rollLoadedDie = makeLoadedDie();

// console.log(rollLoadedDie());  // 5
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6

const countdownGenerator = function (x) {
  let countdown = 0;
  return function(){
    let second = x - countdown;
    if (second > 0){
      console.log("T-minus " + second + "...");
    } else if (second === 0){
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    countdown++;
  }
};

const countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!

