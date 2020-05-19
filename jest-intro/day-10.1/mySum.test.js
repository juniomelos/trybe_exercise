const mySum = require('./mySum');

describe('Teste mySum', () => {

  test('sum of elements', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
  });

  test('sum of elements with error', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0);
  });
});

