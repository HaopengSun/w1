const nameInverter = function(name) {
  if (name === '') {
    return '';
  }
  if (name === undefined){
    return "throw 'Error'";
  }

  const honorific = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  const result = name.trim();
  if (result.includes(" ")){
    const arr = result.split(" ");
    if (honorific.includes(arr[0])){
      const prefix = arr.shift();
      return prefix + ' ' + arr.join(", ");
    }
    return arr.join(", ");
  } else {
    if (honorific.includes(result)){
      return "";
    }
    return result;
  }
}

module.exports = nameInverter;