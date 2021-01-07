const findWaldo = function(names, found) {
  let index = 0;
  names.forEach(element => {
    if (element === "Waldo"){
      found(index);
    }
    index += 1;
  });
}

const actionWhenFound = function(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);