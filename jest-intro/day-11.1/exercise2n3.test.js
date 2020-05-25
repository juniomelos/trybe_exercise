const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = id => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = userID => {
  return findUserById(userID).then(user => user.name);
};

//  2. Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função
//  getUserName para o caso em que o usuário é encontrado, e também um teste para o caso
//  em que o usuário não é encontrado.

//  Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users
//  para saber quais IDs existem.

describe('Exercise 2', () => {
  test('User is found', () => {
    expect.assertions(1);
    return getUserName(4).then(name => {
      expect(name).toBe('Mark');
    });
  });
  test('User is NOT found', () => {
    expect.assertions(1);
    return getUserName(7).catch(error => {
      expect(error).toEqual({
        error: 'User 7 is NOT found!',
      });
    });
  });
});

//  3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

//  Dica: Utilize o try/catch para o caso de erro.

describe('Exercise 3', () => {
  test('User is found', async () => {
    expect.assertions(1);
    const name = await getUserName(5);
    expect(name).toBe('Paul');
  });
  test('User is NOT found', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    } catch {
      expect(error).toEqual({
        error: 'User 7 is NOT found!',
      });
    }
  });
});
