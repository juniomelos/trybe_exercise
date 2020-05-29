const service = require('./exercises4');

test('Restaure a implementação original da primeira função e crie os testes.', () => {
    
  const functionUpperCase = jest
    .spyOn(service, 'strUpperCase')
    .mockImplementation(str => str.toLowerCase());

  expect(functionUpperCase('CANSADO')).toBe('cansado');
  expect(functionUpperCase).toHaveBeenCalled();
  expect(functionUpperCase).toHaveBeenCalledTimes(1);
  expect(functionUpperCase).toHaveBeenCalledWith('CANSADO');

  service.strUpperCase.mockRestore();
  expect(service.strUpperCase('cansado')).toBe('CANSADO');
});
