const fetch = require('node-fetch');

const getRepos = url => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.map(repo => repo.name);
    });
};

//  4. O código abaixo busca no GitHub de um usuário, de acordo com a URL,
//  seus repositórios e retorna uma lista como resultado.
//  Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique
//  que os repositórios 'sd-01-week4-5-project-todo-list' e 
//  'sd-01-week4-5-project-meme-generator' se encontram nessa lista.


test('Repositories are on that list', async () => {
  const url = 'https://api.github.com/users/tryber/repos';

  return getRepos(url).then(result => {
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
  
//  const repositories = await getRepos(URL);
//  expect(repositories).toContain('sd-01-week4-5-project-todo-list');
//  expect(repositories).toContain('sd-01-week4-5-project-meme-generator');

//  expect(repositories.includes('sd-01-week4-5-project-todo-list')).toBe(false);
//  expect(repositories.includes('sd-01-week4-5-project-meme-generator')).toBe(false);
});
