const myRemove = require('./myRemove');

describe('Teste myRemove', () => {

  test('returns a new array without the element', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });

  test('returns a new array without the element', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});