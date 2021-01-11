const titleCase = function(str){
  if (str.length === 0){
    return '';
  }
  const divide = str.split(' ');
  const result = divide.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase()).join(' ');
  return result;
}

module.exports = titleCase;