//  4. Crie 3 funções:
//  A primeira deve receber uma string e retorná-la em caixa alta.
//  A segunda deve também receber uma string e retornar só a primeira letra.
//  A terceira deve receber duas strings e concatená-las.

const strUpperCase = str => str.toUpperCase();
const strFirstLetter = str => str.charAt();
const strConcatenated = (a, b) => a.concat(b);

module.exports = {
  strUpperCase,
  strFirstLetter,
  strConcatenated,
};
