const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const generateToken = require('./generate-token');

const validateData = (body) => body.email && body.password && body.firstName && body.phone;

router.post('/', async (req, res) => {
  if (!validateData(req.body)) return res.status(400).json({ message: 'missing data' });
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;
