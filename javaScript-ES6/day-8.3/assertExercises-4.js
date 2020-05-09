const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
  return newArr;

}

const expectedFour = myRemove([1, 2, 3, 4], 3);

// implemente seus testes aqui

//assert.equal(expectedFour, [1, 2, 3, 4]);
assert.notDeepEqual(expectedFour, [1, 2, 4]); //AssertionError [ERR_ASSERTION]: [ 1, 2, 4 ] notDeepEqual [ 1, 2, 4 ]
