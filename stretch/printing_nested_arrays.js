const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  }
}

// using iteration instead of recursion
const printItems1 = function(array) {
  while (array.length > 0) {
    // return the first element of the array and the origin array lost the first element
    const element = array.shift();

    if (Array.isArray(element)) {
      element.reverse().forEach((newElement)=> {
        array.unshift(newElement);
      });
    } else {
      console.log(element);
    }
  }
}

// const array = ["😎", "💩", "🤗", "😼", "😂"];
const array = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array);