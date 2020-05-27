const servise = require('./exercises123');

// //  Exercise 1
// test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
//   servise.randomNumber = jest.fn().mockReturnValue(10);

//   expect(servise.randomNumber()).toBe(10);
//   expect(servise.randomNumber).toHaveBeenCalled();
//   expect(servise.randomNumber).toHaveBeenCalledTimes(1);
// });

// //  Exercise 2
// test('Deve receber dois parâmetros e retornar divisão do primeiro pelo segundo. Ocorrer uma única vez.', () => {
//   servise.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

//   expect(servise.randomNumber(10, 5)).toBe(2);
//   expect(servise.randomNumber).toHaveBeenCalled();
//   expect(servise.randomNumber).toHaveBeenCalledTimes(1);
//   expect(servise.randomNumber).toHaveBeenCalledWith(10, 5);

// });

//  Exercise 3

test('Receba três parâmetros e retorne sua multiplicação.', () => {
  servise.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(servise.randomNumber(3, 3, 3)).toBe(27);
  expect(servise.randomNumber).toHaveBeenCalled();
  expect(servise.randomNumber).toHaveBeenCalledTimes(1);
  expect(servise.randomNumber).toHaveBeenCalledWith(3, 3, 3);
});

test('Receba um parêmetro e retorne seu dobro', () => {
  servise.randomNumber.mockReset();

  servise.randomNumber.mockImplementation(a => a * 2);

  expect(servise.randomNumber(7)).toBe(14);
  expect(servise.randomNumber).toHaveBeenCalled();
  expect(servise.randomNumber).toHaveBeenCalledTimes(1);
  expect(servise.randomNumber).toHaveBeenCalledWith(7);
});
