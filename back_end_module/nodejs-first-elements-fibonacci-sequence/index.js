const inquirer = require('inquirer');

function validateIsNumberInt(value) {
  if (value < 0) return 'Informe um número maior ou igual a 0';
  if (Number.isNaN(value) || !(parseInt(value) === parseFloat(value)))
    return 'Informe um número inteiro';
  return true;
}

function calculaElemento(n) {
  let num1 = 1,
    num2 = 1,
    seq,
    str = '';

  for (let i = 0; i < n; i++) {
    if (i === n - 1) str += `${num1}`;
    else str += `${num1} `;
    if (num1) console.log(num1);

    seq = num1 + num2;
    num1 = num2;
    num2 = seq;
  }
  console.log(num2);
  return num2;
}

async function realizaCalculo() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      validate: validateIsNumberInt,
      name: 'n',
      message: 'Informe o valor de n:',
    },
  ]);

  const n = parseInt(answers.n, 10);

  console.log('n: %s', n);

  calculaElemento(n - 1);
}

realizaCalculo();

// function calculaElemento(n) {
//   let arr = [];

//   let a = 0;
//   let b = 1;
//   let x = 1;

//   for (let i = 0; i < n; i++) {
//     if(b) console.log(b);
//     arr.push(x);
//     x = a + b;
//     a = b;
//     b = x;
//   }
//   console.log(b);
//   return b;
// }
