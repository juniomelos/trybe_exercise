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
