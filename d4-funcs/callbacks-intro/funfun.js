const dragonEvents = [
  {type: 'attack', value: 22, target:"player-dorman"},
  {type: 'yawn', value: 40},
  {type: 'est', target:"player-horse"},
  {type: 'attack', value: 22, target:"player-fluffykins"},
  {type: 'attack', value: 22, target:"player-dorman"},
];

const totalDemageOnDorman = dragonEvents
// return implicitly when the function has one statement
// omit parenthesis when the function has one parameter
  .filter(event => event.type === "attack" && event.target === "player-dorman")
  .map(event => event.value)
  .reduce((prev, value) => (prev || 0) + value);

console.log(totalDemageOnDorman);

// arrow function, single-propose, consice, inline