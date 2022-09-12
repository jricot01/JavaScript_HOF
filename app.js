console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
  return function (plusNumber) {
    return number + plusNumber;
  };
}

plus15 = plus(15);
console.log(plus15(10));

console.log("EXERCISE 2-6:\n==========\n");
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

console.log("EXERCISE 2:\n==========\n");

function userName(user) {
  console.log(user.name);
}

users.forEach(userName);

console.log("EXERCISE 3:\n==========\n");

function trimUser(user) {
  return {
    name: user.name,
    score: user.score,
  };
}

console.log(users.map(trimUser));

console.log("EXERCISE 4:\n==========\n");

function filterUser(user) {
  return user.isActive === true;
}

console.log(users.filter(filterUser));

console.log("EXERCISE 5:\n==========\n");

users.sort(function (a, b) {
  return b.score - a.score;
});

console.log(users);

console.log("EXERCISE 6:\n==========\n");
let totalScore = users.reduce((sum, score) => {
  return sum + score.score;
}, 0);

console.log(totalScore);

console.log("EXERCISE 6:\n==========\n");

console.log(totalScore / users.length);
