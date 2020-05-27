const service = require('./exercises45');
jest.mock('./exercises45');

//  Exercise 4

test('Retornar a string em caixa baixa.', () => {
  service.strUpperCase.mockImplementation(str => str.toLowerCase());
  
  expect(service.strUpperCase('CANSADO')).toBe('cansado');
  expect(service.strUpperCase).toHaveBeenCalled();
  expect(service.strUpperCase).toHaveBeenCalledTimes(1);
  expect(service.strUpperCase).toHaveBeenCalledWith('CANSADO');
});

test('Retornar a última letra de uma string.', () => {
  service.strFirstLetter.mockImplementation(str => str.charAt(str.length - 1));

  expect(service.strFirstLetter('str')).toBe('r');
  expect(service.strFirstLetter).toHaveBeenCalled();
  expect(service.strFirstLetter).toHaveBeenCalledTimes(1);
  expect(service.strFirstLetter).toHaveBeenCalledWith('str');
});

test('Receber três strings e concatená-las.', () => {
  service.strConcatenated.mockImplementation((a, b, c) => a.concat(b, c));

  expect(service.strConcatenated('can', 'sa', 'do')).toBe('cansado');
  expect(service.strConcatenated).toHaveBeenCalled();
  expect(service.strConcatenated).toHaveBeenCalledTimes(1);
  expect(service.strConcatenated).toHaveBeenCalledWith('can', 'sa', 'do');
});

//  Exercise 5

test('Restaure a implementação original da primeira função e crie os testes.', () => {
  
  expect(service.strUpperCase('cansado')).toBe('CANSADO');
  
  const functionUpperCase = jest
    .spyOn(service, 'strUpperCase')
    .mockImplementation(str => str.toLowerCase());

  expect(functionUpperCase('CANSADO')).toBe('cansado');
  expect(functionUpperCase).toHaveBeenCalled();
  expect(functionUpperCase).toHaveBeenCalledTimes(2);
  expect(functionUpperCase).toHaveBeenCalledWith('CANSADO');

  service.strUpperCase.mockRestore();
  expect(service.strUpperCase('cansado')).toBe('CANSADO');
});
