const express = require('express');
const routeSimpsons = require('./routeSimpsons');
const tokenMiddleware = require('./tokenMiddleware');
const routeSignup = require('./routeSignup');
const app = express();

app.use(express.json());

app.use('/simpsons', routeSimpsons, tokenMiddleware);

app.use('/signup', routeSignup);

app.use('*', function (req, res) {
  res.status(404).json({ message: "endpoint does not exist! sorry )':" });
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Something went wrong! Message: ${err.message}`);
});

app.listen(3000, () => console.log('Listening at port 3000!'));
