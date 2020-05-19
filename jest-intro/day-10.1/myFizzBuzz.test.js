const myFizzBuzz = require('./myFizzBuzz');

describe('Teste myFizzBuzz', () => {

  test('return fizzbuzz, if number is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('return fizz, if number is divisible only by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('return buzz, if number is divisible only by 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  test('return number, if number is not divisible by 3 and 5', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  test('return false, if element is not number', () => {
    expect(myFizzBuzz('hi')).toBe(false);
  });
});
