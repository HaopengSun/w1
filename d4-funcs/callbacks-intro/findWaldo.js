const findWaldo = function(names, found) {
  let index = 0;
  names.forEach(element => {
    index += 1;
    if (element === "Waldo"){
      found(index);
    }
  });
}

const actionWhenFound = function(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);