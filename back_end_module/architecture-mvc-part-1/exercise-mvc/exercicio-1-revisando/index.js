const express = require('express');
const app = express();
const { listJokes } = require('./controllers/jokeController');

const PORT = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', listJokes);

app.listen(PORT, () => console.log(`Listen to the port ${PORT}`));
