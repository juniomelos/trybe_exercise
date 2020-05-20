const myIndexOf = require('./myIndexOf');

describe('Testes myIndexOf', () => {
  test('returns the item in the informed position', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  });
  test('if you dont have the position, return -1', () => {
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
});
