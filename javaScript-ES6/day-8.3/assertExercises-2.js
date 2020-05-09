const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

//const expectedTwo = myIndexOf([1, 2, 3, 4], 3);
const expectedTwo = myIndexOf([1, 2, 3, 4], 5);


// implemente seus testes aqui

//assert.equal(expectedTwo, 2); //ok
assert.equal(expectedTwo, -1); //ok

