const axios = require('axios');

const urlRandom = 'https://api.chucknorris.io/jokes/random';

const getRandomJokes = async () => {
  return (await axios.get(urlRandom)).data.value;
};

const getCategoryJoke = async (category) => {
  const urlCategory = `https://api.chucknorris.io/jokes/random?category=${category}`;
  return (await axios.get(urlCategory)).data.value;
};

module.exports = { getRandomJokes, getCategoryJoke };
