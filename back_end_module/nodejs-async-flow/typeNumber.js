// function typeNumber(x, y, z) {
//   return new Promise((resolve, reject) => {
//     typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'
//       ? reject(new Error('Digite apenas números'))
//       : resolve(x + y);
//   }).then((sum) => {
//     console.log(sum);
//     sum * z < 50 ? Promise.reject(new Error('Valor muito baixo')) : console.log(sum * z);
//   });
// }

const typeNumber = async (x, y, z) => {
  typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number'
    ? Promise.reject(new Error('Digite apenas números'))
    : null;
  const sum = x + y;
  console.log('Sum of( x + y) = ', sum);
  const mult = sum * z;
  return mult < 50
    ? Promise.reject(new Error('Valor muito baixo'))
    : console.log('Multiplication of (sum * z) = ', mult);
};

typeNumber(20, 20, 20);
