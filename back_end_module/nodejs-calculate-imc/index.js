// const readlineSync = require('readline-sync');

// CalcIMC function using package readline-sync:

// function calcIMC() {
//   const weight = readlineSync.questionFloat('Say your weight: ').toFixed(2);
//   const height = readlineSync.questionFloat('Say your height: ').toFixed(2);

//   console.log('Your weight is %s (kg), and your height is %s (m)', weight, height);

//   const imc = (weight / Math.pow(height, 2)).toFixed(2);
//   console.log('Your IMC is: %s %', imc);

//   imc < 18.5 ? console.log('Low weight (thinness)') : '';
//   imc >= 18.5 && imc < 24.9 ? console.log('Normal weight') : '';
//   imc >= 25.0 && imc < 29.9 ? console.log('Overweight (overweight)') : '';
//   imc >= 30.0 && imc < 34.9 ? console.log('Grade I obesity') : '';
//   imc >= 35.0 && imc < 39.9 ? console.log('Grade II obesity') : '';
//   imc >= 40.0 ? console.log('Obesity grades III and IV') : '';
// }

const inquirer = require('inquirer');

// CalcIMC function using package inquirer:

const calcIMC = async () => {
  const prompt = inquirer.createPromptModule();

  const validatingResponses = await prompt([
    {
      type: 'input',
      name: 'weight',
      message: 'Say your weight: ',
      default: '0',
      validate: (input) => {
        return !isNaN(input) || 'Please enter a valid number';
      },
    },
    {
      type: 'input',
      name: 'height',
      message: 'Say your height: ',
      default: '0',
      validate: (input) => {
        return !isNaN(input) || 'Please enter a valid number';
      },
    },
  ]);

  const weight = parseFloat(validatingResponses.weight);
  const height = parseFloat(validatingResponses.height);

  console.log('Your weight is %s (kg), and your height is %s (m)', weight, height);

  const imc = (weight / Math.pow(height, 2)).toFixed(2);
  console.log('Your IMC is: %s %', imc);

  imc < 18.5 ? console.log('Low weight (thinness)') : '';
  imc >= 18.5 && imc < 24.9 ? console.log('Normal weight') : '';
  imc >= 25.0 && imc < 29.9 ? console.log('Overweight (overweight)') : '';
  imc >= 30.0 && imc < 34.9 ? console.log('Grade I obesity') : '';
  imc >= 35.0 && imc < 39.9 ? console.log('Grade II obesity') : '';
  imc >= 40.0 ? console.log('Obesity grades III and IV') : '';
};

calcIMC();
