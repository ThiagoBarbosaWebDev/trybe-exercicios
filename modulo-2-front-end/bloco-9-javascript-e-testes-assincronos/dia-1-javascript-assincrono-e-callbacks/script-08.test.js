// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./script-08');

describe('A função getPokemonDetails', () => {
  const filtroError = (pkm) => pkm.name === 'Bulbasaur2';
  const onError = 'Não temos esse pokémon para você :(';
  const filtroSuccess = (pkm) => pkm.name === 'Bulbasaur';
  const onSuccess =
    'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    getPokemonDetails(filtroError, (error, message) => {
        expect(error.message).toBe(onError);
        done();
    });
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    getPokemonDetails(filtroSuccess, (error, message) => {
      expect(message).toBe(onSuccess);
      done();
    });
  });
});
