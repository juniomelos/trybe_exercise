const servise = require('./exercises45');
jest.mock('./exercises45');

//  Exercise 4

test('Retornar a string em caixa baixa', () => {
  servise.strUpperCase.mockImplementation(str => str.toLowerCase());

  expect(servise.strUpperCase('UPPERCASE')).toBe('uppercase');
  expect(servise.strUpperCase).toHaveBeenCalled();
  expect(servise.strUpperCase).toHaveBeenCalledTimes(1);
  expect(servise.strUpperCase).toHaveBeenCalledWith('UPPERCASE');
})

test('Retornar a última letra de uma string.', () => {
  servise.strFirstLetter.mockImplementation(str => str.charAt(str.length - 1));

  expect(servise.strFirstLetter('str')).toBe('r');
  expect(servise.strFirstLetter).toHaveBeenCalled();
  expect(servise.strFirstLetter).toHaveBeenCalledTimes(1);
  expect(servise.strFirstLetter).toHaveBeenCalledWith('str');
})