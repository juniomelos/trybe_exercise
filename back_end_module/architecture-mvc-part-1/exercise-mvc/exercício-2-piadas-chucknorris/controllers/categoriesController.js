const Categories = require('../models/categoriesModel');

const getCategories = async (_req, res) => {
  const categories = await Categories.getCategories();
  res.render('categories/index', { categories });
};

const redirectCategories = (_req, res) => {
  res.redirect('/categories');
};

module.exports = { getCategories, redirectCategories };
