// // Utilizando callback

// const fs = require('fs');
// const path = require('path');
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Digite o caminho do arquivo que deseja ler: ', (answer) => {
//   fs.readFile(path.resolve(__dirname, answer), (err, file) => {
//     if (err) return console.log(`Erro ao ler arquivo: ${err.message}`);

//     console.log(file.toString('utf8'));
//     console.log(__dirname);
//     console.log('---------------------');
//     console.log(`Arquivo de ${file.byteLength} bytes.`);

//     rl.close();
//   });
// });

// Utilizando async/await:

const fs = require('fs');
const util = require('util');
const path = require('path');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function start() {
  const answer = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const file = await readFile(path.resolve(__dirname, answer));
    console.log(file.toString('utf8'));
    console.log('---------------------');
    console.log(`Arquivo de ${file.byteLength} bytes.`);
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.message}`);
  }
};

start();
