// Atividade 1:
// Rota: /login
// Objetivo: Receber uma requisição que envie email/senha e receba um token como resposta. O formato desse token deve ser uma string aleatória com 12 caracteres. O email recebido deve ter o formato email@mail.com e a senha deve conter no mínimo 4 caracteres e no máximo 8, todos números. Caso algum desses campos seja enviado em formato incorreto, deve-se retornar uma mensagem de erro email or password is incorrect. e seu devido status code.

const express = require('express');
const crypto = require('crypto');

const app = express();

const validateEmail = (emailAdress) => {
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailAdress.match(regexEmail);
};

const validatePassword = (password) => {
  Number(password);
  const validation = password.split('').every((char) => {
    return char.match(/^[0-9]{1,}$/);
  });
  if (password.length >= 4 && password.length <= 8 && validation) return true;
  return false;
};

app.post('/login', (req, res) => {
  const { password, email } = req.query;
  const cryptoToken = crypto.randomBytes(12).toString('hex');
  if (validateEmail(email) && validatePassword(password)) return res.status(200).send(cryptoToken);
  res.status(403).send('E-mail or password is not correct');
});

app.listen(3001, () => {
  console.log('O pai tá ON!');
});
