const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  console.log(arr)
  return arr;
}

//const expectativeFive  = myRemoveWithoutCopy([1, 2, 3, 4], 3);
const expectativeFive  = myRemoveWithoutCopy([1, 2, 3, 4], 5);

// implemente seus testes aqui

//assert.ok(expectativeFive, [1, 2, 4]);
//assert.notEqual(expectativeFive, [1, 2, 3, 4]);
assert.ok(expectativeFive, [1, 2, 3, 4]);
