// Atividade 3:
// Rotas: /posts/:id e /posts
// Objetivo: Deve receber uma requisição com o param id e verificar a existência do post com aquele id. Caso exista, retorne os dados daquele post. Caso não exista, retorne um status de erro com a mensagem id not found.. A rota /posts deve trazer todos os posts cadastrados.

const express = require('express');

const app = express();
const PORT = 3001;

const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: 'Hoje o dia está maneiro!',
  },
  {
    id: 3,
    author: 'Rodrigo Garga',
    comment: 'To aqui também',
  },
];

app.get('/posts/:id', (req, res) => {
  const { id: reqId } = req.params;
  const post = posts.find(({ id }) => id === reqId);
  if (post) {
    return res.status(200).json(post);
  }
  return res.status(404).json('id not found.');
});

app.get('/posts', (_req, res) => res.status(200).json(posts));

app.listen(PORT, () => console.log(`listen to port ${PORT} `));
