const randowNumber = () => {
  return new Promise((resolve, reject) => {
    let arrayNumber = [];
    for (let i = 0; i < 10; i += 1) {
      arrayNumber.push(Math.pow(Math.floor(Math.random() * 50, 2))); // números aleatórios de 1 a 50 elevados ao quadrado
    }
    const sum = arrayNumber.reduce((acc, curr) => acc + curr);
    //  soma dos elementos
    sum < 800 ? resolve(`${sum}: Success`) : reject('É mais de oito mil! Essa promise deve estar quebrada!');
    //  Se a soma dos elementos for < a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada
  });
};

randowNumber()
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
