const assert = require('assert')

// escreva sum abaixo

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

/* 
const sum = (...numbers) => {
  let num = 0;
  for(i of numbers) {
    num += i;
  }
  console.log(num)
  return num;
}
*/
assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    
//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
//Dica: use parâmetro rest.