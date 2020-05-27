//  Mocke a requisição e crie dois testes.
//  O primeiro deve interpretar que a requisição se resolveu e teve como valor “request sucess”.
//  O segundo deve interpretar que a requisição falhou e ter como valor “request failed”.

const service = require('./exercises6');

describe('Mockando a requisição', () => {
  service.fetchDogPictures = jest.fn();

  test('Testar se requisição se resolveu e valor “request sucess"', async () => {
    service.fetchDogPictures.mockresolveValue('request sucess');

    service.fetchDogPictures();
    expect(service.fetchDogPictures).toHaveBeenCalled();
    expect()
    expect()
    expect()
  })

})