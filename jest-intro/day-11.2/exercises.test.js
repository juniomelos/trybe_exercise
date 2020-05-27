const exercises = require('./exercises');

// Exercise 1
test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  exercises.randomNumber = jest.fn().mockReturnValue(10);

  expect(exercises.randomNumber()).toBe(10);
  expect(exercises.randomNumber).toHaveBeenCalled();
  expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
});
