const jokeModel = require('../models/jokeModel');

const listJokes = async (_req, res) => {
  const joke = await jokeModel.getJokes();
  console.log(joke);
  return res.render('jokeView', { joke });
};

module.exports = { listJokes };
