const Jokes = require('../models/jokesModel');

const getRandomJokes = async (_req, res) => {
  const joke = await Jokes.getRandomJokes();
  res.render('jokes/index', { joke });
};

const getCategoryJoke = async (req, res) => {
  const { category } = req.params;
  const joke = await Jokes.getCategoryJoke(category);
  res.render('jokes/index', { joke });
};

module.exports = { getRandomJokes, getCategoryJoke };
