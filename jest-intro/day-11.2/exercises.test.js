const exercises = require('./exercises');

/* // Exercise 1
test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  exercises.randomNumber = jest.fn().mockReturnValue(10);

  expect(exercises.randomNumber()).toBe(10);
  expect(exercises.randomNumber).toHaveBeenCalled();
  expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
});
 */

// Exercise 2
test('Deve receber dois parâmetros e retornar divisão do primeiro pelo segundo. Ocorrer uma única vez.', () => {
  exercises.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(exercises.randomNumber(10, 5)).toBe(2);
  expect(exercises.randomNumber).toHaveBeenCalled();
  expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
});
