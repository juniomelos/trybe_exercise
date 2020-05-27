//  Crie uma função que faça requisição para a api dog pictures.

async function fetchDogPictures () {
  const API_URL = 'https://dog.ceo/api/breeds/image/random'
  const response = await fetch(API_URL);
  const responseJSON = await response.json();
  return responseJSON;
}

// return responseJSON => response.ok ? Promise.resolve(responseJSON) : Promise.reject(responseJSON);

module.exports = { fetchDogPictures };
