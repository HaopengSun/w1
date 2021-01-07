const findWaldo = function(names, found) {
  let index = 0;
  names.forEach(element => {
    if (element === "Waldo"){
      found(index);
    }
    index += 1;
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Found Waldo at index " + index + "!");
});