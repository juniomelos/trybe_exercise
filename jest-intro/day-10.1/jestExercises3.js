const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

//const expectedTree =  mySum([1, 2, 3, 4]);
const expectedTree = mySum([1, -2, -3, 4]);

// implemente seus testes aqui

//assert.equal(expectedTree, 10); //ok
assert.equal(expectedTree, 10); //AssertionError [ERR_ASSERTION]: 0 == 10
