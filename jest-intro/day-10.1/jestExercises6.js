const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
console.log(myFizzBuzz('hi'));

// implemente seus testes aqui

//assert.equal(myFizzBuzz(15), 'fizzbuzz');
//assert.equal(myFizzBuzz(9), 'fizz');
//assert.equal(myFizzBuzz(5), 'buzz');
//assert.equal(myFizzBuzz(7), 7);
assert.equal(myFizzBuzz('hi'), false);