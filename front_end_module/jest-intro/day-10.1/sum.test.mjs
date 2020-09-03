
/* const sum = require('./sum');
 */

import  sum from './sum.mjs'


describe('Testes sum', () => {

  test('4 more 5 equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 more 0 equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5') }).toThrow();
  });

  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5') }).toThrow(/parameters must be numbers/);
  });

});