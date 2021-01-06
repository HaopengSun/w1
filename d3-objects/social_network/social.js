const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const biggestFollower = function(obj){
  let followsNumber = 0;
  let biggestFollower = '';
  for (const key in obj){
    const follows = obj[key].follows;
    if (follows.length > followsNumber){
      followsNumber = follows.length;
      biggestFollower = obj[key].name;
    }
  }
  return biggestFollower;
}

console.log('The biggest follower is ' + biggestFollower(data));

const mostPopular = function(obj){
  let totalFollowers = [];
  for (const key in obj){
    let follows = obj[key].follows;
    for (const follow of follows){
      totalFollowers.push(follow);
    }
  }
  return frequency(totalFollowers, obj);
}

const frequency = function(arr, obj){
  const frequency = {};
  for (const element of arr){
    if (frequency[element]){
      frequency[element] += 1;
    } else {
      frequency[element] = 1;
    }
  }
  // find out most followed number
  let mostNum = 0;
  for (const key in frequency){
    if (frequency[key] > mostNum){
      mostNum = frequency[key];
    }
  }
  // push the persons who have that mount of follows into array
  let mostFrequency = [];
  for (const key in frequency){
    if (frequency[key] === mostNum){
      mostFrequency.push(obj[key]['name']);
    }
  }
  return mostFrequency;
}

console.log('The most popular people are ' + mostPopular(data).join(",") + '.');

const printAll = function(obj){
  const all = [];
  // build the structure of all object
  for (const key in obj){
    const name = obj[key]['name'];
    all[name] = {follows: [], followed: []}
  }
  // add follows and followed
  for (const key in obj){
    const follows = obj[key]['follows'];
    const name = obj[key]['name'];
    for (const follow of follows){
      all[name]['follows'].push(obj[follow]['name'])
      all[obj[follow]['name']]['followed'].push(name);
    }
  }
  return all;
}

console.log(printAll(data));

const unrequitedFollowers = function(obj){
  const unrequitedFollowers = {};
  const all = printAll(obj);
  for (const key in all){
    unrequitedFollowers[key] = [];
    for (const follow of all[key]['follows']){
      if (!all[key]['followed'].includes(follow)){
        unrequitedFollowers[key].push(follow);
      }
    }
  }
  return unrequitedFollowers;
}

console.log(unrequitedFollowers(data));

const over30MostPopular = function(obj){
  const populars = mostPopular(obj);
  let result = [];
  for (const popular of populars){
    for (const key in obj){
      if (popular === obj[key]['name'] && obj[key]['age'] > 30){
        result.push(popular);
      }
    }
  }
  return result;
}

console.log(over30MostPopular(data));

const over30FollewedMost = function(obj){
  let name = '';
  let most = 0;
  for (const key in obj){
    const number = obj[key]['follows'].length;
    const age = obj[key]['age'];
    if (number > most && age > 30){
      name = obj[key]['name'];
      most = number;
    }
  }
  return name;
}

console.log(over30FollewedMost(data));

const reach = function(obj){
  const reach = {};
  for (const key in obj){
    const name = obj[key]['name'];
    const follows = obj[key]['follows'];
    reach[name] = 0;
    for (const follow of follows){
      reach[name] += obj[follow]['follows'].length;
    }
  }
  return reach;
}

console.log(reach(data));