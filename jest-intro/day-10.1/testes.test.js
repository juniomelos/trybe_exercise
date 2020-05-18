


























const calcs = require('./exemplosCalcs');
const array = require('./exemplosArray');

describe('Suíte de Testes dos Exemplos', () => {
  test('soma 1 e 2 para dar 3', () => {
    expect(calcs.sum(1, 2)).toEqual(3);
  });

  test('divide 10 por 3 para dar 3.33...', () => {
    expect(calcs.division(10, 3)).toBeCloseTo(3.33);
  });

  test('retorna apenas os pares no array', () => {
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let array2 = [2, 4, 6, 8, 10]
    expect(array.retornePares(array1)).toEqual(array2)
 });

  test('to contain', () => {
    let arraycont = ['item1', 'item2', 'item3'];
    expect(array.addItem4(arraycont)).toContain('item4');
  });

  test('3 mais 3', () => {
    let valor = 3 + 3
    expect(valor).toBeGreaterThan(5) ///maior que 5
    expect(valor).toBeGreaterThanOrEqual(6) ///maior ou igual a 6
    expect(valor).toBeLessThan(8) ///menor que 8
    expect(valor).toBeLessThanOrEqual(7) ///menor ou igual a 7
    expect(valor).not.toEqual(5) ///não igual a 5
  })
});

//  Acima adicionamos mais um require de outro arquivo, e também mais um teste.
//  Perceba agora que nós pulamos os dois primeiros testes com o .skip e usamos
//  variáveis para o .toEqual e o expect não ficarem muito grandes e confusos.

//  “Tem como pular vários testes de uma só vez?” Sim!

//  describe.skip('Suíte de Testes', () => {}

//  O describe (na linha 4) pode ser usado para agrupar vários testes em uma suíte.
//  Você também pode colocar um .skip nele para pular vários testes sem
//  precisar adicionar o pulo em cada um deles.

//  O .toContain é usado quando você espera que um certo array contenha um certo elemento.
//  No caso acima, o array declarado não tem o ‘item4’, mas após a chamada da função addItem4, 
//  é esperado que tenha.

/*
toBe

toBe, que utilizamos no exemplo anterior, é o matcher mais simples. 
Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. 
Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string “5” 
não é igual ao número 5.

toEqual

JavaScript faz comparação por referência . Isso significa que objetos e arrays com conteúdo 
iguais são considerados diferentes JavaScript. Para testar igualdade de objetos e arrays, 
é preciso usar o matcher toEqual, que acessa cada elemento do objeto ou array, 
fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes.

Arrays

Você pode verificar se um array contém um item em particular utilizando toContain . Para verificar que um item possui uma estrutura mais complexa, utilize toContainEqual . toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.

Exceções

toThrow testa que uma função lança um erro quando é executada. Note que é preciso envolver o código em uma função (normalmente uma arrow function). 
Chamar a função diretamente dentro de expect fará com que o erro não seja capturado, e a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro.

not

not permite testar o oposto de algo.
*/