const express = require('express');
const categoriesController = require('./controllers/categoriesController');
const jokesController = require('./controllers/jokesController');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/categories', categoriesController.getCategories);
app.get('/jokes', jokesController.getRandomJokes);
app.get('/jokes/:category', jokesController.getCategoryJoke);
app.get('/', categoriesController.redirectCategories);

app.listen(PORT, () => console.log(`Listen to the port ${PORT}`));
