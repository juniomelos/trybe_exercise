//  Mocke a requisição e crie dois testes.
//  O primeiro deve interpretar que a requisição se resolveu e teve como valor “request sucess”.
//  O segundo deve interpretar que a requisição falhou e ter como valor “request failed”.

const service = require('./exercises6');

describe('Mockando a requisição', () => {
  service.fetchDogPictures = jest.fn();
  afterEach(service.fetchDogPictures.mockReset);
  //  Depois do primeiro teste ele reseta a função.

  test('Testar se requisição se resolveu e valor request sucess', async () => {
    service.fetchDogPictures.mockResolvedValue('request sucess');

    service.fetchDogPictures();
    expect(service.fetchDogPictures).toHaveBeenCalled();
    expect(service.fetchDogPictures).toHaveBeenCalledTimes(1);
    expect(service.fetchDogPictures()).resolves.toBe('request sucess');
    expect(service.fetchDogPictures).toHaveBeenCalledTimes(2);
  })


  test('Testar se requisição se resolveu e valor request failed', async () => {
    service.fetchDogPictures.mockResolvedValue('request failed');

    expect(service.fetchDogPictures()).rejects.toMatch('request failed');
    expect(service.fetchDogPictures).toHaveBeenCalledTimes(1);
    //  Como a função foi reseta, essa é a primeira vez que é chamado esse teste.
  });

})