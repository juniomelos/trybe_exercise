const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('Teste myRemoveWithoutCopy', () => {

  test('return array without 3', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('return array case element dont exist', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  test('check array is not the same', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});


/* //const expectativeFive  = myRemoveWithoutCopy([1, 2, 3, 4], 3);
const expectativeFive  = myRemoveWithoutCopy([1, 2, 3, 4], 5);

// implemente seus testes aqui

//assert.ok(expectativeFive, [1, 2, 4]);
//assert.notEqual(expectativeFive, [1, 2, 3, 4]);
assert.ok(expectativeFive, [1, 2, 3, 4]);
 */