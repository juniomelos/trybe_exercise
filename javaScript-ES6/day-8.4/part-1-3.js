const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:

var addAllnumbers = (numbers) => numbers.reduce((addAllnumbers, numbers) => addAllnumbers + numbers, 0);

//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
