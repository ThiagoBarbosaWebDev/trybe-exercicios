require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    expect(response.name).toBe('Ancestor\'s Chosen')
  });
  it('Deve verificar se getMagicCard é uma função', () => {
    expect(typeof getMagicCard).toBe('function')
  });
  it('Deve verificar se a função fetch é chamada ao chamar getMagicCard com argumento 130550', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled()
  });
  it('Deve verificar se a função fetch é chamada com o endpoint correto ao chamar getMagicCard com argumento 130550', async () => {
    const endpoint = 'https://api.magicthegathering.io/v1/cards/130550'
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(endpoint)
  });
  it('Deve verificar se a função getMagicCard retorna o objeto esperado', async () => {
    const result = await getMagicCard('130550')
    expect(result).toEqual(card)
  });
  it('Deve verificar se a função getMagicCard retorna o esperado caso passado um argumento não existente', async () => {
    const result = await getMagicCard('idDesconhecido')
    const expected = new Error('Id is not found!')
    expect(result).toEqual(expected)
  });
});
