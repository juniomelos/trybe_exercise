
/* 
function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
*/

const myRemove = (arr, item) => arr.filter((element) => element !== item)

module.exports = myRemove;

