function madLib(verb, adjective, noun) {
  console.log("We shall ${verb.toUpperCase()} the ${adjective.toUpperCase()} ${noun.toUpperCase()}.");
}


function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}


function fizzbuzz(array) {
  var fibi = []

  array.forEach(el => {
    if ((el % 3 === 0) || (el % 5 === 0)) {
      fibi.push(el)
    }
  })
}

function isPrime(num) {
  if (n < 2) {return false;}

  for(let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}

function sumOfNPrimes(n) {
  var sum = 0;
  var count = 0;
  i = 2;

  while (count < n) {
    if isPrime(i) {
      sum += i;
      count ++ 1;
    }
    i += 1;
  }
  return sum;
}

function titelize(names, callback) {
  let titelize = names.map(name => 'Mx. ${name} Jingleheimer Schmidt');
  callback(titelize);
}

functino callback = (names) => {
  names.forEach (name => console.log(name));
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height = this.height + 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
};

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};
