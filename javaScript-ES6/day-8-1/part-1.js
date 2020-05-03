// exercise 1

function checkScope() {
  let i = 'function scope';
  if (i == true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// exercise 2

function printManyTimes(str) {
  'use strict';

  // change code below this line

  const SENTENCE = str + ' is cool!';
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  // change code above this line
}
printManyTimes('freeCodeCamp');

// exercise 3

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();

// exercise 4

function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// exercise 5

const magic = () => new Date();

// exercise 6

const myConcat = (arr1, arr2) => arr1.concat(arr2);
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

//exercise 7

const increment = (function () {
  'use strict';
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));

// exercise 8

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3)); // 6

// exercise 9

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

(function () {
  arr2 = [...arr1];
})();
console.log(arr2);
