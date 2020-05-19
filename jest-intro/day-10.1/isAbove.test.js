const isAbove = require('./isAbove');

describe('Teste isAbove', () => {

  test('check if num1 > num2', () => {
    expect(isAbove(5, 1)).toBe(true);
  });
});