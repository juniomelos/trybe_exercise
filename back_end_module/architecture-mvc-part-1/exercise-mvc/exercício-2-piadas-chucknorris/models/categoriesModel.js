const axios = require('axios');

const url = 'https://api.chucknorris.io/jokes/categories';

const getCategories = async () => {
  return (await axios.get(url)).data;
};

module.exports = { getCategories };
