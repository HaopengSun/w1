const raisinAlarm = function(cookie) {
  for (const element of cookie){
    if (element === "🍇"){
      return 'Raisin alert!';
    }
  }
  return 'All good!'
};

const raisinAlarmArray = function(cookie) {
  let resultArray = [];
  for (const element of cookie){
    resultArray.push(raisinAlarm(element));
  }
  return resultArray;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));