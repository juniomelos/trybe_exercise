const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expectedOne = sum(4, '5');


// implemente seus testes aqui

//assert.equal(expectedOne, 9);
assert.deepStrictEqual(expectedOne, 9); //Error: parameters must be numbers