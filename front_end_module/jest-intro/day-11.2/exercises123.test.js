const service = require('./exercises123');

// //  Exercise 1
// test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
//   service.randomNumber = jest.fn().mockReturnValue(10);

//   expect(service.randomNumber()).toBe(10);
//   expect(service.randomNumber).toHaveBeenCalled();
//   expect(service.randomNumber).toHaveBeenCalledTimes(1);
// });

// //  Exercise 2
// test('Deve receber dois parâmetros e retornar divisão do primeiro pelo segundo. Ocorrer uma única vez.', () => {
//   service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

//   expect(service.randomNumber(10, 5)).toBe(2);
//   expect(service.randomNumber).toHaveBeenCalled();
//   expect(service.randomNumber).toHaveBeenCalledTimes(1);
//   expect(service.randomNumber).toHaveBeenCalledWith(10, 5);

// });

//  Exercise 3

test('Receba três parâmetros e retorne sua multiplicação.', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(service.randomNumber(3, 3, 3)).toBe(27);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(3, 3, 3);
});

test('Receba um parêmetro e retorne seu dobro', () => {
  service.randomNumber.mockReset();

  service.randomNumber.mockImplementation(a => a * 2);

  expect(service.randomNumber(7)).toBe(14);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
  expect(service.randomNumber).toHaveBeenCalledWith(7);
});
