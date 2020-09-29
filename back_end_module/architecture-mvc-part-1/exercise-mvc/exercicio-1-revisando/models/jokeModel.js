const axios = require('axios');
const url =
  'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const getJokes = async () => {
  return (await axios(url)).data.joke;
};

module.exports = { getJokes };
