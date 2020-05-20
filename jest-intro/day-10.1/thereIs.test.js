const thereIs = require('./thereIs');

describe('Teste thereIs', () => {
  test('variable thereIs must not be undefined', () => {
    expect(typeof thereIs).not.toBe('undefined');
  });
});
