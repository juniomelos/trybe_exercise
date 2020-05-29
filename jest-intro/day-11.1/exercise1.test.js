const uppercase = (str, callback) => {
    callback(str.toUpperCase());
};

//  1. Escreva um teste que verifique a chamada do callback de uma função uppercase,
//  que transforma as letras de uma palavra em letras maiúsculas.
//  Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

test('Upper case', done => {
  uppercase('home', str => {
    expect(str).toBe('HOME');
    done();
  });
});
