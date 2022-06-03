const { saveFavoriteMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => favoriteCards.splice(4);

describe(' Testa a função saveFavoriteMagicCard', () => {
afterEach(() => retrievesFavoriteCards())
  it('Testa se um novo card é adicionado a cada execução', async () => {
    const expected = 'Beacon of Immortality'
    expect.assertions(3);
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5)
    expect(favoriteCards.slice(-1)[0].name).toEqual(expected)
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards).toHaveLength(6)
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    const result = [...favoriteCards].map((card) => card.name)
    const expected = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    expect(result).toEqual(expected)
  });
});
