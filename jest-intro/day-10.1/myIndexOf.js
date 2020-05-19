/* 
function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}
*/

const myIndexOf = (arr, item) => arr.findIndex(element => element === item);

module.exports = myIndexOf;


