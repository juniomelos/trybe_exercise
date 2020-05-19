function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

module.exports = myIndexOf;
/* 
//const expectedTwo = myIndexOf([1, 2, 3, 4], 3);
const expectedTwo = myIndexOf([1, 2, 3, 4], 5);



//assert.equal(expectedTwo, 2); //ok
assert.equal(expectedTwo, -1); //ok 
*/

