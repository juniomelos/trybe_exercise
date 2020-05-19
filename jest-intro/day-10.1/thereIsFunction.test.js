const thereIsfunction = require('./thereIsfunction');

describe('Teste thereIsfunction', () => {

  test('verify that it is not a function', () => {
    expect(typeof(thereIsfunction)).toBe('function');
  });
});